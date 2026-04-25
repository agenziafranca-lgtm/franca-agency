import { MetadataRoute } from "next"
import { cases } from "@/lib/cases"

const BASE_URL = "https://franca-agency.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const casePages = cases.map((c) => ({
    url: `${BASE_URL}/work/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...casePages,
  ]
}
