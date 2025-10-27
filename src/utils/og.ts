import { experimental_AstroContainer } from "astro/container"
import fs from "fs/promises"
import satori, { type Font } from "satori"
import { html } from "satori-html"
import sharp from "sharp"

type AstroRenderParameters = Parameters<typeof experimental_AstroContainer.prototype.renderToString>

export const OG = async (...parameters: AstroRenderParameters) => {
  const fonts: Font[] = [
    {
      name: "Figtree",
      data: await fs.readFile(
        "./src/assets/og/fonts/Figtree-Regular.ttf"
      ),
      weight: 400
    },
    {
      name: "Figtree",
      data: await fs.readFile(
        "./src/assets/og/fonts/Figtree-Bold.ttf"
      ),
      weight: 700
    },
    {
      name: "Figtree",
      data: await fs.readFile(
        "./src/assets/og/fonts/Figtree-Black.ttf"
      ),
      weight: 900
    }
  ]
  const container = await experimental_AstroContainer.create()
  const template = await container.renderToString(...parameters)

  return {
    async toSvg() {
      return await satori(html(template), {
        width: 1080,
        height: 567,
        fonts,
      })
    },
    async toImage() {
      const svg = await this.toSvg()
      return await sharp(Buffer.from(svg))
        .jpeg({
          mozjpeg: true,
          quality: 85,
          progressive: true,
        })
        .toBuffer()
    },
    async toResponse() {
      const image = await this.toImage()
      const bytes = new Uint8Array(image)
      return new Response(bytes, {
        headers: {
          "Content-Type": "image/jpeg",
          "Content-Length": image.length.toString(),
          "Cache-Control": "public, max-age=31536000, immutable",
        },
      })
    },
  }
}
