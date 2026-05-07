import { Playfair_Display, Inter, Dancing_Script } from "next/font/google";
import "./globals.css";
import ScrollAnimator from "../components/ScrollAnimator";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
  weight: ["400", "700"],
});

export const metadata = {
  metadataBase: new URL("https://cake-house-gamma.vercel.app"),
  title: "Tota Cake House | Fresh Homemade Cakes in Maslandapur",
  description:
    "Order fresh homemade custom cakes in Maslandapur and Barasat. Birthdays, anniversaries, baby showers — egg and eggless options starting from Rs. 289.",
  openGraph: {
    title: "Tota Cake House | Fresh Homemade Cakes in Maslandapur",
    description:
      "Order fresh homemade custom cakes in Maslandapur and Barasat. Birthdays, anniversaries, baby showers — egg and eggless options starting from Rs. 289.",
    url: "https://cake-house-gamma.vercel.app",
    siteName: "Tota Cake House",
    images: [
      {
        url: "/images/hero-poster.png",
        width: 1200,
        height: 630,
        alt: "Tota Cake House — Fresh Homemade Cakes",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tota Cake House | Fresh Homemade Cakes in Maslandapur",
    description:
      "Order fresh homemade custom cakes in Maslandapur and Barasat. Birthdays, anniversaries, baby showers — egg and eggless options starting from Rs. 289.",
    images: ["/images/hero-poster.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable} ${dancing.variable}`}>
      <body><ScrollAnimator />{children}</body>
    </html>
  );
}
