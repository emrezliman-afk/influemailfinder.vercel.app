import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Find TikTok Influencers with Emails<br />in Seconds
          </h1>
          <p className="text-xl mb-10 max-w-3xl mx-auto">
            Automatically scan TikTok hashtags, extract profiles with business emails, 
            and download ready-to-outreach leads. No bots, no manual work.
          </p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-lg text-xl font-semibold hover:bg-gray-100 transition">
            Start 14-Day Free Trial → Coming Soon
          </button>
          <p className="mt-4 text-sm">Site yapım aşamasında • Yakında ödeme aktif olacak</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Simple Pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Starter</h3>
              <p className="text-5xl font-bold mb-6">$39<span className="text-xl font-normal text-gray-600">/mo</span></p>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li>✓ 10,000 profiles/month</li>
                <li>✓ 5 scans/month</li>
                <li>✓ Excel export</li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg">Coming Soon</button>
            </div>

            <div className="border-2 border-purple-600 rounded-xl p-8 shadow-2xl relative">
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <p className="text-5xl font-bold mb-6">$99<span className="text-xl font-normal text-gray-600">/mo</span></p>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li>✓ 50,000 profiles/month</li>
                <li>✓ 20 scans/month</li>
                <li>✓ Priority support</li>
              </ul>
              <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700">Coming Soon</button>
            </div>

            <div className="border rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Agency</h3>
              <p className="text-5xl font-bold mb-6">$199<span className="text-xl font-normal text-gray-600">/mo</span></p>
              <ul className="space-y-4 mb-8 text-gray-700">
                <li>✓ 150,000 profiles/month</li>
                <li>✓ Unlimited scans</li>
                <li>✓ Team accounts</li>
              </ul>
              <button className="w-full bg-gray-800 text-white py-3 rounded-lg">Coming Soon</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-gray-600 bg-gray-100">
        © 2026 TikTok Lead Finder. All rights reserved.
      </footer>
    </div>
  );
}
