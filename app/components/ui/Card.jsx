import Image from 'next/image'
import Btn from './Btn'

const Card = ({ title, description, image }) => {
  return (
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
}

export default Card
