import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "../hero";

export const metadata: Metadata = {
  title: "Careers — YourReading",
  description:
    "We are hiring a Product Owner in Las Palmas de Gran Canaria to connect our commercial team, our development team in Kosovo, and the coaches at the heart of the platform.",
};

const sections = [
  {
    heading: "What you’ll do",
    items: [
      {
        label: "Turn empathy into backlog:",
        text: "spend real time with the psychic coach managers, understand the emotional texture of their work, and use imagination to design improvements that fit their needs before they’ve fully articulated them.",
      },
      {
        label: "Own one backlog, end to end:",
        text: "merge input from brand, marketing, data, conversion and coaching into one prioritised backlog; weigh impact against effort and defend every choice.",
      },
      {
        label: "Set the cadence:",
        text: "run refinements, sprint plannings, demos and retros between Gran Canaria and Kosovo with a predictability both teams can build their week on.",
      },
      {
        label: "Write specs that ship:",
        text: "user stories and acceptance criteria with zero room for interpretation; you test and accept every delivery yourself.",
      },
      {
        label: "Be the voice in both directions:",
        text: "technical reality southbound, commercial urgency eastbound; release notes and updates that people read — or hear about from you before they’ve opened them.",
      },
      {
        label: "Protect tomorrow’s speed:",
        text: "guard quality, technical debt and platform health with the Kosovo leads.",
      },
    ],
  },
  {
    heading: "What you bring",
    items: [
      {
        label: "5+ years of experience as a Product Owner",
        text: "(or comparable product role) in a software or platform environment, including 2+ years working with a remote or nearshore development team.",
      },
      {
        text: "A bachelor’s or master’s degree, or equivalent experience that proves the same level of thinking.",
      },
      {
        label: "Full professional proficiency in Spanish and English",
        text: "— Spanish is essential for our Las Palmas team; English is the working language with Kosovo.",
      },
      {
        text: "Agile fluency earned in practice: backlogs, sprints, story writing, acceptance — plus comfort with data tooling and dashboards; numbers first, priorities second.",
      },
      {
        label: "Advanced AI capability:",
        text: "daily, hands-on command of modern AI systems — from analysis and prototyping to workflow automation — and the judgement to know what AI should and shouldn’t touch in a deeply human product.",
      },
    ],
  },
  {
    heading: "Who you are",
    items: [
      {
        label: "Highly analytical.",
        text: "Velocity, conversion, funnel and onboarding metrics ground every coordination decision you make.",
      },
      {
        label: "Customer-obsessed.",
        text: "Process is never the point; the customer’s conversation is the point.",
      },
      {
        label: "Sensitive with imagination.",
        text: "You work gladly and well with sensitive people; you hear what intuitive professionals mean, not just what they say, and you imagine your way to solutions that suit them.",
      },
      {
        label: "Adaptable.",
        text: "Two offices, two cultures, three worlds, shifting priorities — you adjust the plan, never the goal.",
      },
      {
        label: "Intellectually confident.",
        text: "When the room disagrees, you bring evidence and keep your footing.",
      },
      {
        label: "A good storyteller.",
        text: "You make a roadmap feel like a journey both Las Palmas and Pristina want to join.",
      },
      {
        label: "Senior in practice.",
        text: "You’ve owned products long enough to carry natural authority with developers and stakeholders — and you still have the energy to build something new.",
      },
    ],
  },
  {
    heading: "What we offer",
    items: [
      {
        text: "A permanent, full-time contract with PC TECH MEDIA SL in Las Palmas de Gran Canaria.",
      },
      {
        text: "Competitive salary and benefits, in line with the seniority of the role.",
      },
      {
        text: "A central, visible role in a growing international platform group; occasional travel to Pristina.",
      },
    ],
  },
];

export default function CareersPage() {
  return (
    <>
      <header className="px-6 py-6">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/"
            className="font-display text-xl text-violet-700 dark:text-violet-400"
          >
            YourReading
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <Hero
          badge="We're hiring"
          title="Build the home of honest readings."
          description="A small team across Las Palmas and Pristina, building private, real-time chat readings. One role is open right now."
        />
        <div className="mx-auto max-w-3xl px-6 pt-12 pb-16 sm:pt-16 sm:pb-20">
          <article>
            <h2 className="font-display text-2xl font-medium tracking-tight text-balance sm:text-3xl">
              Product Owner
            </h2>
            <p className="mt-2 font-display text-lg text-neutral-600 italic dark:text-neutral-400">
              Where precision meets intuition.
            </p>
            <p className="mt-2 text-base text-neutral-600 sm:text-sm dark:text-neutral-400">
              Las Palmas de Gran Canaria · Permanent, full-time · Direct
              counterpart of our development team in Kosovo
            </p>
            <div className="mt-6 max-w-[56ch] space-y-4 text-base/7 text-pretty text-neutral-600 dark:text-neutral-400">
              <p>
                Most product owners connect a business team to a dev team. You
                will connect three worlds. In Las Palmas: a commercial team of
                brand managers, digital marketers, a data analyst and a
                conversion specialist, generating ideas faster than anyone can
                build them. In Kosovo: developers who want clarity, rhythm and
                a partner who speaks their language. And at the heart of the
                platform: psychic coaches and their coach managers —
                sensitive, intuitive people whose conversations with customers
                are the product.
              </p>
              <p>
                As Product Owner at PC TECH MEDIA SL, you are the conductor
                who makes these three worlds play as one: the single owner of
                the backlog, the direct contact for the Kosovar team, and the
                person the coach managers trust to turn what they feel into
                what we build.
              </p>
            </div>
            {sections.map((section) => (
              <div key={section.heading}>
                <h3 className="mt-8 text-base font-semibold">
                  {section.heading}
                </h3>
                <ul
                  role="list"
                  className="mt-3 max-w-[56ch] space-y-2 text-base/7 text-neutral-600 dark:text-neutral-400"
                >
                  {section.items.map((item) => (
                    <li key={item.text} className="flex gap-x-3">
                      <span
                        aria-hidden="true"
                        className="mt-3 size-1 shrink-0 rounded-full bg-violet-600 dark:bg-violet-400"
                      />
                      <span>
                        {item.label ? (
                          <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                            {item.label}
                          </strong>
                        ) : null}
                        {item.label ? " " : null}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="mt-16 text-center">
              <a
                href={`mailto:careers@yourreading.com?subject=${encodeURIComponent("Application — Product Owner")}`}
                className="inline-flex rounded-full bg-violet-600 px-5 py-3 text-base font-semibold text-white hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 dark:bg-violet-500 dark:hover:bg-violet-400"
              >
                Apply for this role
              </a>
              <p className="mx-auto mt-4 max-w-[48ch] text-base text-neutral-600 sm:text-sm dark:text-neutral-400">
                Send your CV and a short note to careers@yourreading.com. PC
                TECH MEDIA SL · Rafael Cabrera 1, Las Palmas de Gran Canaria.
              </p>
            </div>
            <div className="mt-16 border-t border-neutral-950/10 pt-8 dark:border-white/10">
              <p className="max-w-[64ch] text-sm text-pretty text-neutral-600 dark:text-neutral-400">
                PC TECH MEDIA SL is an equal-opportunity employer: we welcome
                applications from all qualified candidates regardless of age,
                gender, origin, belief, disability or orientation. Your CV and
                application data are processed confidentially, used solely for
                this recruitment process in accordance with the GDPR, and
                deleted after the process closes.
              </p>
            </div>
          </article>
        </div>
      </main>
      <footer className="px-6 py-8 text-center">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          &copy; {new Date().getFullYear()} YourReading. All rights reserved.
        </p>
      </footer>
    </>
  );
}
