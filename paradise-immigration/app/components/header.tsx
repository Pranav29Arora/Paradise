"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { href: "/services/permanent-residency", label: "Permanent Residency" },
  { href: "/services/work-visa", label: "Work Visa" },
  { href: "/services/study-abroad", label: "Study Abroad" },
  { href: "/services/business-investor-visa", label: "Business / Investor Visa" },
  { href: "/services/tourist-visa", label: "Tourist Visa" },
];

const countries = [
  { href: "/countries/canada", label: "Canada Immigration" },
  { href: "/countries/australia", label: "Australia Immigration" },
  { href: "/countries/uk", label: "UK Immigration" },
  { href: "/countries/usa", label: "USA Immigration" },
  { href: "/countries/germany", label: "Germany Immigration" },
];

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<"services" | "countries" | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const isActive = (href: string) => true; // Always return true to keep buttons highlighted

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/50 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 transition-transform duration-300 hover:scale-105">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-brand/20 to-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image 
              src="/logo.png" 
              alt="Paradise Immigration Consultancy Logo" 
              width={40}
              height={40}
              className="relative h-10 w-10 rounded-full ring-2 ring-white/50 shadow-lg transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-bold tracking-wide bg-gradient-to-r from-brand to-gold bg-clip-text text-transparent transition-all duration-300 group-hover:from-brand-dark group-hover:to-gold-dark">
              Paradise Immigration
            </span>
            <span className="text-sm font-medium" style={{ color: 'var(--color-gold)' }}>Consultancy</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium md:flex">
          <Link
            href="/"
            className={`relative rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 ${
              isActive("/") ? "bg-gradient-to-r from-brand to-gold text-white shadow-lg" : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-gold/50"
            }`}
            onClick={() => setActiveItem("/")}
          >
            <span className="relative z-10">Home</span>
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("services")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`relative flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-brand to-gold text-white shadow-lg`}
              onClick={() => setActiveItem("services")}
            >
              <span>Services</span>
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">▾</span>
            </button>
            <AnimatePresence>
              {openMenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl"
                >
                  <div className="grid gap-1">
                    {services.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col rounded-xl px-3 py-2 transition-colors hover:bg-slate-50"
                      >
                        <span className="text-sm font-semibold text-slate-900">
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-500">
                          Learn more about {item.label.toLowerCase()}.
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div
            className="relative"
            onMouseEnter={() => setOpenMenu("countries")}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <button
              className={`relative flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 bg-gradient-to-r from-brand to-gold text-white shadow-lg`}
              onClick={() => setActiveItem("countries")}
            >
              <span>Countries</span>
              <span className="text-xs transition-transform duration-300 group-hover:rotate-180">▾</span>
            </button>
            <AnimatePresence>
              {openMenu === "countries" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.16 }}
                  className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-slate-100 bg-white p-3 shadow-xl"
                >
                  <div className="grid grid-cols-2 gap-1">
                    {countries.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex flex-col rounded-xl px-3 py-2 transition-colors hover:bg-slate-50"
                      >
                        <span className="text-sm font-semibold text-slate-900">
                          {item.label}
                        </span>
                        <span className="text-xs text-slate-500">
                          Explore visa and PR options.
                        </span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/about"
            className={`relative rounded-full px-4 py-2 transition-all duration-300 transform hover:scale-105 ${
              isActive("/about") ? "bg-gradient-to-r from-brand to-gold text-white shadow-lg" : "hover:bg-gradient-to-r hover:from-blue-50 hover:to-gold/50"
            }`}
            onClick={() => setActiveItem("about")}
          >
            <span className="relative z-10">About</span>
          </Link>
          <Link
            href="/contact"
            className="relative group rounded-full bg-gradient-to-r from-brand to-gold px-6 py-3 text-sm font-bold text-white shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:from-brand-dark hover:to-gold-dark"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">📞</span>
              <span>+91 70707 00303</span>
            </span>
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </Link>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full border border-slate-200 p-2 md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span className="h-4 w-4" style={{ color: 'var(--color-brand)' }}>
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-slate-100 bg-white px-4 pb-4 pt-2 text-sm text-slate-700 md:hidden"
          >
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 ${
                  isActive("/") ? "bg-blue-50 text-brand" : "hover:bg-blue-50 hover:text-brand"
                }`}
              >
                Home
              </Link>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 hover:bg-blue-50">
                  <span style={{ color: 'var(--color-brand)' }}>Services</span>
                  <span className="text-xs text-slate-500 group-open:rotate-180">▾</span>
                </summary>
                <div className="mt-1 flex flex-col gap-1 rounded-lg bg-blue-50 p-2">
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-2 py-1 text-xs hover:bg-white hover:text-brand"
                    >
                      <span style={{ color: 'var(--color-brand)' }}>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </details>
              <details className="group">
                <summary className="flex cursor-pointer items-center justify-between rounded-lg px-3 py-2 hover:bg-blue-50">
                  <span style={{ color: 'var(--color-brand)' }}>Countries</span>
                  <span className="text-xs text-slate-500 group-open:rotate-180">▾</span>
                </summary>
                <div className="mt-1 grid grid-cols-1 gap-1 rounded-lg bg-blue-50 p-2">
                  {countries.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="rounded-md px-2 py-1 text-xs hover:bg-white hover:text-brand"
                    >
                      <span style={{ color: 'var(--color-brand)' }}>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </details>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 ${
                  isActive("/about") ? "bg-blue-50 text-brand" : "hover:bg-blue-50 hover:text-brand"
                }`}
              >
                <span style={{ color: 'var(--color-brand)' }}>About</span>
              </Link>
              <Link
                href="/blog"
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2 ${
                  pathname.startsWith("/blog")
                    ? "bg-blue-50 text-brand"
                    : "hover:bg-blue-50 hover:text-brand"
                }`}
              >
                <span style={{ color: 'var(--color-brand)' }}>Blog</span>
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-1 rounded-full bg-brand px-4 py-2 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-brand-dark"
              >
                <span className="text-lg">📞</span>
                <span>+91 70707 00303</span>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

