import Hero from './components/Hero'
import Welcome from './components/Welcome'
import ProductCategories from './components/ProductCategories'
import Features from './components/Features'
import Partners from './components/Partners'

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      <Hero />
      <div className="bg-[var(--gradient-bg)] relative z-10">
        <Welcome />
        <ProductCategories />
        <Features />
        <Partners />
      </div>
    </div>
  )
}
