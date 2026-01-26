'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const bannerImages = [
  {
    src: "/images/stacy-on-stage.jpeg",
    alt: "Stacy Paetz On Stage"
  },
  {
    src: "https://stacypaetz.com/wp-content/uploads/2014/04/Screenshot-2025-02-13-at-1.25.27-PM.png",
    alt: "Stacy Paetz Professional Portrait"
  },
  {
    src: "https://stacypaetz.com/wp-content/uploads/2014/04/Screenshot-2025-02-13-at-1.25.46-PM.png",
    alt: "Stacy Paetz Broadcasting"
  },
  {
    src: "https://stacypaetz.com/wp-content/uploads/2014/04/Screenshot-2025-02-13-at-1.27.02-PM.png",
    alt: "Stacy Paetz On Air"
  },
  {
    src: "https://stacypaetz.com/wp-content/uploads/2023/11/Screenshot-2023-07-24-at-6.40.47-PM.png",
    alt: "Stacy Paetz Sports Coverage"
  },
  {
    src: "https://stacypaetz.com/wp-content/uploads/2023/11/Screenshot-2023-07-24-at-6.33.49-PM.png",
    alt: "Stacy Paetz Interview"
  },
  {
    src: "https://stacypaetz.com/wp-content/uploads/2018/08/IMG_1085.jpg",
    alt: "Stacy Paetz Event Coverage"
  },
  {
    src: "https://stacypaetz.com/wp-content/uploads/2018/08/IMG_1083.jpg",
    alt: "Stacy Paetz Reporter"
  },
  {
    src: "/images/carousel/carousel-1.jpg",
    alt: "Stacy Paetz"
  },
  {
    src: "/images/carousel/carousel-2.png",
    alt: "Stacy Paetz Broadcasting"
  },
  {
    src: "/images/carousel/carousel-3.png",
    alt: "Stacy Paetz On Set"
  },
  {
    src: "/images/carousel/carousel-4.png",
    alt: "Stacy Paetz Coverage"
  },
  {
    src: "/images/carousel/carousel-5.png",
    alt: "Stacy Paetz Live"
  },
  {
    src: "/images/carousel/carousel-6.png",
    alt: "Stacy Paetz Broadcasting"
  },
];

export default function HeroCarousel() {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);

  const autoplayPlugin = useMemo(
    () =>
      Autoplay({
        delay: 3000,
        stopOnInteraction: false,
      }),
    []
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
    },
    [autoplayPlugin]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    emblaApi.on('select', onSelect);
    onSelect();

    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  // Render a placeholder during SSR to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="w-full">
        <div className="relative overflow-hidden bg-gray-50">
          <div className="flex justify-center items-center h-[500px] px-4">
            <div className="relative h-[480px] w-auto">
              <Image
                src={bannerImages[0].src}
                alt={bannerImages[0].alt}
                width={800}
                height={480}
                className="h-[480px] w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-2 py-4">
          {bannerImages.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full ${
                index === 0 ? "bg-[#eb092b] w-6" : "bg-gray-300 w-2"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Carousel */}
      <div className="relative overflow-hidden bg-gray-50" ref={emblaRef}>
        <div className="flex">
          {bannerImages.map((image, index) => (
            <div
              key={index}
              className="min-w-0 flex-[0_0_100%] flex justify-center items-center h-[500px] px-4"
            >
              <div className="relative h-[480px] w-auto">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={480}
                  className="h-[480px] w-auto object-contain"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-gray-200 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white border border-gray-200 flex items-center justify-center transition-colors shadow-sm"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dot indicators */}
      <div className="flex justify-center gap-2 py-4">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-[#eb092b] w-6"
                : "bg-gray-300 hover:bg-gray-400 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
