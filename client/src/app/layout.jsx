import { Poppins } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export const metadata = {
  title: 'VeBlyss Global - Exporting India\'s Finest to the World',
  description: 'Premium exports including imitation jewelry, copperware, leather goods, handicrafts, spices, and sustainable lifestyle products.',
  keywords: 'VeBlyss Global, Indian exports, leather products, copperware, imitation jewelry, handicrafts, spices, sustainable products',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className={poppins.className}>
        <Nav />
        <main className="pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
