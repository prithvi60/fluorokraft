export const metadata = {
  title: "Fluorokraft - Blog",
  description: "Fluorokraft - Blog",
  openGraph: {
    title: "Fluorokraft - Blog",
    description: "Fluorokraft - Blog",
  },
};

export default function PageLayout({ children }) {
  return (
    <main>
      {children}
    </main>
  );
}