'use client'

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const images = ["/bw-1.JPG", "/bw-2.JPG", "/bw-3.jpg", "/bw-4.JPG"];

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()

  return (
    <div className="embla w-full max-w-full relative rounded-lg flex justify-center items-center">
      <div className="embla__viewport w-full overflow-hidden rounded-lg aspect-video" ref={emblaRef}>
        <div className="embla__container flex h-full rounded-lg">
          {images.map((src) => (
            <div key={src} className="embla__slide relative h-full overflow-hidden rounded-lg">
              <Image
                alt="old big weekend pictures"
                src={src}
                fill
                sizes="100vw, 50vw"
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__prev absolute mx-2 left-0 rounded-lg p-2 bg-neutral-200/50 hover:bg-neutral-200/70" onClick={scrollPrev}>
      <ChevronLeftIcon className="w-6 h-6" />
      </button>
      <button className="embla__next absolute mx-2 right-0 rounded-lg p-2 bg-neutral-200/50 hover:bg-neutral-200/70" onClick={scrollNext}>
      <ChevronRightIcon className="w-6 h-6" />
      </button>
    </div>
  );
}
