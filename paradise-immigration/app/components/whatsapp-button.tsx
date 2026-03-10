"use client";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917070700303"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-600"
    >
      <span className="text-lg">💬</span>
      <span>Chat on WhatsApp</span>
    </a>
  );
}

