"use client";
import { primaryFont, secondaryFont, tertiaryFont } from "@/fonts/fonts";
import Image from "next/image";
import { useState } from "react";

export default function Speakers() {
  const sessionSpeakers = [
    {
      name: "Arno Alajoki",
      church: "YFC",
      brief:
        "Arno serves as the National Director for Youth for Christ in the UAE. He is originally from Finland and married to Laura. They have three daughters. Arno has been in cross cultural Christian ministry since 2003. He loves to help people being grounded in the scripture, finding their purpose and calling in God’s Kingdom as well as weather the storms of life through developing spiritual resilience.",
      favoriteFood: "steak",
      bibleVerse: "psalm 1:1-3",
      nationality: "finnish",
      image: "/speakers/arno.jpeg",
    },
    {
      name: "Xerxes Duane Magdaluyo",
      church: "Fellowship Dubai",
      brief:
      "Xerxes is a Filipino pastor in Dubai who spends his week building websites, apps, and AI tools, and his heart on one thing: helping people find Jesus in the place they actually look first, their phone. He and his wife Loraine pastor people the internet brought to their table. Warning: he will probably ask you for three names.",
      favoriteFood: "samgyeopsal",
      bibleVerse: "jeremiah 17:7-8",
      nationality: "filipino",
      image: "/speakers/xerxes.jpeg",
    },
    {
      name: "Frank Meyer",
      church: "Fellowship Dubai",
      brief:
      "Frank has spent 25 years in pastoral ministry, most of it devoted to helping young people build a faith that holds up under real life. His heart is for discipleship that shapes everything, not just a Sunday morning, and for raising up young leaders who carry that conviction into the world. For the past 15 years he has lived in the UAE, serving in  multicultural churches, developing a world missional perspective. Frank’s passion is to see teens become fully devoted followers of Jesus with all of their life for all of their life.",
      favoriteFood: "(unknown)",
      bibleVerse: "(unknown)",
      nationality: "american",
      image: "/speakers/frank.jpeg",
    },
  ];

  const breakoutSpeakers = [
    {
      name: "speaker name",
      church: "church name",
      brief:
        "this is a small brief about the person. give some cool details about them and their background. maybe even a funny joke or a fun fact.",
      favoriteFood: "answer",
      bibleVerse: "answer",
      nationality: "answer",
    },
    {
      name: "speaker name",
      church: "church name",
      brief:
        "this is a small brief about the person. give some cool details about them and their background. maybe even a funny joke or a fun fact.",
      favoriteFood: "answer",
      bibleVerse: "answer",
      nationality: "answer",
    },
    {
      name: "speaker name",
      church: "church name",
      brief:
        "this is a small brief about the person. give some cool details about them and their background. maybe even a funny joke or a fun fact.",
      favoriteFood: "answer",
      bibleVerse: "answer",
      nationality: "answer",
    },
    {
      name: "speaker name",
      church: "church name",
      brief:
        "this is a small brief about the person. give some cool details about them and their background. maybe even a funny joke or a fun fact.",
      favoriteFood: "answer",
      bibleVerse: "answer",
      nationality: "answer",
    },
  ];

  const [chosenSpeaker, setChosenSpeaker] = useState(sessionSpeakers[0]);

  return (
    <>
      <div className="flex w-full max-w-full gap-4 overflow-x-auto">
        {chosenSpeaker ? (
          sessionSpeakers.map((speaker) => (
            <button
              onClick={() => setChosenSpeaker(speaker)}
              key={speaker.name}
              className={`${primaryFont.className} uppercase min-w-54 max-w-1/4 ${chosenSpeaker.name === speaker.name ? 'text-primary' : 'text-black'} hover:text-white text-xl rounded-xl px-4 py-4 lg:py-8 bg-neutral-200 hover:bg-primary grow transition-all cursor-pointer`}
            >
              {speaker.name}
            </button>
          ))
        ) : (
          <>
          <button
            className={`${primaryFont.className} disabled uppercase max-w-1/4 text-black text-xl rounded-xl px-4 py-8 bg-neutral-200 grow`}
          >
            TBA
          </button>
            </>
        )}
      </div>
      <div className="w-full lg:h-148 rounded-xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
        <div className="grow bg-black flex justify-center items-center relative overflow-hidden">
          <Image src={chosenSpeaker.image} alt={`A blurred background.`} className="object-cover blur-md opacity-50" fill />
          <div className="aspect-video h-full w-full lg:h-11/12 lg:w-11/12 relative">
            <Image src={chosenSpeaker.image} alt={`A picture of ${chosenSpeaker.name}, a BW26 speaker.`} className="lg:rounded-xl object-cover" fill />
          </div>
        </div>
        <div
          className={`min-w-72 grow max-w-md bg-primary flex flex-col gap-4 justify-center items-center py-10 px-4 text-white ${secondaryFont.className} text-center text-xl`}
        >
          {chosenSpeaker ? (
            <>
              <span className={`${primaryFont.className} uppercase text-xl`}>
                {chosenSpeaker.name}
              </span>
              <span className={`${tertiaryFont.className} text-lg`}>
                {chosenSpeaker.church}
              </span>
              <p className="mt-4 overflow-y-scroll h-48 px-4 text-justify text-lg">{chosenSpeaker.brief}</p>
              <div className="mt-4 w-full flex flex-col items-center gap-2 text-lg px-4">
                <div className="w-full flex gap-2 justify-items-between">
                  <span className="w-fit min-w-32 text-left">
                    favorite food
                  </span>
                  <span className={`w-fit grow text-right font-bold`}>
                    {chosenSpeaker.favoriteFood}
                  </span>
                </div>
                <div className="w-full flex gap-2 justify-items-between">
                  <span className="w-fit min-w-32 text-left">
                    bible verse
                  </span>
                  <span className={`w-fit grow text-right font-bold`}>
                    {chosenSpeaker.bibleVerse}
                  </span>
                </div>
                <div className="w-full flex gap-2 justify-items-between">
                  <span className="w-fit min-w-32 text-left">
                    nationality
                  </span>
                  <span className={`w-fit grow text-right font-bold`}>
                    {chosenSpeaker.nationality}
                  </span>
                </div>
              </div>
            </>
          ) : (
            <span className={`${secondaryFont.className} py-40 font-bold`}>
              COMING SOON
            </span>
          )}
        </div>
      </div>
    </>
  );
}
