import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Categories from './components/Categories';
import Process from './components/Process';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      {/* Simple top bar */}
      <header className="sticky top-0 z-20 w-full border-b border-emerald-300/10 bg-neutral-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-emerald-400" />
            <span className="font-manrope text-lg font-extrabold tracking-tight">Pulse Concierge</span>
          </div>
          <nav className="hidden gap-6 text-sm text-neutral-300 md:flex">
            <a href="#benefits" className="hover:text-white">Benefits</a>
            <a href="#categories" className="hover:text-white">Categories</a>
            <a href="#apply" className="rounded-lg bg-gradient-to-r from-emerald-600 to-green-500 px-4 py-2 font-semibold text-white hover:from-emerald-500 hover:to-green-400">Request Membership</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <section id="categories"><Categories /></section>
        <Process />
        <CTA />
      </main>

      <footer className="border-t border-emerald-300/10 bg-neutral-950 py-10 text-neutral-400">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p>© {new Date().getFullYear()} Pulse Concierge. All rights reserved.</p>
          <p className="text-sm">For doctors and dentists across the UAE.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
