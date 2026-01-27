"use client";

import React from "react";

const TradersSection = () => {
  const traders = [
    {
      name: "martine895",
      username: "martine895",
      role: "Expert",
      copiers: 2285,
      profit: "75.05%",
      profitPeriod: "1M",
      totalCopiers: 1071,
      riskLevel: "Balanced Risk",
    },
    {
      name: "ansel369",
      username: "ansel369",
      role: "Expert",
      copiers: 2903,
      profit: "70.72%",
      profitPeriod: "1M",
      totalCopiers: 2903,
      riskLevel: "Balanced Risk",
    },
    {
      name: "katrine7913",
      username: "katrine7913",
      role: "Expert",
      copiers: 1493,
      profit: "42.58%",
      profitPeriod: "1M",
      totalCopiers: 1493,
      riskLevel: "Balanced Risk",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Copy from the best traders
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[var(--foreground-muted)] lg:mt-6 lg:text-lg">
            Our top-performing traders have consistently delivered exceptional
            results. Choose from a diverse range of trading strategies and risk
            profiles.
          </p>
        </div>

        {/* Traders Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {traders.map((trader, index) => (
            <TraderCard key={index} {...trader} />
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center lg:mt-16">
          <button className="rounded-lg border-2 border-[var(--foreground)] bg-transparent px-8 py-3 text-base font-semibold transition-all hover:bg-[var(--foreground)] hover:text-[var(--background)]">
            View All Traders
          </button>
        </div>
      </div>
    </section>
  );
};

// Trader Card Component
interface TraderCardProps {
  name: string;
  username: string;
  role: string;
  copiers: number;
  profit: string;
  profitPeriod: string;
  totalCopiers: number;
  riskLevel: string;
}

const TraderCard = ({
  name,
  role,
  copiers,
  profit,
  profitPeriod,
  totalCopiers,
  riskLevel,
}: TraderCardProps) => (
  <div className="trader-card flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm">
    {/* Header with Avatar */}
    <div className="border-b border-[var(--border)] p-6">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary-hover)] text-lg font-bold text-white">
          {name.charAt(0).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="truncate text-base font-bold">{name}</div>
          <div className="truncate text-sm text-[var(--foreground-muted)]">
            {role}
          </div>
        </div>
      </div>
    </div>

    {/* Stats Grid */}
    <div className="p-6">
      <div className="mb-6 grid grid-cols-3 gap-4 text-center">
        {/* Copiers */}
        <div>
          <div className="mb-1 flex items-center justify-center gap-1">
            <span className="text-2xl font-bold">{copiers}</span>
            <svg
              className="h-4 w-4 text-[#10b981]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
          <div className="text-xs text-[var(--foreground-muted)]">Copiers</div>
        </div>

        {/* Profit */}
        <div>
          <div className="mb-1 flex items-center justify-center gap-1">
            <span className="text-2xl font-bold">{profit}</span>
            <svg
              className="h-4 w-4 text-[#10b981]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
          <div className="text-xs text-[var(--foreground-muted)]">
            Profit ({profitPeriod})
          </div>
        </div>

        {/* Total Copiers */}
        <div>
          <div className="mb-1 flex items-center justify-center gap-1">
            <span className="text-2xl font-bold">{totalCopiers}</span>
            <svg
              className="h-4 w-4 text-[#10b981]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </div>
          <div className="text-xs text-[var(--foreground-muted)]">Copiers</div>
        </div>
      </div>

      {/* Risk Level */}
      <div className="mb-4 flex items-center justify-between rounded-lg bg-[var(--background)] px-4 py-3">
        <span className="text-sm font-medium">Risk level:</span>
        <span className="rounded-full bg-[#dbeafe] px-3 py-1 text-sm font-medium text-[#1e40af] dark:bg-[#1e3a8a] dark:text-[#93c5fd]">
          {riskLevel}
        </span>
      </div>

      {/* Copy Button */}
      <button className="w-full rounded-lg border-2 border-[var(--border)] bg-transparent py-3 text-sm font-semibold transition-all hover:border-[var(--primary)] hover:bg-[var(--primary)] hover:text-white">
        Copy trader
      </button>
    </div>
  </div>
);

export default TradersSection;
