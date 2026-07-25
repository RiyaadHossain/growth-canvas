import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function safeNext(raw: string | null): string {
  if (!raw) return "/";
  if (!raw.startsWith("/") || raw.startsWith("//")) return "/";
  return raw;
}

export default function Login() {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const next = safeNext(params.get("next"));
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) window.location.replace(next);
    });
  }, [next]);

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const fn = mode === "signin"
      ? supabase.auth.signInWithPassword({ email, password })
      : supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/login?next=${encodeURIComponent(next)}` },
        });
    const { error } = await fn;
    setBusy(false);
    if (error) return setError(error.message);
    window.location.replace(next);
  }

  async function handleGoogle() {
    setBusy(true);
    setError(null);
    const returnUrl = `${window.location.origin}/login?next=${encodeURIComponent(next)}`;
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: returnUrl });
    if (result.error) {
      setBusy(false);
      setError(result.error.message ?? "Google sign-in failed");
      return;
    }
    if (result.redirected) return;
    window.location.replace(next);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-sm rounded-2xl border border-border bg-card p-8 shadow-xl">
        <h1 className="font-heading text-2xl font-bold text-foreground">
          {mode === "signin" ? "Sign in" : "Create account"}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {mode === "signin" ? "Welcome back to TripUp Studio." : "Join TripUp Studio."}
        </p>

        <Button onClick={handleGoogle} disabled={busy} variant="outline" className="mt-6 w-full">
          Continue with Google
        </Button>

        <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
          <div className="h-px flex-1 bg-border" /> or <div className="h-px flex-1 bg-border" />
        </div>

        <form onSubmit={handleEmail} className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" disabled={busy} className="w-full" variant="hero">
            {mode === "signin" ? "Sign in" : "Create account"}
          </Button>
        </form>

        <button
          onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          className="mt-6 w-full text-center text-sm text-muted-foreground hover:text-foreground"
        >
          {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
        </button>
      </div>
    </main>
  );
}
