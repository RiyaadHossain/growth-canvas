import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const API_BASE = "https://tripup-backend.vercel.app/api/v1";

export default defineTool({
  name: "list_case_studies",
  title: "List case studies",
  description: "List published TripUp Studio case studies with title, slug, category, and summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async () => {
    const res = await fetch(`${API_BASE}/case-studies`);
    if (!res.ok) {
      return { content: [{ type: "text", text: `Failed to fetch case studies: ${res.status}` }], isError: true };
    }
    const json = await res.json();
    const items = (json?.data ?? []).map((c: any) => ({
      title: c.title,
      slug: c.slug,
      category: c.category,
      summary: c.summary ?? c.description,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { caseStudies: items },
    };
  },
});
