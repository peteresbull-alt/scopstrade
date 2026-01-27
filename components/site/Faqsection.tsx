"use client";

import React, { useState } from "react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need trading experience?",
      answer:
        "No trading experience is required. Our platform is designed for both beginners and experienced traders. You can start copying expert traders immediately and learn as you go.",
    },
    {
      question: "Can I stop copying anytime?",
      answer:
        "Yes, you have complete control. You can start or stop copying any trader at any time with just one click. There are no lock-in periods or penalties for stopping.",
    },
    {
      question: "Is my money safe?",
      answer:
        "Your funds are held in top-tier institutions and are completely secure. We use bank-level encryption and security measures. Your money remains in your own brokerage account, and we never have direct access to your funds.",
    },
    {
      question: "What is the minimum investment?",
      answer:
        "The minimum investment varies depending on the trader you want to copy and your broker's requirements. Generally, you can start with as little as $500, but we recommend starting with at least $1,000 for better diversification.",
    },
  ];

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Your Questions, answered
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[var(--foreground-muted)] lg:text-lg">
            Got questions about how copy trading works? We've compiled answers
            to the most frequently asked questions.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Item Component
interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem = ({ question, answer }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-all duration-300 hover:border-[var(--primary)]/50 hover:shadow-lg">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left transition-all"
      >
        <span
          className={`pr-4 text-base font-semibold transition-colors lg:text-lg ${isOpen ? "text-[var(--primary)]" : ""}`}
        >
          {question}
        </span>
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen
              ? "bg-[var(--primary)] text-white rotate-45 scale-110"
              : "bg-[var(--background)] text-[var(--foreground)] group-hover:bg-[var(--primary)]/10"
          }`}
        >
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </span>
      </button>

      {/* Answer */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-[var(--border)] px-6 pb-6 pt-4">
          <p className="text-sm leading-relaxed text-[var(--foreground-muted)] lg:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
