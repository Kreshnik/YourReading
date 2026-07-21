import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-radial from-violet-500/15 via-violet-500/5 to-transparent dark:from-violet-500/10 dark:via-violet-500/3"
        />
        <p className="font-display text-2xl text-violet-700 dark:text-violet-400">
          YourReading
        </p>
        <span className="mt-10 inline-flex rounded-full px-3 py-1 text-sm font-medium text-violet-700 ring-1 ring-violet-600/20 dark:text-violet-300 dark:ring-violet-400/30">
          Coming soon
        </span>
        <h1 className="mx-auto mt-6 max-w-[24ch] font-display text-5xl font-medium tracking-tight text-balance sm:text-6xl">
          Your next reading, one chat away.
        </h1>
        <p className="mx-auto mt-6 max-w-[48ch] text-lg text-pretty text-neutral-600 dark:text-neutral-400">
          YourReading connects you with experienced psychic readers for
          private, real-time chat readings.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/careers"
            className="rounded-full bg-violet-600 px-3.5 py-2.5 text-base font-semibold text-white hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-600 sm:py-2 sm:text-sm dark:bg-violet-500 dark:hover:bg-violet-400"
          >
            We&rsquo;re hiring
          </Link>
          <a
            href="mailto:hello@yourreading.com"
            className="text-base font-semibold hover:text-violet-700 sm:text-sm dark:hover:text-violet-400"
          >
            Get in touch <span aria-hidden="true">&rarr;</span>
          </a>
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
