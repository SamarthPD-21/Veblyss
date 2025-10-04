import Image from 'next/image'

const Footer = () => {
  const socialIcons = [
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/a485700930340924e8ea7079d9d2f12894a62a98?width=70",
      alt: "Facebook"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/7d28cd2fa3c279b9bf4b750ec80557a698155f06?width=69",
      alt: "Instagram"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/3cceb4b47b0ca6cbd775a7816295a547642291dd?width=65",
      alt: "LinkedIn"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/ec26709e9aca62af8f7ef1d837d635c77fc463df?width=69",
      alt: "Twitter"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/69333b329d2202c4ee17aeb58e3f6f6b75f2aba7?width=68",
      alt: "YouTube"
    },
    {
      src: "https://api.builder.io/api/v1/image/assets/TEMP/c887a88c2e41e3688e899618c4663131bab9126d?width=69",
      alt: "WhatsApp"
    }
  ]

  return (
    <footer id="contact" className="bg-white/80 mt-16 border-t">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#home" className="text-sm text-gray-700">Home</a></li>
              <li><a href="#about" className="text-sm text-gray-700">About Us</a></li>
              <li><a href="#products" className="text-sm text-gray-700">Products</a></li>
              <li><a href="#contact" className="text-sm text-gray-700">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="mt-3 text-sm text-gray-700">+xx xxxxx-xxxxx</div>
            <div className="mt-4 text-sm text-gray-700">
              VeBlyss Global Pvt Ltd<br/>
              2619, 36th A Cross, 26th Main,<br/>
              4th T Block, 9th Block Post,<br/>
              Jayanagar, Bengaluru,<br/>
              Karnataka – 560069
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex gap-3 items-center">
              {socialIcons.map((icon, index) => (
                <div key={index} className="w-9 h-9 bg-white rounded flex items-center justify-center shadow">
                  <Image src={icon.src} alt={icon.alt} width={28} height={28} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-4 text-center text-sm text-gray-600">
          <p>© VeBlyss Global Pvt Ltd. All Rights Reserved.</p>
          <p className="mt-2">Website designed & powered by Krisha – Art from Heart | Branding • Packaging • Websites • Digital Solutions</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
