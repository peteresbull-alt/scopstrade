"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Plus,
  Minus,
  Users,
  Clock,
  CreditCard,
  Diamond,
  ArrowUpFromLine,
} from "lucide-react";

interface BalanceCardProps {
  balance: number;
  availableBalance: number;
  totalDeposits: number;
  totalWithdrawals: number;
  totalProfits: number;
  isVerified: boolean;
  onDeposit: () => void;
  onWithdraw: () => void;
  onHistory: () => void;
}

export default function BalanceCard({
  balance,
  availableBalance,
  totalDeposits,
  totalWithdrawals,
  totalProfits,
  isVerified,
  onDeposit,
  onWithdraw,
  onHistory,
}: BalanceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      {/* Balance Overview Card */}
      <div className="rounded-2xl bg-white/90 dark:bg-[#1a2744]/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-lg p-5">
        <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
          Balance Overview
        </h3>

        {/* Blue Gradient Balance Card */}
        <div className="relative rounded-xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-5 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-3 left-4">
            <div className="w-10 h-8 rounded-md bg-yellow-400/90 grid grid-cols-2 grid-rows-2 gap-0.5 p-1.5">
              <div className="bg-yellow-500/60 rounded-[1px]" />
              <div className="bg-yellow-500/60 rounded-[1px]" />
              <div className="bg-yellow-500/60 rounded-[1px]" />
              <div className="bg-yellow-500/60 rounded-[1px]" />
            </div>
          </div>

          {/* Diamond icon on the right */}
          <div className="absolute bottom-4 right-4">
            <Diamond className="w-10 h-10 text-blue-300/40" strokeWidth={1.5} />
          </div>

          {/* Balance amount */}
          <div className="mt-12 mb-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-wide font-mono">
              $
              {balance.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          <p className="text-[10px] font-semibold text-blue-200 uppercase tracking-widest mb-0.5">
            Capital
          </p>
          <p className="text-sm text-white/90 font-medium">Available Balance</p>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="grid grid-cols-4 gap-2 sm:gap-3">
        {[
          { label: "Deposit", icon: Plus, onClick: onDeposit, href: null },
          { label: "Withdraw", icon: Minus, onClick: onWithdraw, href: null },
          {
            label: "Transfer",
            icon: ArrowUpFromLine,
            onClick: null,
            href: "/transfer",
          },
          { label: "History", icon: Clock, onClick: onHistory, href: null },
        ].map((action) => {
          const content = (
            <>
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-blue-100/80 dark:bg-blue-400/10 flex items-center justify-center transition-colors group-hover:bg-blue-200/80 dark:group-hover:bg-blue-400/20">
                <action.icon className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium text-gray-600 dark:text-gray-300">
                {action.label}
              </span>
            </>
          );

          const className =
            "group bg-white/70 dark:bg-white/[0.04] backdrop-blur-xl border border-gray-200/50 dark:border-white/[0.08] rounded-xl py-3 sm:py-4 px-1.5 sm:px-2 flex flex-col items-center gap-1.5 sm:gap-2 transition-all duration-300 shadow-sm hover:shadow-md hover:shadow-blue-500/5 dark:hover:shadow-blue-500/10 hover:border-blue-300/50 dark:hover:border-blue-500/20 hover:bg-white/90 dark:hover:bg-white/[0.08]";

          if (action.href) {
            return (
              <Link key={action.label} href={action.href}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className={className}
                >
                  {content}
                </motion.div>
              </Link>
            );
          }

          return (
            <motion.button
              key={action.label}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={action.onClick || undefined}
              className={className}
            >
              {content}
            </motion.button>
          );
        })}
      </div>

      {/* Account Summary */}
      <div className="space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200">
          Account summary
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {/* Total Deposits */}
          <div className="rounded-xl bg-white/90 dark:bg-[#1a2744]/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Total Deposits
              </span>
            </div>
            <p className="text-[13px] sm:text-sm md:text-lg font-bold text-gray-900 dark:text-white">
              $
              {totalDeposits.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Total Withdrawals */}
          <div className="rounded-xl bg-white/90 dark:bg-[#1a2744]/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Minus className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Total Withdrawals
              </span>
            </div>
            <p className="text-[13px] sm:text-sm md:text-lg font-bold text-gray-900 dark:text-white">
              $
              {totalWithdrawals.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Total Profits */}
          <div className="rounded-xl bg-white/90 dark:bg-[#1a2744]/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Total Profits
              </span>
            </div>
            <p className="text-[13px] sm:text-sm md:text-lg font-bold text-gray-900 dark:text-white">
              $
              {totalProfits.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Verification Status */}
          <div className="rounded-xl bg-white/90 dark:bg-[#1a2744]/80 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 p-4 shadow-sm">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-blue-500 dark:text-blue-400" />
              <span className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Verification
              </span>
            </div>
            <p
              className={`text-sm  font-bold ${isVerified ? "text-green-600 dark:text-green-400" : "text-yellow-600 dark:text-yellow-400"}`}
            >
              {isVerified ? "Your account is verified" : "Pending verification"}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
