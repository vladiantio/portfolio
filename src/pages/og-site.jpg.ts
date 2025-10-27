import type { APIRoute } from "astro"
import { OG } from "@/utils/og"
import OGSite from "@/components/og/OGSite.astro"

export const GET: APIRoute = async () => {
  const og = await OG(OGSite)
  return og.toResponse()
}
