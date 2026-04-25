import Image from "next/image";

const FEATURES = [
  {
    title: "Real comparable data",
    body: "Pulls live Airbnb comps within a tight radius of your property so the estimate reflects what similar listings actually earn — not market averages.",
  },
  {
    title: "Property-specific modelling",
    body: "Adjusts for bedrooms, bathrooms, parking, garden, hot tub and dozens of other factors. No more eyeballing a portal listing.",
  },
  {
    title: "Honest, exportable reports",
    body: "Get a branded PDF with monthly income, occupancy, cashflow and setup costs. Use it for finance applications, partners, or your own peace of mind.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Paste the address",
    body: "Type any UK address. We geocode it and find genuine STR comparables nearby.",
  },
  {
    n: "02",
    title: "Configure the property",
    body: "Bedrooms, bathrooms, amenities, mortgage, fees. Sensible defaults so you can move fast.",
  },
  {
    n: "03",
    title: "Get the numbers",
    body: "See projected monthly income, occupancy, cashflow and ROI. Export the full PDF report when you're ready.",
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-sage-900 text-cream-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <Image
              src="/stayful-logo.png"
              alt="Stayful"
              width={140}
              height={40}
              priority
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden items-center gap-8 text-sm sm:flex">
            <a href="#features" className="hover:text-sage-200">
              Features
            </a>
            <a href="#how" className="hover:text-sage-200">
              How it works
            </a>
            <a href="#pricing" className="hover:text-sage-200">
              Pricing
            </a>
          </nav>
          <a
            href="#cta"
            className="rounded-md bg-sage-200 px-4 py-2 text-sm font-medium text-sage-900 hover:bg-sage-100"
          >
            Start free trial
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-sage-900 text-cream-50">
        <div className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-6xl px-6 pt-20 pb-28 text-center">
          <p className="mb-5 text-sm font-medium tracking-wider text-sage-200 uppercase">
            For UK property investors
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            Know exactly what your property will earn on Airbnb{" "}
            <span className="text-sage-300">before you buy.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-sage-100/85">
            Stayful pairs real comparable Airbnb data with a property-specific
            algorithm to give you a defensible monthly income estimate in
            seconds — so you can offer with confidence.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <a
              id="cta"
              href="mailto:hello@stayful.co.uk?subject=Stayful%20free%20trial"
              className="inline-flex items-center justify-center rounded-md bg-sage-200 px-6 py-3 text-base font-semibold text-sage-900 transition hover:bg-cream-100"
            >
              Start your 14-day free trial
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-md border border-sage-400/50 px-6 py-3 text-base font-medium text-cream-50 transition hover:bg-sage-800"
            >
              See how it works
            </a>
          </div>
          <p className="mt-4 text-sm text-sage-200/70">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-cream-50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-sage-900 sm:text-4xl">
              Built for serious investors, not portal browsers.
            </h2>
            <p className="mt-4 text-lg text-sage-700">
              The shortcut estimates you find online are wrong almost every
              time. Stayful is the tool we built because we needed it
              ourselves.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-sage-200 bg-white p-7 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-sage-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-sage-700 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="bg-cream-100 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-sage-900 sm:text-4xl">
              From address to investment decision in three steps.
            </h2>
          </div>
          <ol className="mt-16 grid gap-8 md:grid-cols-3">
            {STEPS.map((s) => (
              <li key={s.n} className="relative">
                <div className="text-sm font-semibold text-sage-500">
                  {s.n}
                </div>
                <h3 className="mt-2 text-xl font-semibold text-sage-900">
                  {s.title}
                </h3>
                <p className="mt-3 text-sage-700 leading-relaxed">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="bg-cream-50 py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-sage-900 sm:text-4xl">
            Simple pricing.
          </h2>
          <p className="mt-4 text-lg text-sage-700">
            One plan, everything included. Try it free for 14 days.
          </p>
          <div className="mt-12 inline-block rounded-2xl border border-sage-200 bg-white p-10 text-left shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-wider text-sage-500">
              Stayful Pro
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-5xl font-semibold text-sage-900">£29</span>
              <span className="text-sage-700">/ month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sage-800">
              <li className="flex gap-3">
                <span className="text-sage-500">✓</span> Unlimited property
                analyses
              </li>
              <li className="flex gap-3">
                <span className="text-sage-500">✓</span> Branded PDF reports
              </li>
              <li className="flex gap-3">
                <span className="text-sage-500">✓</span> Real Airbnb
                comparables data
              </li>
              <li className="flex gap-3">
                <span className="text-sage-500">✓</span> Setup cost calculator
              </li>
              <li className="flex gap-3">
                <span className="text-sage-500">✓</span> Cancel any time
              </li>
            </ul>
            <a
              href="mailto:hello@stayful.co.uk?subject=Stayful%20free%20trial"
              className="mt-8 inline-flex w-full items-center justify-center rounded-md bg-sage-700 px-6 py-3 font-semibold text-cream-50 transition hover:bg-sage-800"
            >
              Start 14-day free trial
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sage-200 bg-cream-100 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <Image
            src="/stayful-logo.png"
            alt="Stayful"
            width={120}
            height={36}
            className="h-7 w-auto opacity-70"
          />
          <p className="text-sm text-sage-700">
            &copy; {new Date().getFullYear()} Stayful. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
