"use client";

import React, { useState } from "react";
import Image from "next/image";

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const teamMembers = [
    {
      name: "Troy Johnson",
      role: "Chief Executive Officer",
      image: "/team/troy.jpg", // Placeholder - replace with actual image
    },
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      image: "/team/sarah.jpg", // Placeholder
    },
    {
      name: "Michael Roberts",
      role: "Chief Financial Officer",
      image: "/team/michael.jpg", // Placeholder
    },
    {
      name: "Emily Davis",
      role: "Head of Operations",
      image: "/team/emily.jpg", // Placeholder
    },
    {
      name: "David Kim",
      role: "Head of Security",
      image: "/team/david.jpg", // Placeholder
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const currentMember = teamMembers[currentIndex];

  return (
    <section className="relative overflow-hidden bg-[#0a1628] py-16 dark:bg-[#0a1628] lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div>
            <h2 className="mb-6 text-4xl font-bold text-[var(--primary)] lg:text-5xl">
              Meet Our Team
            </h2>
            <p className="text-base leading-relaxed text-gray-300 lg:text-lg">
              Our team comprises industry veterans with extensive experience in
              fintech, stock trading, financial management, and cybersecurity.
              Together, we bring unparalleled expertise and a shared commitment
              to innovation and excellence.
            </p>
          </div>

          {/* Right - Carousel */}
          <div className="relative flex items-center justify-center">
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all hover:bg-white hover:text-black"
              aria-label="Previous team member"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Team Member Card */}
            <div className="flex flex-col items-center text-center">
              {/* Profile Image with Blue Border */}
              <div className="relative mb-6">
                <div className="h-64 w-64 overflow-hidden rounded-full border-4 border-[var(--primary)] bg-gray-200">
                  {/* Placeholder for image - replace with actual Image component when you have images */}
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gray-300 to-gray-400 text-6xl font-bold text-gray-600">
                    {currentMember.name.charAt(0)}
                  </div>
                  {/* Uncomment when you have actual images:
                  <Image
                    src={currentMember.image}
                    alt={currentMember.name}
                    width={256}
                    height={256}
                    className="h-full w-full object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Name and Role */}
              <h3 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                {currentMember.name}
              </h3>
              <p className="text-lg text-[var(--primary)]">
                {currentMember.role}
              </p>
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-white bg-transparent text-white transition-all hover:bg-white hover:text-black"
              aria-label="Next team member"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-8 flex justify-center gap-2 lg:mt-12">
          {teamMembers.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentIndex
                  ? "w-8 bg-[var(--primary)]"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to team member ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
