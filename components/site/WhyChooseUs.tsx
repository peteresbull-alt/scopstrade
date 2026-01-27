"use client";

import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="relative py-16  lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-4xl font-bold tracking-tight  lg:text-5xl">
            You should know...
          </h2>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center rounded-2xl border border-[#e5e7eb] bg-white p-8 dark:border-[#1f3f5f] dark:bg-[var(--surface-elevated)] lg:p-12">
            <h3 className="text-2xl font-bold lg:text-3xl">
              Studying the market takes time
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#6b7280] dark:text-[var(--foreground-muted)] lg:mt-6 lg:text-lg">
              Building and maintaining a trading strategy is hard. Options
              require timing, strategy, and discipline. Only 11-26% of manual
              investors succeed on their own. With ScopsTrade, you can replicate
              successful trades from seasoned options traders to tilt the odds
              in your favor.
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col justify-center rounded-2xl border border-[#e5e7eb] bg-white p-8 dark:border-[#1f3f5f] dark:bg-[var(--surface-elevated)] lg:p-12">
            <h3 className="text-2xl font-bold lg:text-3xl">
              Beat the odds with Copy Trading
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[#6b7280] dark:text-[var(--foreground-muted)] lg:mt-6 lg:text-lg">
              Proven Success Rate. Over 73% of investors generate profits by
              copying top leaders—especially in dynamic options markets.
            </p>
            <div className="mt-6 lg:mt-8">
              <button className="rounded-lg bg-[var(--primary)] px-8 py-3 text-base font-semibold text-white transition-all hover:bg-[var(--primary-hover)] lg:px-10 lg:py-4">
                Start copy trading
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
