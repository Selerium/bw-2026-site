import Navbar from "@/components/navbar";
import { primaryFont, secondaryFont, tertiaryFont } from "@/fonts/fonts";
import Link from "next/link";
import Speakers from "@/components/speakers";
import EmblaCarousel from "@/components/carousel";
import {
  CalendarIcon,
  DollarSignIcon,
  ExternalLink,
  MapPinIcon,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center">
      <Navbar />
      <div className="flex flex-col justify-center items-center min-h-dvh w-full relative px-4 pt-28 pb-16 sm:px-8 sm:pt-32 md:pt-36 overflow-hidden">
        <Image
          src="/rooted-tree.png"
          alt="background"
          height={616}
          width={437}
          className="object-cover absolute -z-10 opacity-50 scale-110 sm:scale-125"
        />
        <h1
          className={`text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10rem] ${primaryFont.className} text-primary text-center leading-none`}
        >
          ROOTED
        </h1>
        <p
          className={`${secondaryFont.className} text-base sm:text-xl md:text-2xl text-center max-w-md sm:max-w-none mt-4 px-2`}
        >
          live your lives in Him, rooted and built up in Him
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-8 sm:mt-10 w-full max-w-xs sm:max-w-none sm:w-auto px-4 sm:px-0">
          <Link
            className={`${secondaryFont.className} w-full sm:w-50 font-black bg-primary hover:bg-white text-white hover:text-primary border-primary border hover:border-primary transition-all button `}
            href="#about"
          >
            LEARN MORE
          </Link>
          <Link
            className={`${secondaryFont.className} w-full sm:w-50 font-black bg-secondary hover:bg-white text-white hover:text-secondary border-secondary border hover:border-secondary transition-all button  relative`}
            href="https://crosscurrent.ae"
          >
            SIGN UP
          </Link>
        </div>
      </div>
      <div
        id="about"
        className="flex flex-col justify-center items-center gap-8 md:gap-12 min-h-dvh w-full px-4 py-16 sm:px-8 lg:px-20 scroll-mt-24"
      >
        <h2
          className={`${primaryFont.className} text-3xl sm:text-4xl md:text-5xl text-primary text-center`}
        >
          ABOUT BIG WEEKEND
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-8">
            <p
              className={`${secondaryFont.className} text-base sm:text-lg md:text-xl w-full text-justify`}
            >
              Big Weekend is an event for 12-18 year old students. It consists
              of 2 nights and three days of worship, fun & games, small group
              discussions, and multiple teaching sessions designed to support
              spiritual growth for teenagers in the Gulf region. It is an
              opportunity to meet other young people from our region and make
              new friends. Participants that attend come from a large variety of
              different cultural and church backgrounds, making it an amazing
              and beautiful experience for every exploring and discovering faith
              through fresh perspectives.
            </p>
            <p
              className={`${secondaryFont.className} text-base sm:text-lg md:text-xl w-full text-justify`}
            >
              Big Weekend is all about inspiring the youth to set their faith in
              Jesus while having exhilarating games, awesome activities,
              uplifting worship, and gospel inspired teachings, all wrapped up
              in their small groups. Get ready for a weekend of fun and faith!
            </p>
          </div>
          <EmblaCarousel />
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-6 text-secondary w-full sm:w-4/5">
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-6">
            <span className={`${primaryFont.className} text-4xl sm:text-5xl`}>
              350+
            </span>
            <span
              className={`${primaryFont.className} text-base sm:text-xl text-center`}
            >
              participants/volunteers
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-6">
            <span className={`${primaryFont.className} text-4xl sm:text-5xl`}>
              25+
            </span>
            <span
              className={`${primaryFont.className} text-base sm:text-xl text-center`}
            >
              churches across the Gulf
            </span>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 sm:gap-6">
            <span className={`${primaryFont.className} text-4xl sm:text-5xl`}>
              35+
            </span>
            <span
              className={`${primaryFont.className} text-base sm:text-xl text-center`}
            >
              nationalities represented
            </span>
          </div>
        </div>
      </div>
      <div
        id="theme"
        className="flex flex-col justify-center items-center gap-8 md:gap-12 min-h-dvh w-full px-4 py-16 sm:px-8 lg:px-20 scroll-mt-24"
      >
        <div className="flex flex-col items-center gap-4">
          <h2
            className={`${primaryFont.className} text-4xl sm:text-5xl md:text-6xl text-primary`}
          >
            ROOTED
          </h2>
          <div className="flex items-center gap-4">
            <div className="h-0.5 w-4 bg-secondary"></div>
            <span
              className={`${tertiaryFont.className} text-lg sm:text-2xl text-secondary`}
            >
              colossians 2:6-7
            </span>
            <div className="h-0.5 w-4 bg-secondary"></div>
          </div>
        </div>
        <p
          className={`${secondaryFont.className} w-full sm:w-4/5 text-center text-base sm:text-lg md:text-xl px-2`}
        >
          “<sup>6</sup> So then, just as you received Christ Jesus as Lord,
          continue to live your lives in him, <sup>7</sup>{" "}
          <span className="font-black">rooted</span> and built up in him,
          strengthened in the faith as you were taught, and overflowing with
          thankfulness.”
        </p>
        <div className="w-full overflow-hidden sm:w-4/5 md:w-3/5 aspect-video bg-neutral-200 rounded-lg flex justify-center items-center">
          <iframe
          className="w-full h-full"
            src="https://www.youtube.com/embed/g7bpvXJVWiQ?rel=0&showinfo=0&controls=0&autohide=1"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
      <div
        id="speakers"
        className="flex flex-col justify-center items-center gap-8 md:gap-12 min-h-dvh w-full px-4 py-16 sm:px-8 lg:px-20 scroll-mt-24"
      >
        <div className="flex gap-8 w-full">
          <h2
            className={`${primaryFont.className} text-3xl sm:text-4xl md:text-5xl text-primary`}
          >
            SPEAKERS
          </h2>
        </div>
        <Speakers />
      </div>
      <div
        id="details"
        className="flex flex-col justify-center items-center gap-8 md:gap-12 h-dvh min-h-fit w-full p-4 py-16 sm:px-8 lg:px-20"
      >
        <div className="w-full h-full grid md:grid-cols-3 gap-4 grid-cols-1">
          <div className="grow flex flex-col justify-center items-center gap-4 rounded-lg border border-gray-200 relative text-white p-6">
            <Image
              src="/location.png"
              alt="location"
              fill
              className="object-cover absolute -z-10 rounded-lg"
            />
            <div className="object-cover absolute -z-10 rounded-lg bg-black/75 w-full h-full" />
            <MapPinIcon className="w-6 h-6" />
            <span
              className={`${tertiaryFont.className} text-center text-xl sm:text-2xl`}
            >
              location
            </span>
            <span
              className={`${primaryFont.className} text-center text-2xl sm:text-3xl`}
            >
              hilton garden,
            </span>
            <span
              className={`${primaryFont.className} text-center text-2xl sm:text-3xl`}
            >
              ras al khaimah
            </span>
          </div>
          <div className="grow w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg border border-gray-200 relative text-white p-6">
            <Image
              src="/calendar.jpg"
              alt="calendar"
              fill
              className="object-cover absolute -z-10 rounded-lg"
            />
            <div className="object-cover absolute -z-10 rounded-lg bg-black/75 w-full h-full" />
            <CalendarIcon className="w-6 h-6" />
            <span
              className={`${tertiaryFont.className} text-center text-xl sm:text-2xl`}
            >
              dates
            </span>
            <span
              className={`${primaryFont.className} text-center text-2xl sm:text-3xl`}
            >
              nov 6-8
            </span>
            <span
              className={`${primaryFont.className} text-center text-2xl sm:text-3xl`}
            >
              2026
            </span>
          </div>
          <div className="grow w-full h-full flex flex-col justify-center items-center gap-4 rounded-lg border border-gray-200 text-white p-6 relative">
            <Image
              src="/price.jpg"
              alt="price"
              fill
              className="object-cover absolute -z-10 rounded-lg"
            />
            <div className="object-cover absolute -z-10 rounded-lg bg-black/75 w-full h-full" />
            <DollarSignIcon className="w-6 h-6" />
            <span
              className={`${tertiaryFont.className} text-center text-xl sm:text-2xl`}
            >
              price
            </span>
            <span
              className={`${primaryFont.className} text-center text-xl sm:text-2xl md:text-3xl`}
            >
              530 AED (by Sep 6)
            </span>
            <span
              className={`${primaryFont.className} text-center text-xl sm:text-2xl md:text-3xl`}
            >
              580 AED (after Sep 6)
            </span>
          </div>
        </div>
      </div>
      <div
        id="merch"
        className="flex flex-col justify-center items-center gap-8 md:gap-12 min-h-dvh w-full px-4 py-16 sm:px-8 lg:px-20 scroll-mt-24"
      >
        <h2
          className={`${primaryFont.className} text-3xl sm:text-4xl md:text-5xl text-primary`}
        >
          MERCH
        </h2>
        <p
          className={`${secondaryFont.className} text-base sm:text-lg md:text-xl`}
        >
          COMING SOON
        </p>
      </div>
      <footer
        id="footer"
        className={`flex text-white justify-between items-center w-full px-4 py-16 sm:px-8 lg:px-20 bg-primary ${secondaryFont.className}`}
      >
        <span className={`${primaryFont.className}`}>BW26</span>
        <Link
          className="hover:bg-gray-100/75 hover:text-black p-2 rounded-lg transition-all flex justify-center gap-1"
          href="/"
        >
          BW Portal
        </Link>
        <Link
          className="hover:bg-gray-100/75 hover:text-black p-2 rounded-lg transition-all flex justify-center gap-1"
          href="https://instagram.com/bigweekenduae"
        >
          <ExternalLink width={20} height={20} /> Big Weekend Instagram
        </Link>
        <Link
          className="hover:bg-gray-100/75 hover:text-black p-2 rounded-lg transition-all flex justify-center gap-1"
          href="https://instagram.com/eyunlimited"
        >
          <ExternalLink width={20} height={20} /> EYU Instagram
        </Link>
      </footer>
    </div>
  );
}
