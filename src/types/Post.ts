export interface PostResponse {
  data: Post[];
  meta: Meta;
}

export interface Post {
  id:            number;
  documentId:    string;
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
}

export interface Tag {
  id:          number;
  documentId:  string;
  name:        string;
  slug:        string;
  createdAt:   Date;
  updatedAt:   Date;
  publishedAt: Date;
  locale:      string | null;
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
