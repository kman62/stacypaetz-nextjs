import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';

const celebrityImages = [
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/LebronJames.jpg?fit=720%2C540&ssl=1', alt: 'With LeBron James' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Patrick-Ewing.jpg?fit=720%2C540&ssl=1', alt: 'With Patrick Ewing' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/WayneGretzky.jpg?fit=2592%2C1936&ssl=1', alt: 'With Wayne Gretzky' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Kareem.jpg?fit=720%2C540&ssl=1', alt: 'With Kareem Abdul-Jabbar' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Spyke-Lee1.jpg?fit=720%2C540&ssl=1', alt: 'With Spike Lee' },
  { src: 'https://i0.wp.com/stacypaetz.com/wp-content/uploads/2014/04/Grant-Hill.jpg?fit=720%2C540&ssl=1', alt: 'With Grant Hill' },
];

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Hero Carousel */}
      <section className="py-4">
        <HeroCarousel />
      </section>

      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-blue-50 opacity-50 rounded-3xl"></div>

          <div className="relative z-10 py-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#eb092b] to-[#ff4d6d] bg-clip-text text-transparent">Television Host.</span>{" "}
              <span className="text-gray-900">Reporter.</span>{" "}
              <span className="bg-gradient-to-r from-[#007cb5] to-[#00a3e0] bg-clip-text text-transparent">Content Creator.</span>{" "}
              <span className="text-gray-900">Executive Producer.</span>
            </h2>

            <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6">
              <p className="text-lg md:text-xl font-medium text-gray-700">
                A unique blend of Polynesian and Cherokee Indian descent, this award winning Television Host, Sideline Reporter
                and Executive Producer has proven credibility and trust throughout the sports and entertainment industries.
              </p>

              <p className="text-base md:text-lg">
                Stacy Paetz began her career making history. At only 19-years-old, she made her first on-air
                appearance on ESPN. She became the first female and youngest individual in the NBA to host every pre-game, halftime
                and post-game show, as well as report from the sidelines for the Indiana Pacers on FOX Sports Indiana. Stacy
                was the first female announcer in the 90-year history of the World Famous Harlem Globetrotters, announcing
                on both U.S. and international tours.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <a
                href="https://www.linkedin.com/in/stacypaetz/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#007cb5] hover:bg-[#006699] text-white font-medium rounded-full transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Resume / LinkedIn
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-[#eb092b] hover:bg-[#c9081f] text-white font-medium rounded-full transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Videos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          {/* Featured Video - Rudy Tomjanovich */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/UJykLKNohZw?start=16"
                title="Rudy Tomjanovich Interview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Stacy Paetz Reel */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="aspect-video">
              <video
                src="/videos/stacy-paetz-reel.mp4"
                title="Stacy Paetz Reel"
                controls
                className="w-full h-full rounded-lg shadow-lg"
                poster=""
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLd1gxAXJC-8m5s7rTg4L0K_3L9VE3Nkpo"
                title="Highlights"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow"
              />
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLd1gxAXJC-8nKB-u6pJxGSVEBN0FmZdnD"
                title="Interviews"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg shadow"
              />
            </div>
          </div>
          <div className="text-center mt-6">
            <a
              href="https://www.youtube.com/user/stacypaetz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007cb5] hover:text-[#005580] font-medium"
            >
              View All Videos on YouTube →
            </a>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Featured</h2>
          <div className="space-y-4">
            <a
              href="https://www.majorleague.rugby/news/mlr-makes-history-with-all-female-broadcast-crew/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 hover:text-[#eb092b]">
                MLR Makes History with All-Female Broadcast Crew
              </h3>
              <p className="text-gray-600 text-sm mt-1">Major League Rugby</p>
            </a>
            <a
              href="https://voyagela.com/interview/meet-stacy-paetz-of-culver-city/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 hover:text-[#eb092b]">
                Meet Stacy Paetz of Culver City
              </h3>
              <p className="text-gray-600 text-sm mt-1">VoyageLA</p>
            </a>
            <a
              href="https://shoutoutla.com/meet-stacy-paetz-television-host-reporter-and-executive-producer/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-gray-900 hover:text-[#eb092b]">
                Meet Stacy Paetz: Television Host, Reporter, and Executive Producer
              </h3>
              <p className="text-gray-600 text-sm mt-1">ShoutoutLA</p>
            </a>
          </div>
        </div>
      </section>

      {/* Thanks To */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Thanks To</h2>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <a
              href="https://www.majorleague.rugby/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logos/mlr-logo.png"
                alt="Major League Rugby"
                width={100}
                height={100}
                className="h-16 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.usa.rugby/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logos/usa-rugby-logo.png"
                alt="USA Rugby"
                width={120}
                height={80}
                className="h-16 w-auto object-contain"
              />
            </a>
            <a
              href="https://www.world.rugby/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/logos/world-rugby-logo.jpeg"
                alt="World Rugby"
                width={100}
                height={100}
                className="h-16 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
