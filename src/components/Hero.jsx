import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-neutral-950 text-white">
      {/* Spline Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for luxury vibe */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-950/30 to-neutral-950/90" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-900/40 via-transparent to-emerald-900/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-900/20 px-3 py-1 text-sm text-emerald-200 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            For Doctors & Dentists in the UAE
          </div>
          <h1 className="mt-6 font-manrope text-4xl font-extrabold leading-tight text-white md:text-6xl">
            Pulse Concierge
          </h1>
          <p className="mt-4 max-w-xl text-lg text-neutral-200 md:text-xl">
            Exclusive, negotiated access to the UAE’s finest services — from legal and financial experts
            to luxury dining, wellness, and once-in-a-lifetime experiences. All curated for medical
            professionals.
          </p>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
            <a
              href="#apply"
              className="group inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:from-emerald-500 hover:to-green-400"
            >
              Request Membership
              <svg
                className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="m13 5 7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#benefits"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-300/30 bg-white/5 px-6 py-3 font-semibold text-emerald-200 backdrop-blur transition hover:bg-white/10"
            >
              Explore Benefits
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-2 gap-4 text-sm text-neutral-200/90">
            <div className="rounded-xl border border-emerald-300/20 bg-neutral-900/40 p-4 backdrop-blur">
              Preferred rates on professional services
            </div>
            <div className="rounded-xl border border-emerald-300/20 bg-neutral-900/40 p-4 backdrop-blur">
              Luxury and wellness privileges
            </div>
            <div className="rounded-xl border border-emerald-300/20 bg-neutral-900/40 p-4 backdrop-blur">
              Curated partners, verified quality
            </div>
            <div className="rounded-xl border border-emerald-300/20 bg-neutral-900/40 p-4 backdrop-blur">
              Dedicated concierge guidance
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner glow */}
      <div className="pointer-events-none absolute right-[-5%] top-[-5%] h-80 w-80 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] left-[-5%] h-96 w-96 rounded-full bg-green-400/10 blur-3xl" />
    </section>
  );
}
