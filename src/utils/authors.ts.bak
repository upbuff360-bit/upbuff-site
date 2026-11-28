/**
 * Author photos for blog posts.
 * Key = the exact `author:` name used in the post front matter.
 * Photos live in /public/images/authors/ (square, 200×200, WebP).
 * Authors not listed here show their initials instead.
 */
const AUTHOR_PHOTOS: Record<string, string> = {
  'Kinjal Gala': '/images/authors/kinjal-gala-upbuff.webp',
  'Rajesh K': '/images/authors/rajesh-k-upbuff.webp',
  Shiburaj: '/images/authors/shiburaj-upbuff.webp',
  Subrat: '/images/authors/subrat-upbuff.webp',
  'Visakh Viswanath': '/images/authors/visakh-viswanath-upbuff.webp',
};

export const getAuthorPhoto = (name?: string): string | undefined =>
  name ? AUTHOR_PHOTOS[name.trim()] : undefined;
