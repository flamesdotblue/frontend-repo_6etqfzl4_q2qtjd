import React, { useState } from 'react';
import { Mail, User, Briefcase, ArrowRight } from 'lucide-react';

export default function CTA() {
  const [status, setStatus] = useState('idle');

  const submit = (e) => {
    e.preventDefault();
    setStatus('submitted');
  };

  return (
    <section id="apply" className="relative w-full overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-manrope text-3xl font-extrabold md:text-5xl">Request your membership</h2>
            <p className="mt-4 text-neutral-300">
              Join a private network of clinicians enjoying privileged access across the UAE. No obligation.
            </p>
            <ul className="mt-6 space-y-2 text-neutral-200">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-yellow-300" /> Preferential rates and upgrades</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Curated, vetted partners</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-green-300" /> Dedicated concierge support</li>
            </ul>
          </div>

          <form onSubmit={submit} className="relative rounded-2xl border border-emerald-300/20 bg-neutral-900/70 p-6 shadow-xl backdrop-blur">
            {status === 'submitted' ? (
              <div className="text-center">
                <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-emerald-500/20 p-3 text-emerald-300">
                  ✓
                </div>
                <h3 className="text-xl font-semibold">Request received</h3>
                <p className="mt-2 text-neutral-300">Our concierge will reach out shortly.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <label className="group relative block">
                    <span className="mb-1 block text-sm text-neutral-300">Full Name</span>
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-300/20 bg-neutral-800/60 px-3 py-2 text-white focus-within:border-emerald-300/40">
                      <User className="h-5 w-5 text-emerald-300" />
                      <input required type="text" placeholder="Dr. Aisha Al Falasi" className="w-full bg-transparent placeholder-neutral-400 outline-none" />
                    </div>
                  </label>
                  <label className="group relative block">
                    <span className="mb-1 block text-sm text-neutral-300">Email</span>
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-300/20 bg-neutral-800/60 px-3 py-2 text-white focus-within:border-emerald-300/40">
                      <Mail className="h-5 w-5 text-emerald-300" />
                      <input required type="email" placeholder="dr@clinic.ae" className="w-full bg-transparent placeholder-neutral-400 outline-none" />
                    </div>
                  </label>
                  <label className="group relative block md:col-span-2">
                    <span className="mb-1 block text-sm text-neutral-300">Specialty</span>
                    <div className="flex items-center gap-2 rounded-xl border border-emerald-300/20 bg-neutral-800/60 px-3 py-2 text-white focus-within:border-emerald-300/40">
                      <Briefcase className="h-5 w-5 text-emerald-300" />
                      <input required type="text" placeholder="Cardiology, Dentistry, Orthopedics..." className="w-full bg-transparent placeholder-neutral-400 outline-none" />
                    </div>
                  </label>
                  <label className="group relative block md:col-span-2">
                    <span className="mb-1 block text-sm text-neutral-300">What would you like help with?</span>
                    <textarea rows={4} placeholder="E.g., mortgage advice, fine dining, spa memberships..." className="w-full rounded-xl border border-emerald-300/20 bg-neutral-800/60 p-3 text-white placeholder-neutral-400 outline-none focus:border-emerald-300/40" />
                  </label>
                </div>

                <button type="submit" className="mt-5 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:from-emerald-500 hover:to-green-400">
                  Request Membership
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
