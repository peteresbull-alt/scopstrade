"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-0">
            

            <Image
              src={"/logo_dark.png"}
              className="block dark:hidden w-50"
              alt=""
              width={1000}
              height={250}
            />
            <Image
              src={"/logo_light.png"}
              className="hidden dark:block w-50"
              alt=""
              width={1000}
              height={250}
            />
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            <Link
              href="#features"
              className="text-[0.9375rem] font-medium text-[var(--foreground)] transition-opacity hover:opacity-70"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-[0.9375rem] font-medium text-[var(--foreground)] transition-opacity hover:opacity-70"
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-[0.9375rem] font-medium text-[var(--foreground)] transition-opacity hover:opacity-70"
            >
              Pricing
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/login"
              className="navbar-btn rounded-full bg-[var(--primary)] px-6 py-3 text-[0.9375rem] font-semibold text-white transition-all hover:bg-[var(--primary-hover)]"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              className="navbar-btn rounded-full bg-[var(--primary)] px-6 py-3 text-[0.9375rem] font-semibold text-white transition-all hover:bg-[var(--primary-hover)]"
            >
              Get Started
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="theme-toggle ml-2"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href="/register"
              className="rounded-lg bg-[var(--primary)] hidden px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[var(--primary-hover)]"
            >
              Get Started
            </Link>

            {/* Theme Toggle Mobile */}
            <button
              onClick={toggleTheme}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)]"
              aria-label="Toggle theme"
            >
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <SunIcon className="h-5 w-5" />
                  ) : (
                    <MoonIcon className="h-5 w-5" />
                  )}
                </>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5"
              aria-label="Toggle menu"
            >
              <span
                className={`h-0.5 w-6 bg-[var(--foreground)] transition-all ${
                  mobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-[var(--foreground)] transition-all ${
                  mobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-6 bg-[var(--foreground)] transition-all ${
                  mobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full bg-[var(--background)] px-4 py-6 shadow-lg lg:hidden border-b border-[var(--border)]">
          <div className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-base font-medium text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-base font-medium text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="#pricing"
              className="text-base font-medium text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="mt-2 text-base font-medium text-[var(--foreground)]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Moon Icon Component
const MoonIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

// Sun Icon Component
const SunIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

export default Navbar;
