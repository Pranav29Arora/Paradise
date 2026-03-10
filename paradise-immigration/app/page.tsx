"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const heroStats = [
  { label: "Visas & PR Approvals", value: "12,000+" },
  { label: "Years of Experience", value: "15+" },
  { label: "Client Satisfaction", value: "4.8/5" },
];

const services = [
  {
    title: "Permanent Residency",
    description:
      "Profile evaluation and PR strategy for Canada, Australia and other leading destinations.",
    href: "/services/permanent-residency",
  },
  {
    title: "Work Visa",
    description:
      "Guidance for employer sponsorship, work permits and skilled pathways for professionals.",
    href: "/services/work-visa",
  },
  {
    title: "Study Abroad",
    description:
      "University shortlisting, SOP review and visa filing support for international students.",
    href: "/services/study-abroad",
  },
  {
    title: "Business / Investor Visa",
    description:
      "Advisory for entrepreneurs and investors planning a compliant business migration route.",
    href: "/services/business-investor-visa",
  },
  {
    title: "Tourist Visa",
    description:
      "Visitor visas for tourism, family visits, conferences and short‑term travel.",
    href: "/services/tourist-visa",
  },
];

const countries = [
  { name: "Canada", href: "/countries/canada" },
  { name: "Australia", href: "/countries/australia" },
  { name: "UK", href: "/countries/uk" },
  { name: "USA", href: "/countries/usa" },
  { name: "Germany", href: "/countries/germany" },
];

const faqs = [
  {
    q: "How do I know which country and pathway is right for me?",
    a: "We start with a profile‑based assessment (age, education, work experience, language skills and settlement goals). Based on your score and risk factors, we recommend pathways where you have a stronger chance of approval and clear timelines.",
  },
  {
    q: "Do you guarantee visa approval?",
    a: "No. Final decisions are made by immigration authorities. Our commitment is accurate documentation, transparent advice and compliance with official requirements to maximise your probability of success.",
  },
  {
    q: "Can I apply from outside India?",
    a: "Yes. We support clients globally through virtual consultations, secure document sharing and online collaboration while providing clear milestone updates.",
  },
  {
    q: "What happens in the free consultation?",
    a: "We understand your goals, evaluate eligibility, explain suitable programs, estimate timelines and outline a step‑by‑step action plan with a transparent fee structure.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-sky-50 via-white to-amber-50">
      <section className="border-b border-slate-200 bg-gradient-to-b from-sky-100 via-white to-amber-100">
        <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center px-4 py-12 text-center md:px-6 lg:px-8 lg:py-16">
          <div className="w-full space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
              Visa • PR • Study Abroad • Work Permits
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex-1"
            >
              <div className="flex flex-col space-y-6">
                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.05 }}
                  className="text-center text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
                >
                  Your Trusted Partner for{" "}
                  <span className="text-blue-700">Global Immigration Success</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="max-w-xl text-center text-balance text-sm leading-relaxed text-slate-600 sm:text-base"
                >
                  Paradise Immigration Consultancy supports skilled professionals, students
                  and families with structured profile assessment, documentation planning and
                  application guidance for leading destinations worldwide.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="flex flex-wrap items-center justify-center gap-3"
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
                  >
                    Book Free Consultation
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22 }}
                  className="grid gap-4 pt-4 text-sm text-slate-600 sm:grid-cols-3"
                >
                  {heroStats.map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 shadow-sm"
                    >
                      <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                      <p className="text-xs text-slate-500">{stat.label}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Services designed for high‑confidence applications
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-slate-600">
              We follow a structured process: profile evaluation, pathway selection,
              documentation planning and ongoing case updates.
            </p>
          </div>
          <Link
            href="/services/permanent-residency"
            className="text-xs font-semibold text-blue-700 hover:underline"
          >
            Explore services →
          </Link>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35 }}
              className="group flex flex-col rounded-2xl border border-sky-100 bg-white/90 p-5 shadow-sm ring-1 ring-transparent transition hover:-translate-y-1 hover:border-sky-200 hover:ring-sky-100"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-xl bg-gradient-to-br from-sky-500 via-sky-400 to-amber-300 shadow-md">
                  <Image
                    src="/file.svg"
                    alt="Service illustration"
                    width={32}
                    height={32}
                    className="m-2 opacity-90"
                  />
                </div>
                <h3 className="text-sm font-semibold text-slate-900">
                  {service.title}
                </h3>
              </div>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <Link
                href={service.href}
                className="mt-3 inline-flex text-xs font-semibold text-sky-800 group-hover:text-sky-900"
              >
                Learn more →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-gradient-to-r from-sky-50 via-white to-amber-50">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                Countries We Serve
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Explore tailored visa and PR pathways for top destinations. Our guidance
                is aligned to official requirements and your individual profile.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
              {countries.map((country) => (
                <motion.div
                  key={country.href}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="flex items-center gap-3 rounded-2xl border border-sky-100 bg-white/90 p-3 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 via-sky-400 to-amber-300 text-sm font-semibold text-white">
                    {country.name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <Link
                      href={country.href}
                      className="text-xs font-semibold text-slate-900 hover:text-sky-800"
                    >
                      {country.name}
                    </Link>
                    <p className="text-[11px] text-slate-500">
                      Visa, PR and study options overview.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              Why Choose Us
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              We operate as your long‑term immigration partner with a compliance‑first mindset,
              consistent communication and a structured documentation process. Our commitment is to
              provide transparent guidance, realistic timelines, and ethical service delivery.
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>
                  Profile‑first eligibility assessment with clear next steps.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>
                  Transparent timelines, documentation checklists and updates.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>
                  Dedicated case manager support from start to submission.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>
                  Ethical advisory — no misleading claims or "guarantees".
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>
                  Competitive pricing with no hidden charges.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>
                  15+ years of proven success across multiple countries.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                <span>
                  Global network of immigration partners and legal experts.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-gradient-to-r from-brand/5 via-white to-gold/5">
        <div className="mx-auto max-w-6xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
          <h2 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-slate-600">
            Clear answers to common questions about visas, PR and studying abroad.
          </p>
          <div className="mt-6 space-y-3">
            {faqs.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-slate-100 bg-white px-4 py-3 text-sm text-slate-700 shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-2">
                  <span className="font-medium text-slate-900">{item.q}</span>
                  <span className="text-xs text-slate-500 group-open:rotate-180">▾</span>
                </summary>
                <p className="mt-2 text-sm text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
