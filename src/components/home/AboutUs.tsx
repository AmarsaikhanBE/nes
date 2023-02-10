import Image from 'next/image';

export default function AboutUsScreen() {
  return (
    <div className="bg-[#e3d0bf]  grid lg:grid-cols-2">
      <div className="relative">
        <Image
          src="/team.png"
          alt="team"
          width={1920}
          height={1371}
          className="w-full h-auto"
        />
      </div>
      AboutUs
    </div>
  );
}
