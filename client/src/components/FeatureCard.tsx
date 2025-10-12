import Image from "next/image";

export default function FeatureCard({
  title,
  icon,
}: {
  title: string;
  icon: string;
}) {

  return (
    <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-4xl shadow">
      <div className="w-12 h-12 flex items-center justify-center">
        <Image src={icon} alt={title} width={40} height={40} />
      </div>
      <h3 className="text-center text-xl font-medium">{title}</h3>
    </div>
  );
}
