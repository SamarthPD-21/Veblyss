import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pop from "../components/Pop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "VeBlyss Global",
  description:
    "Your one-stop solution for lifestyle, fashion, and home products.",
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} w-full overflow-x-hidden`}>
      <body
        className={`antialiased ${poppins.className} min-h-screen flex flex-col`}
      >
        <div className="page-container">
          <Navbar />
          <main className="main-content w-full">{children}</main>
          <Footer />
          <Pop />
        </div>
      </body>
    </html>
  );
}
