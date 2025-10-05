// Consolidated single-page with local subcomponents to avoid importing from src/components
import Image from 'next/image'

const Btn = ({ children, variant = 'primary', size = 'medium', onClick, className = '', disabled = false, ...props }) => {
  const variantClass = {
    primary: 'bg-primary text-white hover:bg-[#6a1f1f] disabled:opacity-60',
    secondary: 'bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white disabled:opacity-60',
    outline: 'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-white disabled:opacity-60'
  }

  const sizeClass = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-2 text-base',
    large: 'px-8 py-3 text-base'
  }

  const cls = [
    'inline-flex items-center justify-center rounded-md font-medium transition-all',
    variantClass[variant] || variantClass.primary,
    sizeClass[size] || sizeClass.medium,
    className,
    disabled ? 'cursor-not-allowed' : 'cursor-pointer'
  ].join(' ')

  return (
    <button className={cls} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

const FeatureCard = ({ title, icon }) => (
  <div className="flex flex-col items-center gap-3 p-6 bg-white rounded shadow">
    <div className="w-12 h-12 flex items-center justify-center">
      <Image src={icon} alt={title} width={40} height={40} />
    </div>
    <h3 className="text-center text-sm font-medium">{title}</h3>
  </div>
)

const Card = ({ title, description, image }) => (
  <div className="flex flex-col w-full max-w-sm bg-card rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
    <div className="w-full h-64 md:h-72 relative">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>

    <div className="p-6 flex flex-col justify-between gap-4">
      <h3 className="text-center text-lg md:text-xl font-semibold text-black">{title}</h3>
      <p className="text-center text-sm md:text-base text-gray-700 flex-1">{description}</p>

      <div className="flex gap-3 justify-center">
        <Btn variant="primary" size="small">Enquire</Btn>
        <Btn variant="outline" size="small">Check more</Btn>
      </div>
    </div>
  </div>
)

function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[720px] md:h-[980px] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://api.builder.io/api/v1/image/assets/TEMP/66cfb6c929cb8875e9ed7b6bf122061ede9eecea?width=2880"
          alt="VeBlyss Global - Indian Exports"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-black/35 flex items-center">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-left md:pl-8 lg:pl-12 xl:pl-20 py-10">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold text-[var(--hero-text-color)] leading-tight drop-shadow-lg">Exporting India&apos;s Finest to the World</h1>
            <p className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl">From handcrafted elegance to sustainable essentials 
delivered globally</p>
            <div className="mt-8 flex gap-4">
              <Btn variant="primary" size="large" className="shadow-xl">Explore Products</Btn>
              <Btn variant="secondary" size="large">Enquire</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WelcomeSection() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:flex-0 md:w-[705px]">
            <Image src="https://api.builder.io/api/v1/image/assets/TEMP/7b5dd6775f8b81552622e6b06000e703d81beb0b?width=1410" alt="VeBlyss Global Artisan Heritage" width={705} height={460} className="rounded-lg object-cover" />
          </div>

          <div className="flex-1 px-2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-primary">Welcome to VeBlyss Global</h2>
            <p className="mt-4 text-gray-700">Based in Bengaluru, VeBlyss Global connects India&apos;s artisan heritage with international markets. We specialize in ethically sourced, premium exports including imitation jewelry, copperware, leather goods, handicrafts, and sustainable lifestyle products.</p>
            <div className="mt-6">
              <Btn variant="primary" size="medium">Read More</Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductCategoriesSection() {
  const productCategories = [
    { id: 1, title: 'Leather Products', description: 'Premium quality bags, wallets & accessories crafted from ethically sourced leather.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680' },
    { id: 2, title: 'Copper Products', description: "Traditional and modern copper-ware for kitchen, d\u00e9cor, and wellness that's food-safe.", image: 'https://api.builder.io/api/v1/image/assets/TEMP/bb026a644e05f59b428d904a33574ff27ea432f3?width=680' },
    { id: 3, title: 'Imitation Jewelry', description: 'Stylish, high-quality artificial jewellery necklaces, bangles, earrings, sets, and more.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680' },
    { id: 4, title: 'Indian Handicrafts', description: 'Handcrafted art pieces from skilled artisans woodwork, pottery, textiles, and more.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680' },
    { id: 5, title: 'Sustainable Products', description: 'Eco-conscious goods including reusable items, natural materials, & bio - products.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680' },
    { id: 6, title: 'Spices', description: 'Export-grade Indian spices whole, ground, and blends. Pure, flavorful, and traceable.', image: 'https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680' }
  ]

  return (
    <section id="products" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--primary-color)]">Product Categories</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start justify-items-center">
          {productCategories.map((product) => (
            <Card key={product.id} title={product.title} description={product.description} image={product.image} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeaturesSection() {
  const features = [
    { id: 1, title: 'Experienced in Global Trade', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/8ce3347b26f3befa41dcb5ffc3db4facf5f5091a?width=80' },
    { id: 2, title: 'End-to-End Support', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/caa26d32b3d2c1006ea850e4554f04792d935332?width=80' },
    { id: 3, title: 'Certified products', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/ce022767f743074759ec4a973f0327b2ddc2ab1d?width=80' },
    { id: 4, title: 'Ethical & Sustainable Sourcing', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/c287701095fc37491a96a7eef19e5c880ec8d4d9?width=80' },
    { id: 5, title: 'Timely Delivery', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/1859803b76c873c5aee91ffde89f7ec1cfd0223f?width=80' },
    { id: 6, title: 'Customization & Branding', icon: 'https://api.builder.io/api/v1/image/assets/TEMP/e2a1ea2486276a15963027ec179875987636b911?width=80' }
  ]

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center">What Makes Us Different</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.id} title={feature.title} icon={feature.icon} />
          ))}
        </div>
      </div>
    </section>
  )
}

function PartnersSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-bold">Let&apos;s Build a Global Partnership</h2>
            <p className="mt-4 text-gray-700">Reach out today to explore our curated collections and export services tailored for your market.</p>
            <div className="mt-6">
              <Btn variant="primary" size="large">Explore Products</Btn>
            </div>
          </div>

          <div className="md:flex-0 md:w-[705px]">
            <Image src="https://api.builder.io/api/v1/image/assets/TEMP/f357956c466d4af5feea16f7a25acec44c4dab9b?width=1410" alt="Global Partnership" width={705} height={460} className="rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background-color)]">
      <HeroSection />
      <div className="bg-[var(--gradient-bg)] relative z-10">
        <WelcomeSection />
        <ProductCategoriesSection />
        <FeaturesSection />
        <PartnersSection />
      </div>
    </div>
  )
}
