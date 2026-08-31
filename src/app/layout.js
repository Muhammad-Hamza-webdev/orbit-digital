import "./globals.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export const metadata = {
  title: "Orbit Digital | Web Development, AI Automation & Digital Marketing Agency",
  description: "Orbit Digital builds fast websites, automates workflows with AI, creates standout brand content, and grows your business with performance marketing and SEO — all under one roof.",
  keywords: [
    "web development agency",
    "AI automation services",
    "digital marketing agency",
    "Shopify website development",
    "custom Next.js websites",
    "SEO services",
    "performance marketing agency"
  ],
  authors: [{ name: "Orbit Digital Team" }],
  openGraph: {
    title: "Orbit Digital | Web Development, AI Automation & Digital Marketing Agency",
    description: "Orbit Digital builds fast websites, automates workflows with AI, creates standout brand content, and grows your business with performance marketing and SEO — all under one roof.",
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
