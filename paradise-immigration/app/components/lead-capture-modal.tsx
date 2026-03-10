"use client";

import { useEffect, useState } from "react";

export function LeadCaptureModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/20 px-4 pb-6 pt-24 sm:items-center">
      <div className="max-w-md flex-1 rounded-2xl bg-white p-5 shadow-xl">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Get a Free Profile Assessment
            </h3>
            <p className="mt-1 text-xs text-slate-600">
              Share your contact details and our immigration specialist will call you
              within one business day.
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="text-slate-400 hover:text-slate-600"
          >
            ✕
          </button>
        </div>
        <form className="mt-3 space-y-2 text-xs">
          <div className="grid gap-2 sm:grid-cols-2">
            <div>
              <label className="font-medium text-slate-700">Name</label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs outline-none ring-blue-100 focus:bg-white focus:ring-2"
                placeholder="Full name"
              />
            </div>
            <div>
              <label className="font-medium text-slate-700">Phone</label>
              <input
                type="tel"
                className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs outline-none ring-blue-100 focus:bg-white focus:ring-2"
                placeholder="Mobile number"
              />
            </div>
          </div>
          <div>
            <label className="font-medium text-slate-700">Interested Country</label>
            <select className="mt-1 w-full rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1.5 text-xs outline-none ring-blue-100 focus:bg-white focus:ring-2">
              <option value="">Select</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>United Kingdom</option>
              <option>United States</option>
              <option>Germany</option>
              <option>Other</option>
            </select>
          </div>
          <button
            type="submit"
            className="mt-1 w-full rounded-full bg-blue-600 px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            Request a Call Back
          </button>
          <p className="text-[10px] text-slate-500">
            By submitting, you authorise Paradise Immigration Consultancy to contact you
            via phone, SMS, email or WhatsApp.
          </p>
        </form>
      </div>
    </div>
  );
}

