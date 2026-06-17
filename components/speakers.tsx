"use client";
import { primaryFont, secondaryFont, tertiaryFont } from "@/fonts/fonts";
import { useState } from "react";

export default function Speakers() {
  const sessionSpeakers = [
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

  //   const [chosenSpeaker, setChosenSpeaker] = useState(sessionSpeakers[0]);
  const [chosenSpeaker, setChosenSpeaker] =
    useState<(typeof sessionSpeakers)[0]>();

  return (
    <>
      <div className="flex w-full max-w-full gap-4 overflow-x-auto">
        {chosenSpeaker ? (
          sessionSpeakers.map((speaker) => (
            <button
              key={speaker.name}
              className={`${primaryFont.className} uppercase max-w-1/4 text-black text-2xl rounded-xl px-4 py-8 bg-neutral-200 grow`}
            >
              {speaker.name}
            </button>
          ))
        ) : (
          <>
          <button
            className={`${primaryFont.className} disabled uppercase max-w-1/4 text-black text-2xl rounded-xl px-4 py-8 bg-neutral-200 grow`}
          >
            TBA
          </button>
            </>
        )}
      </div>
      <div className="w-full rounded-xl border border-gray-200 overflow-hidden flex flex-col lg:flex-row">
        <div className="grow bg-gray-200 p-4 flex justify-center items-center">
          <span
            className={`${secondaryFont.className} py-40 font-bold text-primary`}
          >
            COMING SOON
          </span>
        </div>
        <div
          className={`min-w-72 grow max-w-md bg-primary flex flex-col gap-4 items-center py-10 px-4 text-white ${secondaryFont.className} text-center text-xl`}
        >
          {chosenSpeaker ? (
            <>
              <span className={`${primaryFont.className} uppercase text-3xl`}>
                {chosenSpeaker.name}
              </span>
              <span className={`${tertiaryFont.className} text-xl`}>
                {chosenSpeaker.church}
              </span>
              <p className="mt-4">{chosenSpeaker.brief}</p>
              <div className="mt-4 w-full flex flex-col items-center gap-2">
                <div className="w-full grid grid-cols-2 gap-4 justify-items-center">
                  <span className="w-full text-right col-span-1">
                    favorite food
                  </span>
                  <span className="w-full text-left col-span-1 font-bold">
                    {chosenSpeaker.favoriteFood}
                  </span>
                </div>
                <div className="w-full grid grid-cols-2 gap-4 justify-items-center">
                  <span className="w-full text-right col-span-1">
                    bible verse
                  </span>
                  <span className="w-full text-left col-span-1 font-bold">
                    {chosenSpeaker.bibleVerse}
                  </span>
                </div>
                <div className="w-full grid grid-cols-2 gap-4 justify-items-center">
                  <span className="w-full text-right col-span-1">
                    nationality
                  </span>
                  <span className="w-full text-left col-span-1 font-bold">
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
