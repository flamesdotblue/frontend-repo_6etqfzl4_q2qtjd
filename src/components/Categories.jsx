import React from 'react';
import { Building2, Utensils, Wrench, Dumbbell, Spa, Wallet, Star } from 'lucide-react';

const categories = [
  {
    icon: Building2,
    title: 'Professional Services',
    items: ['Legal Counsel', 'Financial Planning', 'Mortgage Brokers', 'Company Setup'],
  },
  {
    icon: Utensils,
    title: 'Dining & Leisure',
    items: ['Fine Dining', 'Luxury Brunch', 'Chef’s Tables', 'Members-Only Lounges'],
  },
  {
    icon: Wrench,
    title: 'Day-to-Day',
    items: ['Home Services', 'Repair & Maintenance', 'Premium Cleaning', 'Chauffeur'],
  },
  {
    icon: Dumbbell,
    title: 'Fitness',
    items: ['Elite Gyms', 'Personal Training', 'Boutique Studios', 'Golf & Racquet'],
  },
  {
    icon: Spa,
    title: 'Wellness & Beauty',
    items: ['Spa & Hammam', 'Aesthetic Clinics', 'Retreats', 'Holistic Therapies'],
  },
  {
    icon: Wallet,
    title: 'Lifestyle Perks',
    items: ['Luxury Retail', 'Travel Upgrades', 'Experiences', 'Exclusive Events'],
  },
];

export default function Categories() {
  return (
    <section className="relative w-full bg-gradient-to-b from-neutral-950 to-neutral-900 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(16,185,129,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="font-manrope text-3xl font-extrabold md:text-5xl">A curated universe of advantages</h2>
            <p className="mt-3 max-w-2xl text-neutral-300">
              From practical needs to unforgettable indulgences, every partner is selected for quality and service.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-3 py-1 text-sm text-yellow-200">
            <Star className="h-4 w-4" /> Gold-tier partners featured
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-emerald-300/20 bg-neutral-900/60 p-6 shadow-xl backdrop-blur transition hover:border-emerald-300/40 hover:shadow-emerald-900/30"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-400/20" />
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-600/20 p-3 text-emerald-300 ring-1 ring-emerald-500/30">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-semibold text-lg">{title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-neutral-300">
                {items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/80" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
