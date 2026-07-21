export function Hero({
  badge,
  title,
  description,
}: {
  badge?: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center sm:py-28">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-radial from-violet-500/15 via-violet-500/5 to-transparent dark:from-violet-500/10 dark:via-violet-500/3"
      />
      {badge ? (
        <span className="inline-flex rounded-full px-3 py-1 text-sm font-medium text-violet-700 ring-1 ring-violet-600/20 dark:text-violet-300 dark:ring-violet-400/30">
          {badge}
        </span>
      ) : null}
      <h1 className="mx-auto mt-6 max-w-[24ch] font-display text-5xl font-medium tracking-tight text-balance sm:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-[48ch] text-lg text-pretty text-neutral-600 dark:text-neutral-400">
        {description}
      </p>
    </section>
  );
}
