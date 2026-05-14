import { useQuery } from "@tanstack/react-query";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Skeleton } from "@/components/ui/skeleton";

type TeamMember = {
  id: string;
  name: string;
  designation: string;
  bio: string;
  profileImg: string;
  displayOrder?: number;
  isPublished?: boolean;
};

type ApiResponse = {
  success: boolean;
  message: string;
  data: TeamMember[];
};

const TEAM_API_URL = "https://tripup-backend.onrender.com/api/v1/team-members";

async function fetchTeam(): Promise<TeamMember[]> {
  const res = await fetch(TEAM_API_URL);
  if (!res.ok) throw new Error("Failed to load team members");
  const json: ApiResponse = await res.json();
  return (json.data ?? [])
    .filter((m) => m.isPublished !== false)
    .sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
}

export default function TeamSection() {
  const { data: team, isLoading, isError } = useQuery({
    queryKey: ["team-members"],
    queryFn: fetchTeam,
    staleTime: 1000 * 60 * 5,
  });

  return (
    <section className="section-padding">
      <div className="container-wide">
        <ScrollReveal>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">Meet a Few of the Specialists</h2>
          <p className="mt-3 max-w-xl text-muted-foreground">
            Senior talent across every discipline — no juniors learning on your dime.
          </p>
        </ScrollReveal>
        <div className="mt-12 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {isLoading &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex h-full flex-col rounded-xl border border-border bg-card p-6">
                <Skeleton className="mb-4 h-16 w-16 rounded-full" />
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="mt-2 h-4 w-1/2" />
                <Skeleton className="mt-3 h-4 w-full" />
                <Skeleton className="mt-2 h-4 w-5/6" />
              </div>
            ))}

          {isError && (
            <p className="col-span-full text-sm text-muted-foreground">
              Couldn't load team members right now. Please try again later.
            </p>
          )}

          {team?.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.05} className="h-full">
              <div className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                {member.profileImg ? (
                  <img
                    src={member.profileImg}
                    alt={member.name}
                    className="mb-4 h-16 w-16 rounded-full object-cover border border-border"
                    loading="lazy"
                  />
                ) : (
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-border bg-gradient-to-br from-primary/20 to-accent/10 font-heading text-lg font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                )}
                <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.designation}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
