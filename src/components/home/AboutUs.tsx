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
      <div className="grid place-content-center">
        <div className="w-[80%] mx-auto text-gray-900">
          <h1 className="text-5xl font-bold text-center mb-4">Бидний тухай</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            dolorem accusantium ea laboriosam. Dicta numquam, cum facere iure
            odio temporibus.
          </p>
        </div>
      </div>
    </div>
  );
}
