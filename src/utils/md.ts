import { marked } from 'marked';

export function parseMD(md: string) {
  let html = marked.parse(md) as string;
  html = html.replaceAll(/<a href="([^"]+)">/g, '<a class="external" href="$1" rel="noopener noreferrer" target="_blank">');
  return html;
}