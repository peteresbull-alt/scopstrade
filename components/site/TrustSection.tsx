"use client";

import React from "react";

const TrustSection = () => {
  const trustBadges = [
    {
      icon: <SocialIcon />,
      title: "Social",
      description: "More than 35 million users globally",
    },
    {
      icon: <ReliableIcon />,
      title: "Reliable",
      description: "A leader in the fintech space since 2007",
    },
    {
      icon: <SecuredIcon />,
      title: "Secured",
      description:
        "Utilising best security practices for client money and assets safety",
    },
    {
      icon: <GlobalIcon />,
      title: "Global",
      description: "Providing services around the world",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Your funds are held in top-tier institutions
          </h2>
        </div>

        {/* Logos with subtle container */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm lg:mb-16 lg:p-12">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="transform text-2xl font-serif font-semibold transition-all hover:scale-105 lg:text-3xl">
              J.P.Morgan
            </div>
            <div className="flex h-12 w-12 transform items-center justify-center rounded-lg bg-[#1a6847] text-white shadow-sm transition-all hover:scale-105 hover:shadow-md lg:h-16 lg:w-16">
              <span className="text-xl font-bold lg:text-2xl">UBS</span>
            </div>
            <div className="transform text-2xl font-bold transition-all hover:scale-105 lg:text-3xl">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 border-4 border-[#0018a8] lg:h-12 lg:w-12" />
                <span className="text-[#0018a8] dark:text-blue-400">
                  Deutsche Bank
                </span>
              </div>
            </div>
            <div className="transform text-2xl font-serif italic transition-all hover:scale-105 lg:text-3xl">
              Coutts
            </div>
            <div className="transform text-xl font-semibold transition-all hover:scale-105 lg:text-2xl">
              J. SAFRA SARASIN
            </div>
          </div>
        </div>

        {/* Trust Badges Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustBadges.map((badge, index) => (
            <TrustBadge key={index} {...badge} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Trust Badge Component
interface TrustBadgeProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TrustBadge = ({ icon, title, description }: TrustBadgeProps) => (
  <div className="group flex flex-col items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/50 hover:shadow-lg lg:p-8">
    {/* Icon with subtle blue background */}
    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[var(--primary)] transition-all duration-300 group-hover:scale-110 dark:bg-blue-950/30">
      {icon}
    </div>

    {/* Title */}
    <h3 className="mb-2 text-lg font-bold lg:text-xl">{title}</h3>

    {/* Description */}
    <p className="text-sm leading-relaxed text-[var(--foreground-muted)]">
      {description}
    </p>
  </div>
);

// Icon Components
const SocialIcon = () => (
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
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const ReliableIcon = () => (
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
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const SecuredIcon = () => (
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
      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
    />
  </svg>
);

const GlobalIcon = () => (
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
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default TrustSection;
