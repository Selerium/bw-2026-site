"use client";
import { primaryFont, secondaryFont, tertiaryFont } from "@/fonts/fonts";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Where can I find more information and updates?",
    answer: (
      <>
        This website,{" "}
        <a
          href="https://instagram.com/bigweekenduae"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://instagram.com/bigweekenduae
        </a>
        , or email us at{" "}
        <a href="mailto:hello@eyu.ae" className="underline font-bold">
          hello@eyu.ae
        </a>
        .
      </>
    ),
  },
  {
    question: "How do I access the registration portal?",
    answer: (
      <>
        Go to{" "}
        <a
          href="https://crosscurrent.ae"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://crosscurrent.ae
        </a>{" "}
        or click the BW PORTAL button on top of this site.
      </>
    ),
  },
  {
    question: "When is the registration deadline, and how much does it cost?",
    answer: (
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          <strong>Early Bird Rate:</strong> 530 AED (valid through September 6,
          2026)
        </li>
        <li>
          <strong>Standard Rate:</strong> 580 AED
        </li>
        <li>
          <strong>Final Registration Deadline:</strong> October 23, 2026
        </li>
      </ul>
    ),
  },
  {
    question: "What is the registration approval process, and when is my spot confirmed?",
    answer: (
      <>
        <p className="mb-2">
          Registration is managed via the <strong>Cross Current</strong> platform.
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            Create an account for your <strong>child</strong> (not the parent!)
          </li>
          <li>Sign in and choose your church</li>
          <li>Wait for church approval</li>
        </ul>
        <p className="mt-2">
          After being approved to your church, you can register for Big Weekend.
          <strong> Note:</strong> Registration is only complete after payment.
        </p>
      </>
    ),
  },
  {
    question: "What documents are required for registration and attendance?",
    answer: (
      <ul className="list-disc pl-5 mt-2 space-y-1">
        <li>
          <strong>Valid Emirates IDs/Original Passports are mandatory</strong> for
          all participants.
        </li>
        <li>
          A signed Parental Consent Form for students, and an updated Medical
          Release Form must be submitted prior to the deadline (can be uploaded on
          CrossCurrent).
        </li>
      </ul>
    ),
  },
  {
    question: "How do I apply for scholarships?",
    answer: (
      <p>
        To apply for a scholarship, students/leaders must first reach out to their
        respective church/youth leader, get an initial approval and then must
        register and choose the scholarship option on the BW portal for
        registration. We do not process scholarships ourselves - that option will
        be available to your church leader to pay for.
      </p>
    ),
  },
  {
    question: "Are participants staying overnight, and how are sleeping arrangements organized?",
    answer: (
      <p>
        Yes, this is an overnight residential weekend. Male and female participants
        stay in strictly separate room blocks/designated wings. The rooms feature 4
        students in one room with 2 queen beds. Youth will share beds with peers of
        the same gender and similar age group.
      </p>
    ),
  },
  {
    question: "Will there be female adult leaders to chaperone the girls?",
    answer: (
      <p>
        Yes, we enforce a strict policy of gender-matched supervision. Female adult
        leaders will be present in all female accommodation quarters and throughout
        every activity to mentor, guide, and care for the girls.
      </p>
    ),
  },
  {
    question: "What is Big Weekend's Safeguarding Policy?",
    answer: (
      <p>
        The safety, protection, and well-being of every young person is our highest
        priority. All leaders and volunteers are vetted and trained in strict
        safeguarding standards. You can read our complete Safeguarding Policy here:{" "}
        <a
          href="https://canva.link/big-weekend-2026-safeguarding-policy"
          className="underline font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://canva.link/big-weekend-2026-safeguarding-policy
        </a>
        .
      </p>
    ),
  },
  {
    question: "How are safety and adult supervision managed overall?",
    answer: (
      <p>
        Youth are accompanied and supervised by vetted leaders and ministry
        organizers at all times - during sessions, group activities, meal times, and
        in accommodation quarters. Medical and first-aid support will be available
        on-site 24/7.
      </p>
    ),
  },
  {
    question: "How will the participants get to and from the venue?",
    answer: (
      <p>
        Each participating youth group is responsible for transportation. If your
        church is not organizing transport or if you are attending individually, you
        can tag along with another participating church's transport. Please reach
        out to <strong>hello@eyu.ae</strong> to coordinate arrangements.
        Alternatively, parents will be responsible for transporting their child
        directly to and from the venue.
      </p>
    ),
  },
  {
    question: "What kinds of activities will the youth participate in?",
    answer: (
      <p>
        The daily schedule features worship, practical biblical teachings, small
        group discussion times, team-building competitions, organized recreation,
        and evening fellowship programs. The full schedule is available to
        registrants on CrossCurrent.
      </p>
    ),
  },
  {
    question: "What should participants bring?",
    answer: (
      <>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>Original Emirates ID/Passport</li>
          <li>Bible</li>
          <li>Notebook and pen</li>
          <li>Comfortable modest clothing</li>
          <li>Clothes to be active in</li>
          <li>Nightwear</li>
          <li>Personal toiletries</li>
          <li>Comfortable footwear</li>
          <li>
            Any required personal prescription medications (clearly labeled)
          </li>
        </ul>
        <p className="mt-2">
          We are not responsible for the safety of valuables or expensive items and
          recommend leaving them at home. Additionally, unauthorized or illegal
          substances will result in removal from the event.
        </p>
      </>
    ),
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <h2
        className={`${primaryFont.className} text-3xl sm:text-4xl md:text-5xl text-primary`}
      >
        FAQ
      </h2>
      <div className="w-full flex flex-col gap-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className={`rounded-xl border border-gray-200 overflow-hidden transition-colors ${
              openIndex === i ? "bg-primary/5" : "bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full flex justify-between items-center gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left cursor-pointer ${secondaryFont.className}`}
            >
              <span className="text-base sm:text-lg font-bold">
                {faq.question}
              </span>
              <ChevronDown
                className={`shrink-0 w-5 h-5 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                openIndex === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  className={`px-5 pb-4 sm:px-6 sm:pb-5 text-sm sm:text-base ${secondaryFont.className}`}
                >
                  {faq.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
