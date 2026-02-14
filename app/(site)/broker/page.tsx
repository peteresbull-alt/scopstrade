import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Link from "next/link";

export default function BrokerPartnership() {
  return (
    <>
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <div className="max-w-4xl mx-auto px-6 py-12 lg:py-20">
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Broker Partnership
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Partner with ScopsTrade to offer copy trading technology to your clients
            </p>
          </div>
          <div className="space-y-12">
            {/* Partner with ScopsTrade */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Partner with ScopsTrade
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                ScopsTrade offers a white-label and integration partnership program designed for
                brokers who want to enhance their offering with best-in-class copy trading technology.
                Our platform seamlessly integrates with your existing infrastructure, allowing your
                clients to access social and copy trading without leaving your ecosystem.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Whether you are a startup broker looking to differentiate or an established firm
                seeking to expand your product suite, ScopsTrade provides the technology, expertise,
                and support you need.
              </p>
            </section>

            {/* Why Partner with Us */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Why Partner with Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Access to Technology</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Leverage our proven copy trading engine, AutoGuard&trade; risk management, and
                    real-time trade replication technology without building from scratch.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Liquidity Solutions</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Access deep liquidity pools and multi-asset execution across forex, commodities,
                    indices, and cryptocurrencies through our network.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Compliance Support</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Our compliance team helps you navigate regulatory requirements across multiple
                    jurisdictions, ensuring your copy trading offering meets local standards.
                  </p>
                </div>
              </div>
            </section>

            {/* Partnership Benefits */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Partnership Benefits
              </h2>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>White-label copy trading platform customizable to your brand identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>RESTful API and FIX protocol integration for seamless connectivity</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>AutoGuard&trade; risk management technology included for all client accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Dedicated account manager and technical support team</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Revenue sharing model with competitive partnership terms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Marketing support including co-branded materials and campaigns</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Access to ScopsTrade&apos;s global network of signal leaders and traders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#10003;</span>
                  <span>Scalable infrastructure that grows with your business</span>
                </li>
              </ul>
            </section>

            {/* Image placeholders after Partnership Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
            </div>

            {/* Integration Process */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Integration Process
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Discovery Call</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      We begin with a consultation to understand your business, technical requirements,
                      regulatory environment, and goals for the partnership.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Technical Integration</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Our engineering team works with yours to integrate the ScopsTrade copy trading
                      engine into your platform via API, plugin, or white-label deployment.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Testing and QA</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Comprehensive testing in a sandbox environment to ensure everything works
                      flawlessly before going live with your clients.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shrink-0">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Launch and Support</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Go live with full support from our team. We provide ongoing monitoring,
                      maintenance, and feature updates as the partnership evolves.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Technology Stack */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Technology Stack
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Our technology is built for performance, reliability, and scale:
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span><strong>Sub-millisecond trade replication</strong> — Ensure followers receive the same entry prices as leaders</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span><strong>99.99% uptime SLA</strong> — Our infrastructure is designed for maximum reliability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span><strong>Multi-asset support</strong> — Forex, commodities, indices, stocks, and cryptocurrencies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span><strong>AutoGuard&trade; integration</strong> — Built-in risk management for all copy trading accounts</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span><strong>Comprehensive APIs</strong> — RESTful and WebSocket APIs for real-time data and control</span>
                </li>
              </ul>
            </section>

            {/* Image placeholders after Technology Stack */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
              <div className="aspect-video rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600">
                <p className="text-gray-400 dark:text-gray-500 text-sm">Image placeholder</p>
              </div>
            </div>

            {/* Compliance and Regulation */}
            <section>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Compliance and Regulation
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                ScopsTrade takes regulatory compliance seriously. Our platform is designed to meet
                the requirements of multiple regulatory frameworks, and our compliance team supports
                partners in navigating their local regulatory landscape.
              </p>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>KYC/AML compliance built into the platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>Risk disclosure and suitability assessment frameworks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>Audit trails and regulatory reporting capabilities</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 font-bold">&#8226;</span>
                  <span>Data protection and privacy compliance (GDPR, etc.)</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 border-2 border-gray-200 dark:border-gray-800">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Ready to Partner?
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                Take the first step toward integrating ScopsTrade&apos;s copy trading technology into your
                brokerage. Contact our partnerships team to schedule a discovery call.
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
