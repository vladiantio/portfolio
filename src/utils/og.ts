import { experimental_AstroContainer } from "astro/container"
import fs from "fs/promises"
import { decode } from "html-entities"
import satori, { type Font } from "satori"
import { html } from "satori-html"
import sharp from "sharp"

type VNode = ReturnType<typeof html>

function unescapeHTML(node: VNode) {
  const children = node?.props?.children
  if (!children) {
    return
  } else if (Array.isArray(children)) {
    for (const n of children) {
      unescapeHTML(n)
    }
  } else if (typeof children === 'object') {
    unescapeHTML(children)
  } else if (typeof children === 'string') {
    node.props.children = decode(children)
  }
}

type AstroRenderParameters = Parameters<typeof experimental_AstroContainer.prototype.renderToString>

export const OG = async (...parameters: AstroRenderParameters) => {
  const fonts: Font[] = [
    {
      name: "Figtree",
      data: await fs.readFile(
        "./src/assets/og/fonts/Figtree-Regular.ttf"
      ),
      weight: 400,
    },
    {
      name: "Figtree",
      data: await fs.readFile(
        "./src/assets/og/fonts/Figtree-Bold.ttf"
      ),
      weight: 700,
    },
    {
      name: "Figtree",
      data: await fs.readFile(
        "./src/assets/og/fonts/Figtree-Black.ttf"
      ),
      weight: 900,
    },
  ]
  const container = await experimental_AstroContainer.create()
  const template = await container.renderToString(...parameters)

  return {
    async toSvg() {
      const node = html(template)
      unescapeHTML(node)
      return await satori(node, {
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
