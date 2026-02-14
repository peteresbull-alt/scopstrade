import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Link from "next/link";

export default function AutoGuard() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              AutoGuard&trade;
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Automated risk management technology that protects your copy trading portfolio
            </p>
          </div>
          <div className="space-y-12">
            {/* What is AutoGuard */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What is AutoGuard&trade;?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                AutoGuard&trade; is ScopsTrade&apos;s proprietary automated risk management system
                designed specifically for copy traders. It continuously monitors your portfolio,
                analyzes market conditions, and applies intelligent safeguards to protect your
                capital — all without requiring manual intervention.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether you&apos;re a beginner or an experienced trader, AutoGuard&trade; ensures
                that the traders you copy cannot expose your account to excessive risk. It acts
                as a smart safety net between the signal leader&apos;s trades and your portfolio.
              </p>
            </section>

            {/* How AutoGuard Works */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                How AutoGuard&trade; Works
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                AutoGuard&trade; operates in real time across three layers of protection:
              </p>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">1.</span>
                  <span><strong>Pre-Trade Analysis</strong> — Before any copied trade is executed on your account, AutoGuard&trade; evaluates the position size, risk-to-reward ratio, and current market volatility to determine if it falls within your risk parameters.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">2.</span>
                  <span><strong>Active Monitoring</strong> — While trades are open, AutoGuard&trade; continuously tracks drawdown levels, correlation exposure, and overall portfolio health to detect early warning signs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold mt-1">3.</span>
                  <span><strong>Automated Response</strong> — When predefined thresholds are breached, AutoGuard&trade; can automatically reduce position sizes, apply stop-losses, or pause copying entirely until conditions stabilize.</span>
                </li>
              </ul>
            </section>

            {/* Image placeholders after How it Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
            </div>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Key Features
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Stop-Loss Automation</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Automatically applies stop-loss orders to every copied trade, ensuring no single position can cause catastrophic damage to your portfolio.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Drawdown Protection</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Set maximum drawdown limits for your account. AutoGuard&trade; pauses copying when your equity drops below your comfort threshold.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Position Sizing</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Intelligently scales copied trade sizes relative to your account balance, so you never overexpose your capital regardless of the leader&apos;s position sizes.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Risk Scoring</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Every signal leader receives a dynamic risk score based on their trading behavior, helping you make informed decisions about who to copy.
                  </p>
                </div>
              </div>
            </section>

            {/* Benefits for Copy Traders */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits for Copy Traders
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Sleep peacefully knowing your portfolio is protected 24/7, even when markets are volatile</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>No need to constantly monitor trades — AutoGuard&trade; handles risk management for you</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Customize your risk tolerance and let the system enforce it automatically</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Preserve capital during unexpected market events or leader trading errors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Gain confidence to diversify across multiple leaders with controlled exposure</span>
                </li>
              </ul>
            </section>

            {/* Benefits for Leaders */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Benefits for Leaders
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Attract more followers by offering built-in risk protection through AutoGuard&trade;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Build trust with your audience — followers know their capital is safeguarded</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Reduce follower churn caused by unexpected drawdowns or losses</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Focus on your trading strategy while AutoGuard&trade; manages follower risk</span>
                </li>
              </ul>
            </section>

            {/* Image placeholders after Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
            </div>

            {/* Getting Started */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Getting Started
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                AutoGuard&trade; is enabled by default for all ScopsTrade copy trading accounts. Once
                you start copying a leader, you can customize your AutoGuard&trade; settings from your
                dashboard:
              </p>
              <ol className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">1.</span>
                  <span>Navigate to your <strong>Copy Trading Settings</strong> in the dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">2.</span>
                  <span>Select the leader whose risk parameters you want to adjust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">3.</span>
                  <span>Configure your <strong>maximum drawdown</strong>, <strong>stop-loss percentage</strong>, and <strong>position sizing</strong> preferences</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">4.</span>
                  <span>Save your settings — AutoGuard&trade; takes care of the rest</span>
                </li>
              </ol>
            </section>

            {/* CTA */}
            <section className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Trade Smarter with AutoGuard&trade;
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Join thousands of copy traders who trust AutoGuard&trade; to protect their portfolios.
                Create your ScopsTrade account today and experience automated risk management at its finest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/register" className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50">
                  Get Started
                </Link>
                <Link href="/" className="inline-block bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Go Back Home
                </Link>
              </div>
            </section>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
