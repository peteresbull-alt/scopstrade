"use client";

import React from "react";

const CTASection = () => {
  const steps = [
    {
      icon: <AccountIcon />,
      title: "Create Your Account.",
      description: "Join now to unlock options-focused copy trading.",
    },
    {
      icon: <SearchIcon />,
      title: "Find Your Match",
      description:
        "Explore leaders known for success in options—contracts, spreads, tickers—you name it.",
    },
    {
      icon: <CopyIcon />,
      title: "Copy and grow",
      description:
        "Replicate trades, refine strategies, and learn—all while staying in control.",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Ready to Invest Smarter?
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="rounded-lg bg-[var(--primary)] px-8 py-4 text-base font-semibold text-white transition-all hover:bg-[var(--primary-hover)] lg:px-10">
            Get started now →
          </button>
        </div>
      </div>
    </section>
  );
};

// Step Card Component
interface StepCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StepCard = ({ icon, title, description }: StepCardProps) => (
  <div className="flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg lg:p-10">
    {/* Icon with blue background */}
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[var(--primary)] dark:bg-blue-950/30">
      {icon}
    </div>

    {/* Title */}
    <h3 className="mb-4 text-xl font-bold lg:text-2xl">{title}</h3>

    {/* Description */}
    <p className="text-sm leading-relaxed text-[var(--foreground-muted)] lg:text-base">
      {description}
    </p>
  </div>
);

// Icon Components
const AccountIcon = () => (
  <svg
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
  </svg>
);

const SearchIcon = () => (
  <svg
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const CopyIcon = () => (
  <svg
    className="h-7 w-7"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
    />
  </svg>
);

export default CTASection;
