import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);

    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    const readingTime = getReadingTime(textOnPage);

    // Remove the " read" part by using replace
    data.astro.frontmatter.readingTime = readingTime.text.replace(' read', '');
  };
}