import React from 'react';
import { Shield, Briefcase, Stethoscope, Gem, Crown, Sparkles } from 'lucide-react';

const items = [
  {
    icon: Shield,
    title: 'Negotiated Privileges',
    desc: 'Access preferred rates and perks with trusted providers across the UAE.',
  },
  {
    icon: Briefcase,
    title: 'Professional Services',
    desc: 'Legal, financial planning, mortgage advisors, tax, company setup and more.',
  },
  {
    icon: Stethoscope,
    title: 'Made for Clinicians',
    desc: 'A concierge built specifically for doctors and dentists—your time is precious.',
  },
  {
    icon: Gem,
    title: 'Luxury & Lifestyle',
    desc: 'Fine dining, exclusive experiences, luxury retail, travel and wellness clubs.',
  },
  {
    icon: Crown,
    title: 'Curated & Vetted',
    desc: 'Partners are handpicked for excellence, reliability and discretion.',
  },
  {
    icon: Sparkles,
    title: 'White-Glove Support',
    desc: 'Personalized assistance from our concierge team for every request.',
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/30 via-transparent to-neutral-950/40" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-manrope text-3xl font-extrabold md:text-5xl">
            Premium benefits that elevate your everyday
          </h2>
          <p className="mt-4 text-neutral-300">
            Unlock advantages across professional, lifestyle and wellness categories—with a single membership.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-300/20 bg-gradient-to-br from-neutral-900/80 to-neutral-900/50 p-6 shadow-lg backdrop-blur transition hover:border-emerald-300/40"
            >
              <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-400/20" />
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-emerald-600/20 p-3 text-emerald-300 ring-1 ring-emerald-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <p className="mt-3 text-neutral-300">{desc}</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
              <p className="mt-4 text-sm text-yellow-300/80">
                Members regularly save time and money—without compromising on quality.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
