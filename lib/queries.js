const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
  "categories": categories[]->{name, "slug":slug.current}
`;

export const algoliaPostField = `
  "objectID": _id,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name},
  "categories": categories[]->{name, "slug":slug.current},
  "headings": content[style in ['h2', 'h3', 'h4', 'h5', 'h6']].children[0].text
`;

export const algoliaPostProjection = `
{
  "objectID": _id,
  title,
  date,
  excerpt,
  "slug": slug.current,
  "author": author->{name},
  "categories": categories[]->{name, "slug":slug.current},
  "headings": content[style in ['h2', 'h3', 'h4', 'h5', 'h6']].children[0].text
}
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const algoliaIndexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${algoliaPostField}
}`;

export const postListByCategoryQuery = `
*[_type == "post" && $category in categories[]->slug.current] | order(date desc, _updatedAt desc) {
  ${postFields}
}
`;

export const relatedPostListQuery = `
*[_type == "post" && $category in categories[]->slug.current && slug.current != $excludedSlug] | order(date desc, _updatedAt desc) [0...8] {
  ${postFields}
}
`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...8] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

export const legalPageBySlugQuery = `
*[_type == "legal" && slug.current == $slug][0] {
  _id,
  title,
  content,
  date,
  "slug": slug.current,
}
`;

export const categoriesQuery = `
*[_type == "category"] | order(_updatedAt desc) {
  _id,
  name,
  "slug": slug.current
}
`;
