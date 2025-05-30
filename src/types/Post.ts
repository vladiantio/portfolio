import type { CollectionEntry } from "astro:content";
import type { Locale } from "@/i18n/constants";

export type PostEntry = CollectionEntry<'blog'> & {
  lang: Locale;
  next?: PostEntry;
  previous?: PostEntry;
};
