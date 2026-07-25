import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const API_BASE = "https://tripup-backend.vercel.app/api/v1";

export default defineTool({
  name: "list_travel_insights",
  title: "List travel insights",
  description: "List published TripUp Studio travel insight articles with title, slug, category, and summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async () => {
    const res = await fetch(`${API_BASE}/travel-insights`);
    if (!res.ok) {
      return { content: [{ type: "text", text: `Failed to fetch travel insights: ${res.status}` }], isError: true };
    }
    const json = await res.json();
    const items = (json?.data ?? []).map((i: any) => ({
      title: i.title,
      slug: i.slug,
      category: i.category,
      summary: i.summary ?? i.description,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { travelInsights: items },
    };
  },
});
