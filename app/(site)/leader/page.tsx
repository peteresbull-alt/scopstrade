import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Link from "next/link";

export default function BecomeALeader() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Become a Leader
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Share your trading expertise and earn from your skills on ScopsTrade
            </p>
          </div>
          <div className="space-y-12">
            {/* Lead the Way */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Lead the Way
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Are you an experienced trader with a proven track record? ScopsTrade gives you the
                platform to monetize your trading skills by becoming a signal leader. When traders
                copy your positions, you earn commissions — and the better you perform, the more
                followers you attract.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Join a growing community of leaders who are turning their trading expertise into a
                sustainable income stream. ScopsTrade handles the technology, compliance, and
                infrastructure so you can focus on what you do best — trading.
              </p>
            </section>

            {/* Why Become a Leader */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Become a Leader?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Earn Commissions</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Generate additional income through performance fees and volume-based commissions
                    from your followers&apos; trading activity.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Build Your Reputation</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Establish yourself as a trusted trading expert with a publicly verified
                    performance track record on ScopsTrade.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Grow Your Following</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Access a global community of traders actively looking for skilled leaders
                    to follow. ScopsTrade helps you grow your audience.
                  </p>
                </div>
              </div>
            </section>

            {/* Image placeholders after Why Become a Leader */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
            </div>

            {/* What Leaders Get */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                What Leaders Get
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>A dedicated public profile page showcasing your performance, strategy, and track record</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Real-time performance analytics and follower insights dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Commission earnings from followers&apos; trading activity with transparent payout structure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Featured placement on the ScopsTrade leaderboard based on performance</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>AutoGuard&trade; integration to protect your followers and build trust</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Priority support and access to exclusive leader resources</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Marketing tools and shareable links to promote your profile externally</span>
                </li>
              </ul>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                How It Works
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Apply</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Create your ScopsTrade account, complete verification, and submit your leader application.
                      Our team reviews applications within 48 hours.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Set Up Your Profile</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Once approved, customize your leader profile with your trading strategy, bio,
                      risk parameters, and preferred instruments.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Trade and Earn</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Start trading as you normally would. Followers will discover your profile,
                      copy your trades, and you earn commissions automatically.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Performance Requirements */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Performance Requirements
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                To maintain your leader status, ScopsTrade requires you to meet the following standards:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>Trade consistently with a minimum number of trades per month</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>Maintain responsible risk management practices (monitored by AutoGuard&trade;)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>Keep your maximum drawdown within acceptable limits</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>Adhere to the ScopsTrade Leader Code of Conduct</span>
                </li>
              </ul>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                Leaders who consistently underperform or engage in high-risk behavior may have their
                leader status reviewed or suspended to protect the community.
              </p>
            </section>

            {/* Image placeholders before CTA */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
            </div>

            {/* CTA */}
            <section className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Lead?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Take the first step toward becoming a ScopsTrade Leader. Apply today and start
                earning from your trading expertise while helping others succeed.
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
