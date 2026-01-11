import { WPPost, WPPage, WPCategory, WPMedia } from '@/types/wordpress';

const WP_API_URL = 'https://stacypaetz.com/wp-json/wp/v2';

async function fetchAPI<T>(endpoint: string, params: Record<string, string> = {}): Promise<T> {
  const url = new URL(`${WP_API_URL}${endpoint}`);
  Object.entries(params).forEach(([key, value]) => {
    url.searchParams.append(key, value);
  });

  const res = await fetch(url.toString(), {
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint}: ${res.status}`);
  }

  return res.json();
}

export async function getPages(): Promise<WPPage[]> {
  return fetchAPI<WPPage[]>('/pages', { per_page: '100', _embed: 'true' });
}

export async function getPageBySlug(slug: string): Promise<WPPage | null> {
  const pages = await fetchAPI<WPPage[]>('/pages', { slug, _embed: 'true' });
  return pages[0] || null;
}

export async function getPosts(perPage = 10, page = 1): Promise<WPPost[]> {
  return fetchAPI<WPPost[]>('/posts', {
    per_page: perPage.toString(),
    page: page.toString(),
    _embed: 'true',
  });
}

export async function getAllPosts(): Promise<WPPost[]> {
  return fetchAPI<WPPost[]>('/posts', { per_page: '100', _embed: 'true' });
}

export async function getPostBySlug(slug: string): Promise<WPPost | null> {
  const posts = await fetchAPI<WPPost[]>('/posts', { slug, _embed: 'true' });
  return posts[0] || null;
}

export async function getPostsByCategory(categoryId: number): Promise<WPPost[]> {
  return fetchAPI<WPPost[]>('/posts', {
    categories: categoryId.toString(),
    per_page: '100',
    _embed: 'true',
  });
}

export async function getCategories(): Promise<WPCategory[]> {
  return fetchAPI<WPCategory[]>('/categories', { per_page: '100' });
}

export async function getMedia(id: number): Promise<WPMedia> {
  return fetchAPI<WPMedia>(`/media/${id}`);
}

export async function getAllMedia(): Promise<WPMedia[]> {
  return fetchAPI<WPMedia[]>('/media', { per_page: '100' });
}

// Helper to strip HTML tags for plain text
export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim();
}

// Helper to decode HTML entities
export function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#039;': "'",
    '&nbsp;': ' ',
    '&#8217;': "'",
    '&#8220;': '"',
    '&#8221;': '"',
    '&#8211;': '–',
    '&#8212;': '—',
  };

  return text.replace(/&[^;]+;/g, (match) => entities[match] || match);
}
