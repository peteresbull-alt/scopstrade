"use client";

import React, { useState, useEffect } from "react";
import { Globe, Search, ChevronDown, ChevronUp, Users } from "lucide-react";
import Link from "next/link";
import { PulseLoader } from "react-spinners";
import Image from "next/image";
import { apiFetch } from "@/lib/api";

interface Trader {
  id: number;
  name: string;
  username: string;
  avatar_url: string | null;
  country_flag_url: string | null;
  badge: string;
  country: string;
  gain: string;
  risk: number;
  trades: number;
  capital: string;
  copiers: number;
  is_active: boolean;
}

const faqs = [
  {
    question: "What is Copy Trading?",
    answer:
      "Copy trading is an investment method that allows individuals to automatically copy the trades of professional or experienced traders. Instead of making trading decisions yourself, you select a trader to follow, and your account mirrors their positions in real time.",
  },
  {
    question: "How do I copy an Expert?",
    answer:
      "Simply browse through our top traders, review their performance metrics, and click the 'Copy' button on their profile. You can set your investment amount and risk parameters before starting to copy their trades.",
  },
  {
    question: "How can I stop copying an Expert?",
    answer:
      "You can stop copying an expert at any time by going to your active copies section and clicking 'Stop Copying'. Your current positions can be closed immediately or you can choose to keep them open.",
  },
  {
    question: "Why don't I receive any trades from copied experts?",
    answer:
      "This could be because the expert hasn't made any trades recently, your account balance is insufficient for the minimum trade size, or there may be trading restrictions on your account. Check your copy trading settings and account status.",
  },
];

const RiskBadge: React.FC<{ level: number }> = ({ level }) => {
  const getBgColor = () => {
    if (level <= 2) return "bg-emerald-500 dark:bg-emerald-600";
    if (level <= 4) return "bg-yellow-500 dark:bg-yellow-600";
    return "bg-red-500 dark:bg-red-600";
  };

  return (
    <div
      className={`${getBgColor()} text-white text-xs md:text-sm w-5 h-5 md:h-7 md:w-7 rounded-full flex items-center justify-center font-bold shadow-lg`}
    >
      {level}
    </div>
  );
};

const CountryFlag: React.FC<{ country: string }> = ({ country }) => {
  const flagColors: Record<string, string> = {
    US: "bg-gradient-to-b from-red-500 via-white to-blue-500",
    GB: "bg-gradient-to-r from-blue-600 via-white to-red-500",
    PL: "bg-gradient-to-b from-white to-red-500",
  };

  return (
    <div className="absolute bottom-0 right-0 w-6 h-4 rounded-sm overflow-hidden border border-slate-700/50 dark:border-slate-300/50">
      <div
        className={`w-full h-full ${flagColors[country] || "bg-slate-600"}`}
      />
    </div>
  );
};

export default function ExploreTraders() {
  const [activeTab, setActiveTab] = useState<"experts" | "howItWorks">(
    "experts"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [traders, setTraders] = useState<Trader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Debounce search input (wait 500ms after user stops typing)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch traders when debounced search changes
  useEffect(() => {
    fetchTraders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch]);

  const fetchTraders = async () => {
    try {
      setLoading(true);
      setError(null);

      // Build URL with search parameter
      let endpoint = "/traders/";

      if (debouncedSearch.trim()) {
        endpoint += `?search=${encodeURIComponent(debouncedSearch.trim())}`;
      }

      const response = await apiFetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setTraders(data);
    } catch (err) {
      setError("Failed to load traders. Please try again later.");
      console.error("Error fetching traders:", err);
    } finally {
      setLoading(false);
    }
  };

  const getAvatarUrl = (avatarUrl: string | null, name: string) => {
    return (
      avatarUrl ||
      `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
      )}&background=random&size=128`
    );
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section with Banner */}
      <div className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 via-transparent to-blue-900/20 pt-8">
        <Image
          src="/images/copytrading-banner.png"
          alt="copytrading-banner"
          width={588}
          height={463}
          className="mx-auto w-full md:w-100"
          priority
        />
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex justify-center gap-8 border-b border-gray-200 dark:border-white/10">
          <button
            onClick={() => setActiveTab("experts")}
            className={`pb-4 text-lg font-semibold transition-all relative ${
              activeTab === "experts"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            Top Experts
            {activeTab === "experts" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500" />
            )}
          </button>
          <button
            onClick={() => setActiveTab("howItWorks")}
            className={`pb-4 text-lg font-semibold transition-all relative ${
              activeTab === "howItWorks"
                ? "text-blue-600 dark:text-blue-500"
                : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
            }`}
          >
            How It Works
            {activeTab === "howItWorks" && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-500" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {activeTab === "experts" ? (
          <>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search traders by name or username..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white dark:bg-[#1a2744] border border-gray-200 dark:border-white/10 rounded-xl pl-12 pr-4 py-4 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-blue-500 dark:focus:border-blue-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Search Query Display */}
            {debouncedSearch && (
              <div className="max-w-2xl mx-auto mb-4 text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Searching for:{" "}
                  <span className="font-semibold text-blue-600 dark:text-blue-500">
                    &quot;{debouncedSearch}&quot;
                  </span>
                </p>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="flex justify-center items-center py-20">
                <PulseLoader color="#3b82f6" size={15} />
              </div>
            )}

            {/* Error State */}
            {error && !loading && (
              <div className="text-center py-12">
                <p className="text-red-500 text-lg">{error}</p>
                <button
                  onClick={fetchTraders}
                  className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            )}

            {/* No Results */}
            {!loading && !error && traders.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  {debouncedSearch
                    ? `No traders found matching "${debouncedSearch}"`
                    : "No traders found"}
                </p>
                {debouncedSearch && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
                  >
                    Clear Search
                  </button>
                )}
              </div>
            )}

            {/* Traders Grid */}
            {!loading && !error && traders.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {traders.map((trader) => (
                  <div
                    key={trader.id}
                    className="bg-white dark:bg-[#1a2744] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all hover:shadow-xl"
                  >
                    {/* Header with Avatar and Name */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center flex-wrap gap-3">
                        <div className="relative">
                          <div className="w-12 h-12 text-sm md:text-lg rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 font-semibold border-2 border-gray-300 dark:border-gray-600 overflow-hidden">
                            {trader.avatar_url ? (
                              <Image
                                src={getAvatarUrl(trader.avatar_url, trader.name)}
                                width={48}
                                height={48}
                                alt={trader.name}
                                className="w-full h-full object-cover"
                                unoptimized
                              />
                            ) : (
                              trader.name.charAt(0)
                            )}
                          </div>
                          {trader.badge === "gold" && (
                            <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 dark:bg-yellow-600 rounded-full flex items-center justify-center">
                              <span className="text-white text-xs md:text-sm">
                                🏆
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex flex-col">
                          <h3 className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white">
                            {trader.name}
                          </h3>
                          <p className="text-sm md:text-lg text-gray-500 dark:text-gray-400">
                            {trader.username}
                          </p>
                        </div>
                      </div>

                      {/* Country Badge */}
                      <div className="flex flex-col items-center justify-center">
                        <div className="relative w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-600">
                          {trader.country_flag_url ? (
                            <>
                              <Image
                                width={40}
                                height={40}
                                className="rounded-full w-full h-full object-cover"
                                src={trader.country_flag_url}
                                alt="country-flag"
                                unoptimized
                              />
                            </>
                          ) : (
                            <>
                              <Globe className="w-4 h-4 md:w-5 md:h-5 text-gray-500 dark:text-gray-400" />
                              <CountryFlag country={trader.country} />
                            </>
                          )}
                        </div>
                        <div className="text-xs font-bold text-gray-900 dark:text-white mt-1">
                          {trader.country}
                        </div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="flex flex-row flex-wrap gap-4 justify-between items-center mb-6">
                      {/* Gain */}
                      <div className="text-left">
                        <div
                          className={`text-xs sm:text-sm font-bold mb-1 ${
                            parseFloat(trader.gain) >= 0
                              ? "text-emerald-500 dark:text-emerald-400"
                              : "text-red-500 dark:text-red-400"
                          }`}
                        >
                          {parseFloat(trader.gain) >= 0 ? "+" : ""}
                          {trader.gain}%
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                          Gain
                        </div>
                      </div>

                      {/* Risk */}
                      <div className="flex flex-col items-center">
                        <RiskBadge level={trader.risk} />
                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
                          Risk
                        </div>
                      </div>

                      {/* Trades */}
                      <div className="text-center">
                        <div className="text-sm md:text-lg font-semibold text-gray-900 dark:text-white mb-1">
                          {trader.trades}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                          Trades
                        </div>
                      </div>
                    </div>

                    {/* Footer with Copiers and View Button */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-white/10">
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                        {trader.copiers} Copiers
                      </span>
                      <Link
                        href={`/explore-traders/${trader.id}`}
                        className="px-4 py-2 text-sm bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-sm hover:shadow-md transition-all"
                      >
                        View
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[#1a2744] border border-gray-200 dark:border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFaqIndex(openFaqIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-[#1e3a5f]/50 transition-all"
                >
                  <span className="text-sm font-semibold text-gray-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  {openFaqIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500 flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
