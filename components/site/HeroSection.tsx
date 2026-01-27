"use client";

import React from "react";
import Link from "next/link";

const HeroSection = () => {
  // Integration platforms - these rotate on mobile
  const integrations = {
    desktop: ["E-Trade", "WEBULL", "Think or Swim", "Schwab"],
    mobile: ["TradeStation", "Tastytrade", "Ally Invest"],
  };

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const currentIntegrations = isMobile
    ? integrations.mobile
    : integrations.desktop;

  return (
    <section className="dot-pattern relative min-h-[calc(100vh-80px)] overflow-hidden lg:min-h-[calc(100vh-96px)]">
      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-20 lg:pt-16">
        {/* Integration Badge */}
        {/* <div className="flex justify-center">
          <div className="integration-badge inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[var(--foreground)]">
            <span className="text-[var(--foreground-muted)]">
              Integrates with:
            </span>
            <span className="flex items-center gap-1.5">
              {currentIntegrations.map((platform, index) => (
                <React.Fragment key={platform}>
                  <span className="font-semibold">{platform}</span>
                  {index < currentIntegrations.length - 1 && (
                    <span className="text-[var(--foreground-muted)]">•</span>
                  )}
                </React.Fragment>
              ))}
            </span>
          </div>
        </div> */}

        {/* Main Headline */}
        <div className="mx-auto mt-8 max-w-4xl text-center lg:mt-12">
          <h1 className="text-[2.5rem] font-bold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl lg:text-[6rem] lg:leading-[1.05]">
            Copy Futures,
            <br />
            Options & Contracts
            <br />
            with Precision
          </h1>

          {/* Subheadline */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--foreground-muted)] sm:text-lg lg:mt-8 lg:text-[1.125rem]">
            We empower you to mirror real-time stock and options trades from
            top-performing traders. Whether you're following tickers, contracts,
            or strategic options moves, our platform brings precision,
            flexibility, and transparency—straight to your fingertips
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-10">
          <Link
            href="#"
            className="w-full rounded-lg bg-[var(--primary)] px-8 py-4 text-center text-base font-semibold text-white transition-all hover:bg-[var(--primary-hover)] sm:w-auto sm:rounded-full sm:py-3.5 lg:px-10 lg:text-[0.9375rem]"
          >
            Start Copying Now
          </Link>
          <Link
            href="#"
            className="w-full rounded-lg bg-[var(--primary)] px-8 py-4 text-center text-base font-semibold text-white transition-all hover:bg-[var(--primary-hover)] sm:w-auto sm:rounded-full sm:py-3.5 lg:px-10 lg:text-[0.9375rem]"
          >
            View expert traders
          </Link>
         
        </div>

        {/* Network Illustration */}
        <div className="relative mx-auto mt-12 h-[280px] w-full max-w-xl lg:mt-16 lg:h-[320px]">
          <NetworkIllustration />
        </div>

       
      </div>
    </section>
  );
};

// Stat Item Component
const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center">
    <div className="text-3xl font-bold text-[var(--foreground)] lg:text-4xl">
      {value}
    </div>
    <div className="mt-1 text-sm text-[var(--foreground-muted)] lg:text-base">
      {label}
    </div>
  </div>
);

// Network Illustration Component
const NetworkIllustration = () => {
  // Avatar positions for the network - arranged in a hexagonal/connected pattern
  const avatars = [
    { x: "50%", y: "50%", size: 64, primary: true }, // Center
    { x: "25%", y: "30%", size: 48, gender: "male", hasBeard: true },
    { x: "75%", y: "30%", size: 48, gender: "female", hairColor: "dark" },
    { x: "15%", y: "55%", size: 44, gender: "male", skinTone: "dark" },
    { x: "85%", y: "55%", size: 44, gender: "female", hairColor: "blonde" },
    { x: "30%", y: "75%", size: 48, gender: "male", hasGlasses: true },
    { x: "70%", y: "75%", size: 48, gender: "female", hairColor: "red" },
    { x: "50%", y: "15%", size: 44, gender: "male", bald: true },
    { x: "10%", y: "35%", size: 40, gender: "female" },
    { x: "90%", y: "35%", size: 40, gender: "male", hasBeard: true },
    { x: "20%", y: "85%", size: 36, gender: "female", skinTone: "dark" },
    { x: "80%", y: "85%", size: 36, gender: "male" },
    { x: "40%", y: "20%", size: 40, gender: "female", hasGlasses: true },
    { x: "60%", y: "20%", size: 40, gender: "male", hairColor: "gray" },
  ];

  // Connection lines between nodes
  const connections = [
    { from: 0, to: 1 },
    { from: 0, to: 2 },
    { from: 0, to: 3 },
    { from: 0, to: 4 },
    { from: 0, to: 5 },
    { from: 0, to: 6 },
    { from: 1, to: 7 },
    { from: 1, to: 8 },
    { from: 2, to: 7 },
    { from: 2, to: 9 },
    { from: 3, to: 8 },
    { from: 3, to: 10 },
    { from: 4, to: 9 },
    { from: 4, to: 11 },
    { from: 5, to: 10 },
    { from: 6, to: 11 },
    { from: 1, to: 12 },
    { from: 2, to: 13 },
  ];

  return (
    <div className="relative h-full w-full">
      {/* Connection Lines */}
      <svg className="absolute inset-0 h-full w-full" style={{ zIndex: 0 }}>
        {connections.map((conn, i) => (
          <line
            key={i}
            x1={avatars[conn.from].x}
            y1={avatars[conn.from].y}
            x2={avatars[conn.to].x}
            y2={avatars[conn.to].y}
            stroke="var(--border)"
            strokeWidth="1"
            className="dark:stroke-[rgba(96,165,250,0.2)]"
          />
        ))}
      </svg>

      {/* Avatar Nodes */}
      {avatars.map((avatar, i) => (
        <div
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            left: avatar.x,
            top: avatar.y,
            zIndex: avatar.primary ? 10 : 5,
          }}
        >
          <AvatarNode
            size={avatar.size}
            primary={avatar.primary}
            gender={avatar.gender}
            hasBeard={avatar.hasBeard}
            hasGlasses={avatar.hasGlasses}
            hairColor={avatar.hairColor}
            skinTone={avatar.skinTone}
            bald={avatar.bald}
          />
        </div>
      ))}
    </div>
  );
};

// Avatar Node Component
interface AvatarNodeProps {
  size: number;
  primary?: boolean;
  gender?: string;
  hasBeard?: boolean;
  hasGlasses?: boolean;
  hairColor?: string;
  skinTone?: string;
  bald?: boolean;
}

const AvatarNode = ({
  size,
  primary,
  gender = "male",
  hasBeard,
  hasGlasses,
  hairColor = "brown",
  skinTone = "light",
  bald,
}: AvatarNodeProps) => {
  // Skin colors
  const skinColors: Record<string, string> = {
    light: "#F5D0C5",
    medium: "#D4A574",
    dark: "#8B6914",
  };

  // Hair colors
  const hairColors: Record<string, string> = {
    brown: "#4A3728",
    dark: "#1a1a1a",
    blonde: "#C9A227",
    red: "#8B3A3A",
    gray: "#808080",
  };

  const skin = skinColors[skinTone] || skinColors.light;
  const hair = bald ? skin : hairColors[hairColor] || hairColors.brown;

  // Primary node (center) has glasses
  const showGlasses = primary || hasGlasses;

  return (
    <div
      className={`flex items-center justify-center rounded-full bg-[var(--surface)] shadow-sm ${
        primary
          ? "ring-4 ring-[var(--primary)] ring-offset-2 ring-offset-[var(--background)]"
          : "border-2 border-[var(--border)] dark:border-[rgba(96,165,250,0.3)]"
      }`}
      style={{ width: size, height: size }}
    >
      <svg
        width={size * 0.7}
        height={size * 0.7}
        viewBox="0 0 40 40"
        fill="none"
      >
        {/* Face */}
        <circle cx="20" cy="18" r="10" fill={skin} />

        {/* Hair */}
        {!bald && gender === "male" && (
          <path
            d="M10 14 Q10 8, 20 8 Q30 8, 30 14 Q30 10, 20 10 Q10 10, 10 14"
            fill={hair}
          />
        )}
        {!bald && gender === "female" && (
          <>
            <ellipse cx="20" cy="10" rx="10" ry="5" fill={hair} />
            <ellipse cx="12" cy="16" rx="3" ry="8" fill={hair} />
            <ellipse cx="28" cy="16" rx="3" ry="8" fill={hair} />
          </>
        )}

        {/* Eyes */}
        <circle cx="16" cy="17" r="1.5" fill="#1a1a1a" />
        <circle cx="24" cy="17" r="1.5" fill="#1a1a1a" />

        {/* Glasses */}
        {showGlasses && (
          <>
            <circle
              cx="16"
              cy="17"
              r="4"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1"
            />
            <circle
              cx="24"
              cy="17"
              r="4"
              fill="none"
              stroke="#1a1a1a"
              strokeWidth="1"
            />
            <line
              x1="20"
              y1="17"
              x2="20"
              y2="17"
              stroke="#1a1a1a"
              strokeWidth="1"
            />
          </>
        )}

        {/* Beard */}
        {hasBeard && gender === "male" && (
          <ellipse cx="20" cy="24" rx="6" ry="4" fill={hair} opacity="0.7" />
        )}

        {/* Body/Shirt - Using blue for primary, secondary blue for others */}
        <path
          d="M8 38 Q8 30, 20 28 Q32 30, 32 38"
          fill={primary ? "#3b82f6" : "#1e3a5f"}
        />
      </svg>
    </div>
  );
};

// Globe Icon Component
const GlobeIcon = ({ className }: { className?: string }) => (
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
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default HeroSection;
