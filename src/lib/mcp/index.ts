import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listServices from "./tools/list-services";
import listCaseStudies from "./tools/list-case-studies";
import listPlaybooks from "./tools/list-playbooks";
import listTravelInsights from "./tools/list-travel-insights";
import getResource from "./tools/get-resource";

const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "tripup-studio-mcp",
  title: "TripUp Studio MCP",
  version: "0.1.0",
  instructions:
    "Tools for browsing TripUp Studio's travel-growth services, case studies, guides & playbooks, and travel insights. Use `list_*` to discover resources, then `get_resource` with the returned slug to fetch full content.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listServices, listCaseStudies, listPlaybooks, listTravelInsights, getResource],
});
