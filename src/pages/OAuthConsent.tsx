import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

type AuthOAuth = {
  getAuthorizationDetails: (id: string) => Promise<{ data: any; error: any }>;
  approveAuthorization: (id: string) => Promise<{ data: any; error: any }>;
  denyAuthorization: (id: string) => Promise<{ data: any; error: any }>;
};

function authOAuth(): AuthOAuth {
  return (supabase.auth as unknown as { oauth: AuthOAuth }).oauth;
}

export default function OAuthConsent() {
  const [params] = useSearchParams();
  const authorizationId = params.get("authorization_id") ?? "";
  const [details, setDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    let active = true;
    (async () => {
      if (!authorizationId) return setError("Missing authorization_id");
      const { data: sess } = await supabase.auth.getSession();
      if (!sess.session) {
        const next = window.location.pathname + window.location.search;
        window.location.href = "/login?next=" + encodeURIComponent(next);
        return;
      }
      const { data, error } = await authOAuth().getAuthorizationDetails(authorizationId);
      if (!active) return;
      if (error) return setError(error.message ?? String(error));
      const immediate = data?.redirect_url ?? data?.redirect_to;
      if (immediate && !data?.client) {
        window.location.href = immediate;
        return;
      }
      setDetails(data);
    })();
    return () => {
      active = false;
    };
  }, [authorizationId]);

  async function decide(approve: boolean) {
    setBusy(true);
    setError(null);
    const { data, error } = approve
      ? await authOAuth().approveAuthorization(authorizationId)
      : await authOAuth().denyAuthorization(authorizationId);
    if (error) {
      setBusy(false);
      return setError(error.message ?? String(error));
    }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) {
      setBusy(false);
      return setError("No redirect returned by the authorization server.");
    }
    window.location.href = target;
  }

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="max-w-md rounded-2xl border border-border bg-card p-8 text-center">
          <h1 className="font-heading text-xl font-bold text-foreground">Authorization error</h1>
          <p className="mt-2 text-sm text-muted-foreground">{error}</p>
        </div>
      </main>
    );
  }

  if (!details) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <p className="text-sm text-muted-foreground">Loading…</p>
      </main>
    );
  }

  const clientName = details.client?.name ?? details.client?.client_name ?? "an app";
  const redirectUri = details.client?.redirect_uri ?? details.redirect_uri;

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-xl">
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Connect {clientName} to TripUp Studio
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          {clientName} will be able to call this app's enabled tools while you are signed in.
        </p>

        <div className="mt-6 space-y-3 rounded-xl border border-border bg-background p-4 text-sm">
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Client</p>
            <p className="text-foreground">{clientName}</p>
          </div>
          {redirectUri && (
            <div>
              <p className="text-muted-foreground text-xs uppercase tracking-wide">Redirect</p>
              <p className="break-all text-foreground">{redirectUri}</p>
            </div>
          )}
          <div>
            <p className="text-muted-foreground text-xs uppercase tracking-wide">Access</p>
            <p className="text-foreground">This lets {clientName} use TripUp Studio as you.</p>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          This does not bypass this app's permissions or backend policies.
        </p>

        <div className="mt-6 flex gap-3">
          <Button onClick={() => decide(false)} disabled={busy} variant="outline" className="flex-1">
            Cancel
          </Button>
          <Button onClick={() => decide(true)} disabled={busy} variant="hero" className="flex-1">
            Approve
          </Button>
        </div>
      </div>
    </main>
  );
}
