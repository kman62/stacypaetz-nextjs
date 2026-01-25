import Image from 'next/image';

export const metadata = {
  title: 'Created - Stacy Paetz',
  description: 'Products and creations by Stacy Paetz - P8Z Clothing Co, Book "Blocked", Mobile App, and YouTube Channel',
};

export default function CreatedPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="py-8 border-b">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">Created</h1>
        </div>
      </section>

      {/* YouTube */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4">YouTube Channel</h2>
            <p className="text-gray-700 mb-6">
              Subscribe for exclusive content, behind-the-scenes footage, interviews, and highlights.
            </p>
          </div>
          <div className="aspect-video max-w-2xl mx-auto mb-6">
            <iframe
              src="https://www.youtube.com/embed/videoseries?list=PLd1gxAXJC-8m5s7rTg4L0K_3L9VE3Nkpo"
              title="Stacy Paetz YouTube Channel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <a
              href="https://www.youtube.com/user/stacypaetz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* Book */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <Image
                src="/images/created/blocked-cover.png"
                alt="Blocked by Stacy Paetz"
                width={200}
                height={320}
                className="mx-auto shadow-lg"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-bold mb-4">Blocked</h2>
              <p className="text-gray-700 mb-6">
                A book by Stacy Paetz. Available now on Amazon.
              </p>
              <a
                href="https://www.amazon.com/dp/1541036158?ref_=pe_3052080_397514860"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#FF9900] hover:bg-[#e68a00] text-white font-medium rounded transition-colors"
              >
                Buy on Amazon
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* P8Z Clothing */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <Image
              src="/images/created/p8z-clothing.png"
              alt="P8Z Clothing Co"
              width={600}
              height={240}
              className="mx-auto"
            />
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              poster="/images/created/p8z-clothing.png"
            >
              <source src="https://stacypaetz.com/wp-content/uploads/2021/09/p8z-Week-17.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="text-center">
            <a
              href="https://shopmlr.com/?s=P8Z&post_type=product"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-[#eb092b] hover:bg-[#c9081f] text-white font-medium rounded transition-colors"
            >
              Shop P8Z Clothing
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* App */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3 order-1 md:order-2">
              <Image
                src="/images/created/app-pic.jpg"
                alt="Stacy Paetz App"
                width={250}
                height={480}
                className="mx-auto rounded-xl shadow-lg"
              />
            </div>
            <div className="md:w-2/3 text-center md:text-left order-2 md:order-1">
              <h2 className="text-2xl font-bold mb-4">Stacy Paetz App</h2>
              <p className="text-gray-700 mb-6">
                The official Stacy Paetz mobile application. Get exclusive content, updates, and more.
              </p>
              <a
                href="https://apps.apple.com/us/app/stacy-paetz/id6468610501"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-black hover:bg-gray-800 text-white font-medium rounded transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
