import Image from 'next/image';

export default function ProductsScreen() {
  return (
    <div className="py-10">
      <div className="container mx-auto">
        <h1 className="mb-10 text-center font-semibold text-3xl">
          Эрүүл мэнд, гоо сайхны бүтээгдэхүүнүүд
        </h1>
        <div className="grid">
          <div>
            <Image
              src="/dusal.png"
              alt="product"
              width={452}
              height={579}
              className="rounded shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
