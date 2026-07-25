import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";

const API_BASE = "https://tripup-backend.vercel.app/api/v1";

export default defineTool({
  name: "list_playbooks",
  title: "List guides & playbooks",
  description: "List published TripUp Studio guides and playbooks with title, slug, category, and summary.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: true },
  handler: async () => {
    const res = await fetch(`${API_BASE}/playbooks`);
    if (!res.ok) {
      return { content: [{ type: "text", text: `Failed to fetch playbooks: ${res.status}` }], isError: true };
    }
    const json = await res.json();
    const items = (json?.data ?? []).map((p: any) => ({
      title: p.title,
      slug: p.slug,
      category: p.category,
      summary: p.summary ?? p.description,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { playbooks: items },
    };
  },
});
