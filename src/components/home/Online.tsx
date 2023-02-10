import Image from 'next/image';

export default function OnlineScreen() {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-100 via-primary to-gray-100">
      <div className="w-full h-full bg-[url('/pattern-gray.svg')] bg-[length:43.31px_50px] bg-center flex flex-col justify-center">
        <div className="container bg-gray-100 shadow-lg px-4 py-10 mx-auto rounded-lg">
          <div className="flex flex-col lg:flex-row-reverse gap-5">
            <div className="h-[50vh] w-full lg:w-1/2 mb-4 lg:mb-0">
              <Image
                src="/online.png"
                alt="online"
                width={755}
                height={1005}
                className="w-auto h-full mx-auto"
              />
            </div>
            <div className="lg:h-[50vh] w-full lg:w-1/2 flex flex-col justify-center">
              <div className="lg:w-11/12 mx-auto">
                <h1 className="text-center font-semibold text-3xl mb-10">
                  Онлайн зөвлөгөө
                </h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Magni consequuntur fugit repellendus voluptatem, laudantium
                  rem blanditiis quod praesentium assumenda esse dolorem soluta.
                  Voluptatibus, soluta itaque. Sit repellendus, assumenda fugiat
                  velit dolor deleniti expedita possimus doloremque ad molestiae
                  tempore reprehenderit quia. Quia nobis repellendus vitae
                  eveniet aut ratione maiores. Ratione, quaerat?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
