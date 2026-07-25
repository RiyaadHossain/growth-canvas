import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const API_BASE = "https://tripup-backend.vercel.app/api/v1";

const PATHS: Record<string, string> = {
  service: "travel-services",
  case_study: "case-studies",
  playbook: "playbooks",
  travel_insight: "travel-insights",
};

export default defineTool({
  name: "get_resource",
  title: "Get resource by slug",
  description: "Fetch the full content of a single TripUp Studio resource by type and slug. Type must be one of: service, case_study, playbook, travel_insight.",
  inputSchema: {
    type: z.enum(["service", "case_study", "playbook", "travel_insight"]).describe("Resource type"),
    slug: z.string().min(1).describe("Slug of the resource"),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async ({ type, slug }) => {
    const path = PATHS[type];
    const res = await fetch(`${API_BASE}/${path}/slug/${encodeURIComponent(slug)}`);
    if (!res.ok) {
      return { content: [{ type: "text", text: `Failed to fetch ${type} "${slug}": ${res.status}` }], isError: true };
    }
    const json = await res.json();
    return {
      content: [{ type: "text", text: JSON.stringify(json?.data ?? json, null, 2) }],
      structuredContent: { resource: json?.data ?? json },
    };
  },
});
