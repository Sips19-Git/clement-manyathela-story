import { describe, expect, it } from "vitest";
import { assetUrl } from "@/lib/asset-url";
import { photos, services } from "@/lib/content";

describe("Portable original photo URLs", () => {
  it("resolves Lovable photo paths independently of the deployment host", () => {
    expect(assetUrl({ url: "/__l5e/assets-v1/original/photo.png" })).toBe(
      "https://clement-manyathela-story.lovable.app/__l5e/assets-v1/original/photo.png",
    );
  });

  it("preserves already public external URLs and repository assets", () => {
    expect(assetUrl({ url: "https://example.com/original.png" })).toBe("https://example.com/original.png");
    expect(assetUrl({ url: "/favicon.png" })).toBe("/favicon.png");
  });

  it("makes all 21 originals and all service photos portable to Vercel", () => {
    expect(Object.values(photos)).toHaveLength(21);
    for (const url of [...Object.values(photos), ...services.map((service) => service.img)]) {
      expect(new URL(url, "https://external-host.vercel.app").origin).toBe(
        "https://clement-manyathela-story.lovable.app",
      );
    }
    expect(services.map((service) => service.img)).toEqual([
      photos.miningWeek, photos.programmeDirector, photos.corporateEvents,
    ]);
  });
});