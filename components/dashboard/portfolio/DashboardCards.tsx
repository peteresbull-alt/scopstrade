"use client";

import { motion } from "framer-motion";
import { Radio, TrendingUp } from "lucide-react";

export function LiveTradingCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="rounded-2xl bg-white/80 dark:bg-[#1e3a5f]/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-sm p-4"
    >
      <motion.a
      href="/live-trading"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        className="w-full flex items-center justify-center space-x-2.5 py-2.5 px-4 bg-red-50 dark:bg-red-500/10 hover:bg-red-100 dark:hover:bg-red-500/20 border border-red-200/50 dark:border-red-500/30 rounded-xl transition-all"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
        </span>
        <span className="text-xs font-semibold text-gray-800 dark:text-white">
          Go to Live trading
        </span>
      </motion.a>
    </motion.div>
  );
}

export function AssetAllocationCard() {
  const assets = [
    { name: "ETF", value: 40, color: "bg-blue-400" },
    { name: "Options", value: 35, color: "bg-blue-500" },
    { name: "Futures", value: 25, color: "bg-blue-600" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="rounded-2xl bg-white/80 dark:bg-[#1e3a5f]/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-sm p-5"
    >
      {/* Header */}
      <div className="flex items-center space-x-2.5 mb-4">
        <div className="w-7 h-7 rounded-full bg-blue-100 dark:bg-blue-500/20 flex items-center justify-center">
          <TrendingUp className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-xs font-semibold text-gray-900 dark:text-white">
          Asset allocation
        </h3>
      </div>

      {/* Growth Stat */}
      <div className="mb-4">
        <div className="flex items-baseline space-x-1.5">
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
            +0.00%
          </span>
          <TrendingUp className="w-3 h-3 text-blue-600 dark:text-blue-400" />
        </div>
        <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">
          asset growth increased from last month
        </p>
      </div>

      {/* Legend + Chart Row */}
      <div className="flex items-end justify-between">
        {/* Legend */}
        <div className="space-y-1.5">
          {assets.map((asset) => (
            <div key={asset.name} className="flex items-center space-x-2">
              <div className={`w-2.5 h-2.5 rounded-sm ${asset.color}`} />
              <span className="text-[10px] font-medium text-gray-500 dark:text-gray-400">
                {asset.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bar Chart */}
        <div className="flex h-28 items-end space-x-2">
          {assets.map((asset, index) => (
            <motion.div
              key={asset.name}
              initial={{ height: 0 }}
              animate={{ height: `${asset.value * 2.5}%` }}
              transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
              className={`${asset.color} w-10 min-h-2`}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
