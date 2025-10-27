import type { APIRoute } from "astro"
import sharp from "sharp"
import ico from "sharp-ico"
import path from "node:path"

const faviconSrc = path.resolve("src/assets/favicon.svg")
const sizes = [16, 32, 48]

export const GET: APIRoute = async () => {
  const buffers = await Promise.all(
    sizes.map(async (size) => {
      return await sharp(faviconSrc).resize(size).toFormat("png").toBuffer()
    })
  )

  const icoBuffer = ico.encode(buffers)
  const bytes = new Uint8Array(icoBuffer)

  return new Response(bytes, {
    headers: {
      "Content-Type": "image/x-icon"
    }
  })
}
