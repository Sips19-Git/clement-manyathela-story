// Asset pointers are served by Lovable's hosting layer, not by Vercel.
// Use the project's public asset origin so the same originals work on any host.
const publicAssetOrigin = "https://clement-manyathela-story.lovable.app";

export function assetUrl(asset: { url: string }): string {
  return asset.url.startsWith("/__l5e/assets-v1/")
    ? new URL(asset.url, publicAssetOrigin).href
    : asset.url;
}