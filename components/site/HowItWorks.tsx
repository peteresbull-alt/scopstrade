"use client";

import React from "react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Sign up in minutes and verify your identity to get started with our secure platform.",
    },
    {
      number: "02",
      title: "Set Your Investment Amount",
      description:
        "Choose how much you want to invest and set your risk management preferences.",
    },
    {
      number: "03",
      title: "Choose Strategy",
      description:
        "Browse through successful traders and select strategies that match your goals.",
    },
    {
      number: "04",
      title: "Track & Grow Your Profits",
      description:
        "Monitor your investments in real-time and watch your portfolio grow automatically.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--background)] py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-[var(--foreground)] lg:text-5xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[var(--foreground-muted)] lg:mt-6 lg:text-lg">
            Getting started with copy trading is simple. Follow these four easy
            steps to begin your investment journey today.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-12 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Step Card Component
interface StepCardProps {
  number: string;
  title: string;
  description: string;
}

const StepCard = ({ number, title, description }: StepCardProps) => (
  <div className="step-card group rounded-2xl p-6 lg:p-8">
    <div className="mb-4 text-5xl font-bold text-[var(--primary)] opacity-40 transition-opacity group-hover:opacity-100 lg:text-6xl">
      {number}
    </div>
    <h3 className="text-xl font-bold text-[var(--foreground)] lg:text-2xl">
      {title}
    </h3>
    <p className="mt-3 text-sm leading-relaxed text-[var(--foreground-muted)] lg:text-base">
      {description}
    </p>
  </div>
);

// Trader Card Component
interface TraderCardProps {
  name: string;
  role: string;
  avatar: string;
  status: string;
}

const TraderCard = ({ name, role, avatar, status }: TraderCardProps) => (
  <div className="relative flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--background)] p-4 transition-all hover:border-[var(--primary)] dark:border-[rgba(96,165,250,0.2)]">
    {/* Avatar */}
    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-sm font-bold text-white">
      {avatar}
    </div>

    {/* Info */}
    <div className="flex-1 min-w-0">
      <div className="text-sm font-semibold text-[var(--foreground)] truncate">
        {name}
      </div>
      <div className="text-xs text-[var(--foreground-muted)] truncate">
        {role}
      </div>
    </div>

    {/* Status Indicator */}
    {status === "online" && (
      <div className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--background)]">
        <div className="h-3 w-3 rounded-full bg-[var(--primary)]">
          <div className="h-full w-full animate-ping rounded-full bg-[var(--primary)] opacity-75"></div>
        </div>
      </div>
    )}
  </div>
);

export default HowItWorks;
