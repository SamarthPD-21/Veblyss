import Card from './ui/Card'

const ProductCategories = () => {
  const productCategories = [
    {
      id: 1,
      title: "Leather Products",
      description: "Premium quality bags, wallets & accessories crafted from ethically sourced leather.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680"
    },
    {
      id: 2,
      title: "Copper Products", 
      description: "Traditional and modern copper-ware for kitchen, décor, and wellness that's food-safe.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/bb026a644e05f59b428d904a33574ff27ea432f3?width=680"
    },
    {
      id: 3,
      title: "Imitation Jewelry",
      description: "Stylish, high-quality artificial jewellery necklaces, bangles, earrings, sets, and more.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680"
    },
    {
      id: 4,
      title: "Indian Handicrafts",
      description: "Handcrafted art pieces from skilled artisans woodwork, pottery, textiles, and more.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680"
    },
    {
      id: 5,
      title: "Sustainable Products",
      description: "Eco-conscious goods including reusable items, natural materials, & bio - products.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680"
    },
    {
      id: 6,
      title: "Spices",
      description: "Export-grade Indian spices whole, ground, and blends. Pure, flavorful, and traceable.",
      image: "https://api.builder.io/api/v1/image/assets/TEMP/1cc98503454f2a38f26dc6cdb9b88ade043b6498?width=680"
    }
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

export default ProductCategories
