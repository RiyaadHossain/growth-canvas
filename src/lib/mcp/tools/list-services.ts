import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const API_BASE = "https://tripup-backend.vercel.app/api/v1";

export default defineTool({
  name: "list_services",
  title: "List services",
  description: "List all published TripUp Studio travel-growth services with their titles, categories, slugs, and descriptions.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async () => {
    const res = await fetch(`${API_BASE}/travel-services`);
    if (!res.ok) {
      return { content: [{ type: "text", text: `Failed to fetch services: ${res.status}` }], isError: true };
    }
    const json = await res.json();
    const items = (json?.data ?? []).map((s: any) => ({
      title: s.title,
      slug: s.slug,
      category: s.category,
      description: s.description,
      comingSoon: s.comingSoon ?? false,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { services: items },
    };
  },
});
