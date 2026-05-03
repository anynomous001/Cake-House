import "./globals.css";

export const metadata = {
  title: "Tota Cake House | Fresh Homemade Cakes",
  description:
    "A Next.js version of the Tota Cake House website for fresh homemade cakes in Maslandapur and Barasat."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
