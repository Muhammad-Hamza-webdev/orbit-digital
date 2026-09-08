import "./globals.css";
import localFont from "next/font/local";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingSocials from "../components/Common/FloatingSocials";
import ScrollToTop from "../components/Common/ScrollToTop";
import CustomCursor from "../components/Common/CustomCursor";

const gilroy = localFont({
  src: [
    {
      path: "../../public/assets/fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/Gilroy-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

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
  icons: {
    icon: "/assets/img/logo/Favicon.png",
    shortcut: "/assets/img/logo/Favicon.png",
    apple: "/assets/img/logo/Favicon.png",
  },
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
    <html lang="en" className={gilroy.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingSocials />
        <ScrollToTop />
        <CustomCursor />
      </body>
    </html>
  );
}
