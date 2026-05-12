export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-15 px-6">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 lg:flex-row">
        {/* Left Content */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="mb-4 inline-flex items-center rounded-full border border-[#adb5bd]/20 bg-white/5 px-4 py-1 text-sm text-[#adb5bd] backdrop-blur-md">
            Designed for creators & developers
          </p>

          <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
            The new
            <span className="block bg-gradient-to-r from-[#adb5bd] to-white bg-clip-text text-transparent">
              MacBook Experience
            </span>
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-gray-400">
            Experience next-level performance with a sleek design built for
            creators, developers, and professionals.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-[#adb5bd]">
            <div>
              <p className="font-semibold text-white">Visit Store</p>
              <p>Apple Premium Reseller</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="font-semibold text-white">Connect</p>
              <p>support@macstore.com</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
            <button className="group relative overflow-hidden rounded-full bg-[#2e2c2e] px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(173,181,189,0.4)]">
              <span className="relative z-10">Buy Now</span>

              <div className="absolute inset-0 translate-y-full bg-[#adb5bd] transition-transform duration-500 group-hover:translate-y-0" />

              <span className="absolute inset-0 z-20 flex items-center justify-center text-[#111] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Buy Now
              </span>
            </button>

            <button className="rounded-full border border-[#adb5bd]/30 px-8 py-4 text-lg font-medium text-[#adb5bd] backdrop-blur-md transition-all duration-300 hover:border-[#adb5bd] hover:bg-white/5">
              Explore
            </button>
          </div>
        </div>

        {/* 3D Mac Style Card */}
        <div className="group perspective-[3000px] relative">
          <div className="relative h-[260px] w-[420px] rounded-[28px] border border-white/10 bg-gradient-to-br from-[#2e2c2e] to-[#1d1d1f] p-4 shadow-2xl transition-all duration-700 [transform-style:preserve-3d] group-hover:rotate-x-12 group-hover:-rotate-y-12 group-hover:translate-y-[-12px]">
            {/* Screen */}
            <div className="relative h-full w-full overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#adb5bd55,transparent_60%)]" />

              <div className="absolute inset-0 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.08),transparent)] translate-x-[-120%] group-hover:translate-x-[120%] transition-transform duration-1000" />

              {/* Fake UI */}
              <div className="absolute left-4 top-4 flex gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>

              <div className="flex h-full flex-col items-center justify-center">
                <h2 className="text-3xl font-semibold text-white">
                  MacBook Pro
                </h2>

                <p className="mt-4 text-[#adb5bd]">
                  Supercharged with performance.
                </p>

                <div className="mt-8 flex gap-3">
                  <div className="h-3 w-3 rounded-full bg-[#2e2c2e] ring-2 ring-white/20 shadow-[0_0_15px_rgba(46,44,46,0.9)]" />
                  <div className="h-3 w-3 rounded-full bg-[#adb5bd] ring-2 ring-white/20 shadow-[0_0_15px_rgba(173,181,189,0.9)]" />
                </div>
              </div>
            </div>

            {/* Reflection */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

            {/* Floating Shadow */}
            <div className="absolute -bottom-10 left-1/2 h-16 w-[85%] -translate-x-1/2 rounded-full bg-black/60 blur-2xl transition-all duration-700 group-hover:blur-3xl group-hover:scale-110" />
          </div>
        </div>
      </div>
    </section>
  );
}
