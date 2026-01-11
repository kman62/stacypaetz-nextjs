import { getAllPosts, getCategories, stripHtml, decodeHtmlEntities } from '@/lib/wordpress';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Blog - Stacy Paetz',
  description: 'Latest news, updates, and stories from Stacy Paetz',
};

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    getCategories(),
  ]);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-400">
            Stories, updates, and behind-the-scenes moments
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
              All Posts
            </span>
            {categories
              .filter((cat) => cat.count > 0 && cat.slug !== 'uncategorized')
              .map((category) => (
                <span
                  key={category.id}
                  className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm cursor-pointer transition-colors"
                >
                  {category.name} ({category.count})
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const featuredImage = post._embedded?.['wp:featuredmedia']?.[0];
                const excerpt = stripHtml(post.excerpt.rendered).slice(0, 150);

                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border"
                  >
                    {/* Image */}
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="relative aspect-[16/10] bg-gray-100">
                        {featuredImage ? (
                          <Image
                            src={featuredImage.source_url}
                            alt={featuredImage.alt_text || decodeHtmlEntities(post.title.rendered)}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                            <span className="text-4xl">📝</span>
                          </div>
                        )}
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6">
                      <time className="text-sm text-gray-500">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                      <Link href={`/blog/${post.slug}`}>
                        <h2 className="text-xl font-semibold mt-2 mb-3 hover:text-blue-600 transition-colors">
                          {decodeHtmlEntities(post.title.rendered)}
                        </h2>
                      </Link>
                      <p className="text-gray-600 line-clamp-3">
                        {excerpt}...
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center mt-4 text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
