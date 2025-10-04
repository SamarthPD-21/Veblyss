import Image from 'next/image'

const FeatureCard = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded shadow">
      <div className="w-12 h-12 flex items-center justify-center">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 className="text-center text-sm font-medium">{title}</h3>
    </div>
  )
}

export default FeatureCard
