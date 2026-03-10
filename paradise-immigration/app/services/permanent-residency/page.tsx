import { buildMetadata } from "@/app/components/seo";

export const metadata = buildMetadata({
  title: "Permanent Residency Services",
  description:
    "Comprehensive permanent residency (PR) solutions for Canada, Australia and other leading destinations, with transparent guidance at every stage.",
});

const steps = [
  "Detailed profile assessment and selection of the most suitable PR program.",
  "Document checklist, drafting support and application strategy.",
  "Submission of profile to the relevant immigration system or authority.",
  "Support with biometrics, medicals and post‑submission updates.",
  "Pre‑landing preparation and post‑landing guidance.",
];

const documents = [
  "Valid passport and identity documents",
  "Educational qualification certificates and transcripts",
  "Work experience letters and reference letters",
  "Language test results (IELTS, PTE or equivalent, if applicable)",
  "Proof of funds and financial documentation",
  "Civil status documents (marriage, birth certificates where applicable)",
];

export default function PermanentResidencyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-slate-200 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Permanent Residency (PR) Services
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600">
            Paradise Immigration Consultancy helps skilled professionals, families and
            graduates secure permanent residency in countries such as Canada and
            Australia through well‑planned, transparent strategies.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Overview</h2>
              <p className="mt-2 text-sm text-slate-600">
                Permanent residency allows you to live, work and study in a country on a
                long‑term basis while enjoying many of the benefits that citizens do. Our
                consultants evaluate your profile across age, education, work experience,
                language skills and adaptability factors to recommend the right PR
                pathway.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">
                Eligibility Criteria (Indicative)
              </h2>
              <ul className="mt-2 space-y-2 text-sm text-slate-700">
                <li>• Bachelor&apos;s degree or higher in a recognised discipline.</li>
                <li>• Relevant skilled work experience (usually 1–3+ years).</li>
                <li>• Proficiency in English (and/or French, depending on country).</li>
                <li>
                  • Ability to score minimum points in the country&apos;s immigration
                  grid or eligibility system.
                </li>
                <li>• Good health, character and clean background checks.</li>
              </ul>
              <p className="mt-2 text-xs text-slate-500">
                Exact criteria vary by country and program. Our team will assess your
                profile against the latest official requirements.
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Process Steps</h2>
              <ol className="mt-2 space-y-2 text-sm text-slate-700">
                {steps.map((step) => (
                  <li key={step} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-600" />
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">Required Documents</h2>
              <ul className="mt-2 space-y-1.5 text-sm text-slate-700">
                {documents.map((doc) => (
                  <li key={doc}>• {doc}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm">
              <h3 className="text-sm font-semibold text-slate-900">
                Speak to a PR Specialist
              </h3>
              <p className="mt-2 text-xs text-slate-600">
                Share a few details and our team will evaluate your PR options and call
                you back with a customised roadmap.
              </p>
              <form className="mt-3 space-y-2 text-xs">
                <div>
                  <label className="font-medium text-slate-700">Full Name</label>
                  <input
                    type="text"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none ring-blue-100 focus:ring-2"
                  />
                </div>
                <div>
                  <label className="font-medium text-slate-700">Email</label>
                  <input
                    type="email"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none ring-blue-100 focus:ring-2"
                  />
                </div>
                <div>
                  <label className="font-medium text-slate-700">Phone</label>
                  <input
                    type="tel"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none ring-blue-100 focus:ring-2"
                  />
                </div>
                <div>
                  <label className="font-medium text-slate-700">
                    Preferred Country for PR
                  </label>
                  <select className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 outline-none ring-blue-100 focus:ring-2">
                    <option>Canada</option>
                    <option>Australia</option>
                    <option>Unsure – need guidance</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700"
                >
                  Request PR Consultation
                </button>
                <p className="text-[10px] text-slate-500">
                  All consultations are advisory in nature. Final immigration decisions
                  rest with respective governments.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

