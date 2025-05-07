import type { APIContext } from "astro";
import { readdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import SVGSpriter from "svg-sprite";

const ICON_DIR = "./src/assets/icons";

export async function getStaticPaths() {
  return (await readdir(ICON_DIR, { withFileTypes: true }))
    .filter(dirent => dirent.isDirectory())
    .map(dirent => ({
      params: { pack: dirent.name }
    }));
}

export async function GET({ params }: APIContext) {
  const dir = resolve(ICON_DIR, params.pack!);

  const spriter = new SVGSpriter({ mode: { symbol: true } });

  for (const svg of await readdir(dir)) {
    const path = resolve(dir, svg);
    spriter.add(path, svg, await readFile(path).then(file => file.toString()));
  }

  const { result } = await spriter.compileAsync();

  const svg = result.symbol.sprite.contents;
  return new Response(svg, { headers: { "content-type": "image/svg+xml" } });
};
