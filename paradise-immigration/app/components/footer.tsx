export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 md:flex-row md:items-start md:justify-between md:px-6 lg:px-8">
        <div className="max-w-sm space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            Paradise Immigration Consultancy
          </h3>
          <p className="text-sm text-slate-600">
            Trusted advisory for professionals, students, and families pursuing secure,
            compliant immigration pathways to Canada, Australia, UK, USA, Germany, and
            beyond.
          </p>
          <p className="text-xs text-slate-500">
            Disclaimer: Paradise Immigration Consultancy is a private consultancy and is
            not associated with any government authority or embassy.
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 text-sm text-slate-600 md:grid-cols-3">
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Offices
            </h4>
            <div>
              <p className="font-medium text-slate-800">Head Office</p>
              <p>Paradise Towers, Business District</p>
              <p>Hyderabad, Telangana, India</p>
            </div>
            <div>
              <p className="font-medium text-slate-800">Global Desk</p>
              <p>Remote consultation for clients worldwide.</p>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Contact
            </h4>
            <p>
              Phone:{" "}
              <a href="tel:+911234567890" className="font-medium text-blue-700">
                +91 12345 67890
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@paradiseimmigration.com"
                className="font-medium text-blue-700"
              >
                info@paradiseimmigration.com
              </a>
            </p>
            <p>Mon – Sat, 10:00 AM – 7:00 PM IST</p>
          </div>
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Quick Links
            </h4>
            <ul className="space-y-1">
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Refund Policy</li>
              <li>Career Opportunities</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-slate-500 md:flex-row md:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} Paradise Immigration Consultancy. All rights
            reserved.
          </p>
          <p>
            For informational purposes only. Immigration outcomes depend on individual
            profiles and government discretion.
          </p>
        </div>
      </div>
    </footer>
  );
}

