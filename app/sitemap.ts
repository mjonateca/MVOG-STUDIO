import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mvog-studio.vercel.app";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects/casa-174`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
  ];
}
