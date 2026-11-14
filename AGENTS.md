<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

## What Lovable manages

Rules outside this block are the project's own. Change the pieces below in
Lovable, not by hand. With the [Lovable MCP](https://mcp.lovable.dev)
connected, `send_message` asks Lovable to do it; otherwise ask the user to
use the editor.

- **Database.** Do not add or edit `supabase/migrations/` or `drizzle/`.
  Ask Lovable to change the schema.
- **Generated files.** Do not edit a file whose header says it is automatically
  generated.
- **AI gateway.** Keep model calls on Lovable's gateway, and keep
  `LOVABLE_API_KEY` out of browser code.
- **Connectors.** Lovable provides native connectors. `list_connectors` shows
  which are enabled; `add_connector` only returns the dashboard link. When a
  connector is enabled, calls go through the connector gateway and need
  `LOVABLE_API_KEY`. When Lovable does not provide one, users can bring their
  own key and store it in Secrets.
- **Secrets.** Lovable manages them. Do not put secret values in the repo.
<!-- LOVABLE:END -->

## Presentation architecture
- Keep photo references in the shared content module using CDN asset pointers so page images stay consistent without storing uploaded binaries.
- Resolve Lovable asset pointers through the public asset origin in the shared content module so external hosts do not request unsupported same-origin asset paths.
- Animate notable interview names with right-origin CSS transforms, not font-size or layout changes, to prevent row shifts and respect reduced motion.
- Mount the pointer-only custom cursor once in the shared layout; use passive pointer events, direct position updates, and a separate animated trail so clicks and touch input stay unaffected.
- Keep the home cover photo full-section on every device with absolutely positioned object-cover imagery; on phones the cover fills the viewport with all copy and buttons grouped at the bottom, leaving the portrait clear above.

- Serve optimized WebP photo pointers from shared content while retaining original pointers; eagerly fetch page photos with one high-priority preloaded cover and low-priority secondary images to reduce transfer size without delaying the first screen.
