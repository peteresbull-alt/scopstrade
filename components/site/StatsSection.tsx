"use client";

import React from "react";

const StatsSection = () => {
  return (
    <section className="relative bg-white py-16 dark:bg-[var(--background)] lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Globally Regulated Badge */}
        <div className="mb-12 flex items-center justify-center gap-3 lg:mb-16 lg:gap-4">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#dbeafe] dark:bg-[#1e3a8a] lg:h-14 lg:w-14">
            <svg
              className="h-4 w-4 sm:h-6 sm:w-6 text-[#1e40af] dark:text-[#60a5fa] lg:h-7 lg:w-7"
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
          </div>
          <span className="text-xl lg:text-3xl font-bold tracking-tight  xl:text-4xl">
            Globally Regulated
          </span>
        </div>

        {/* Stats Grid with borders */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-3">
          <StatCard value="118+" label="Active Traders" position="first" />
          <StatCard value="10M+" label="Total Volume" position="middle" />
          <StatCard value="1M+" label="Users" position="last" />
        </div>
      </div>
    </section>
  );
};

// Stat Card Component
const StatCard = ({
  value,
  label,
  position,
}: {
  value: string;
  label: string;
  position: "first" | "middle" | "last";
}) => {
  const getBorderClasses = () => {
    if (position === "first") {
      return "";
    }
    if (position === "middle") {
      return "";
    }
    return "";
  };

  return (
    <div
      className={`flex flex-col items-center justify-center bg-white dark:bg-[var(--surface-elevated)] px-8 py-12 text-center lg:py-14 ${getBorderClasses()}`}
    >
      <div className="mb-3 text-5xl font-bold leading-none tracking-tight text-[#1e3a8a] dark:text-[#60a5fa] lg:text-6xl">
        {value}
      </div>
      <div className="text-base text-[#6b7280] dark:text-[var(--foreground-muted)] lg:text-lg">
        {label}
      </div>
    </div>
  );
};

export default StatsSection;
