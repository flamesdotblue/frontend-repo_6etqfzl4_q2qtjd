import React from 'react';
import { Phone, CheckCircle2, ArrowRight, User, Shield } from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Request Membership',
    desc: 'Share your details and preferences — we keep everything discreet and secure.',
  },
  {
    icon: Phone,
    title: 'Concierge Consultation',
    desc: 'A specialist maps your needs and unlocks the right partners and privileges.',
  },
  {
    icon: Shield,
    title: 'Enjoy Preferential Access',
    desc: 'Book with confidence. We handle the details so you save time and money.',
  },
];

export default function Process() {
  return (
    <section className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(234,179,8,0.07),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-extrabold md:text-5xl">Concierge, simplified</h2>
          <p className="mt-4 text-neutral-300">Three steps to premium, hassle-free access.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <div key={title} className="relative rounded-2xl border border-emerald-300/20 bg-neutral-900/60 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-600/20 p-3 text-emerald-300 ring-1 ring-emerald-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold text-yellow-300/90">0{idx + 1}</div>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-neutral-300">{desc}</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-300">
                <CheckCircle2 className="h-5 w-5" />
                Seamless and secure
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-4">
          <a href="#apply" className="group inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-3 font-semibold text-white shadow-lg shadow-emerald-900/40 transition hover:from-emerald-500 hover:to-green-400">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
