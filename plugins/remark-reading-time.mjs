import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    // readingTime.text will give us minutes read as a friendly string,
    // i.e. "3 min read"
    let readingTimeText = readingTime.text;
    const { language } = data.astro.frontmatter;
    if (language && language === 'es')
      readingTimeText = readingTimeText.replace(' read', ' lectura');
    data.astro.frontmatter.readingTime = readingTimeText;
  };
}