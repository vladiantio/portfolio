export interface PostResponse {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id:            number;
  title:         string;
  slug:          string;
  content:       string;
  description:   string;
  visibility:    boolean;
  readingTime:   string;
  createdAt:     Date;
  updatedAt:     Date;
  publishedAt:   Date;
  locale:        string | null;
  tags:          Tag[];
  image:         Media | null;
}

export interface Tag {
  id:          number;
  name:        string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  locale:      string | null;
}

export interface Media {
  id:              number;
  name:            string;
  alternativeText: string;
  width:           number;
  height:          number;
  mime:            string;
  url:             string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page:      number;
  pageSize:  number;
  pageCount: number;
  total:     number;
}
