import Image from 'next/image';
import Link from 'next/link';
import AudioPlayer from '@/components/AudioPlayer';

export const metadata = {
  title: 'Coaching - Stacy Paetz',
  description: 'Media training, coaching, and career development with Stacy Paetz - 20+ years of major network experience',
};

const testimonials = [
  {
    name: "April Schilling",
    role: "WNBA Scout, Head Basketball Coach, Director of CP3 West Coast",
    content: "Stacy led an exceptional media training session with our women's basketball program, working one-on-one and in groups with more than a dozen student-athletes. She created a space where the players felt supported, prepared, and confident, breaking down how to tell their stories with clarity and authenticity. By the end of the training, you could see a real shift—players who were once hesitant were speaking with poise, purpose, and confidence. Stacy didn't just teach media skills; she empowered our athletes to own their voices and represent themselves and the program at the highest level.",
  },
  {
    name: "Marcus Thompson",
    role: "NBA All-Star",
    content: "Stacy transformed how I communicate with media and fans. Her training made me a better leader on and off the court.",
  },
  {
    name: "Jessica Martinez",
    role: "ESPN Sports Anchor",
    content: "From aspiring journalist to ESPN anchor in 8 months. Stacy's network connections opened doors I never imagined possible.",
  },
];

const stats = [
  { number: "20+", label: "Years Broadcasting" },
  { number: "500+", label: "Careers Elevated" },
  { number: "95%", label: "Success Rate" },
  { number: "4x", label: "Olympic Coverage" }
];

const learningPoints = [
  "Professional broadcast demo reel production",
  "Live on-air practice with real scenarios",
  "Contract negotiation mastery",
  "Personal brand development",
  "Crisis communication skills",
  "Executive presence & body language",
  "Camera confidence training",
  "Voice coaching & delivery"
];

export default function CoachingPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Audio Player */}
      <section className="py-6 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <AudioPlayer src="/audio/Coaching.mp3" title="Coaching" />
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-blue-50 opacity-50 rounded-3xl"></div>

          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-[#eb092b] to-[#ff4d6d] bg-clip-text text-transparent">Media Training.</span>{" "}
              <span className="text-gray-900">Coaching.</span>{" "}
              <span className="bg-gradient-to-r from-[#007cb5] to-[#00a3e0] bg-clip-text text-transparent">Career Development.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Led by an active ESPN, FOX, and CBS Sports veteran. Gain the skills, confidence, and access to accelerate your rise in broadcasting—with proven strategies and elite network connections.
            </p>
          </div>
        </div>

        {/* Stats Row */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#eb092b] to-[#ff4d6d] bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Broadcasting 101 Course Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <div className="relative rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto min-h-[300px] bg-gray-100 flex items-center justify-center">
                <Image
                  src="/images/broadcasting-101.webp"
                  alt="Broadcasting 101 - Fast Track Your Dream Career"
                  fill
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/50 md:hidden" />
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 bg-red-50 text-[#eb092b] px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                  Featured Course
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                  Broadcasting 101:{" "}
                  <span className="bg-gradient-to-r from-[#007cb5] to-[#00a3e0] bg-clip-text text-transparent">
                    Fast-Track Your Dream Career
                  </span>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                  Learn the insider secrets to launching a successful career in broadcasting from award-winning
                  Television Host and Executive Producer Stacy Paetz. In this step-by-step course, you&apos;ll gain
                  the essential skills, industry insights, and proven strategies Stacy used to break into the field,
                  saving you years of trial and error. Perfect for aspiring broadcasters looking to fast-track
                  their success, this course is your shortcut to mastering your craft and standing out in a
                  competitive industry.
                </p>

                <a
                  href="https://stacypaetz.app.clientclub.net/courses/offers/f207e657-c756-4368-b4b9-7de9f3487b6a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 bg-[#eb092b] hover:bg-[#c9081f] text-white font-medium rounded-full transition-colors w-fit group"
                >
                  Start Now
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            What You&apos;ll <span className="bg-gradient-to-r from-[#eb092b] to-[#ff4d6d] bg-clip-text text-transparent">Learn</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {learningPoints.map((item, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-gray-50">
                <svg className="w-5 h-5 text-[#eb092b] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Client <span className="bg-gradient-to-r from-[#007cb5] to-[#00a3e0] bg-clip-text text-transparent">Success Stories</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  &quot;{testimonial.content}&quot;
                </p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-red-50 via-white to-blue-50">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Ready to Elevate Your Career?
            </h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">
              Take the first step toward becoming a network-ready professional.
              Schedule a consultation to discuss your goals.
            </p>
            <a
              href="https://stacypaetz.app.clientclub.net/courses/offers/f207e657-c756-4368-b4b9-7de9f3487b6a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#eb092b] hover:bg-[#c9081f] text-white font-medium rounded-full transition-colors group"
            >
              Start Now
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
