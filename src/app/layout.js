import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Orbit Digital | Fluid Digital Product & Engineering Agency",
  description: "Orbit Digital is a premier digital agency building high-performance Next.js web applications, responsive user experiences, and enterprise cloud solutions.",
  keywords: ["Digital Agency", "Next.js Development", "Responsive Web Design", "UI/UX Architecture", "Cloud Engineering", "Orbit Digital"],
  authors: [{ name: "Orbit Digital Team" }],
  openGraph: {
    title: "Orbit Digital | Fluid Digital Product & Engineering Agency",
    description: "High-performance web applications, responsive user interfaces, and enterprise cloud solutions.",
    url: "https://orbitdigital.app",
    siteName: "Orbit Digital",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
