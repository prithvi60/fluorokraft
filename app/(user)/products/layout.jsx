export const metadata = {
  title: "Fluorokraft - Products",
  description: "Fluorokraft - Products",
  alternates: {
    canonical: `https://fluorokraft.vercel.app/products`,
  },
  metadataBase: new URL("https://fluorokraft.vercel.app/"),
  openGraph: {
    title: "Fluorokraft - Products",
    description: "Fluorokraft - Products",
    url: "https://fluorokraft.vercel.app/products",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PageLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}