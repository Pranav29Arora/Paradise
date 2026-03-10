import type { Metadata } from "next";

export type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
};

const defaultTitle = "Paradise Immigration Consultancy | Global Visa & PR Experts";
const defaultDescription =
  "Paradise Immigration Consultancy helps professionals, students, and families secure visas, permanent residency, and study abroad opportunities for Canada, Australia, UK, USA, Germany, and more.";

export function buildMetadata({
  title,
  description,
  canonical,
}: SeoProps = {}): Metadata {
  const finalTitle = title ? `${title} | Paradise Immigration Consultancy` : defaultTitle;

  return {
    title: finalTitle,
    description: description ?? defaultDescription,
    alternates: canonical
      ? {
          canonical,
        }
      : undefined,
    openGraph: {
      title: finalTitle,
      description: description ?? defaultDescription,
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

