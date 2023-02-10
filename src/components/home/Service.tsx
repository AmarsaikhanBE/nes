import {
  FilterVintageTwoTone,
  PrivacyTipTwoTone,
  VaccinesTwoTone,
} from '@mui/icons-material';

export default function ServiceScreen() {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl text-center pb-10 font-semibold">Үйлчилгээ</h2>
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="rounded-md bg-white shadow-md p-5">
          <div className="mb-4 flex items-center gap-5">
            <div className="bg-gray-200 rounded-full p-3 hover:animate-bounce">
              <VaccinesTwoTone fontSize="large" color="secondary" />
            </div>
            <h1 className="text-xl leading-none font-semibold">
              Гоо сайхны эмчилгээний бүтээгдэхүүн
            </h1>
          </div>
          <p className="text-justify">
            БНСУ-ын Samsung группын албан ёсны эрхтэйгээр гоо сайхны болон
            эрүүлжүүлэх үйлчилгээтэй эм, бэлдмэлүүдээр хэрэглэгчиддээ үйлчилж
            байна.
          </p>
        </div>
        <div className="rounded-md bg-white shadow-md p-5">
          <div className="mb-4 flex items-center gap-5">
            <div className="bg-gray-200 rounded-full p-3">
              <FilterVintageTwoTone
                fontSize="large"
                color="secondary"
                className="hover:animate-spin"
              />
            </div>
            <h1 className="text-xl leading-none font-semibold">
              Гоо сайхны эмчилгээ, мэс ажилбар
            </h1>
          </div>
          <p className="text-justify">
            БНСУ-ын Samsung группын албан ёсны эрхтэйгээр гоо сайхны болон
            эрүүлжүүлэх үйлчилгээтэй эм, бэлдмэлүүдээр хэрэглэгчиддээ үйлчилж
            байна.
          </p>
        </div>
        <div className="rounded-md bg-white shadow-md p-5">
          <div className="mb-4 flex items-center gap-5">
            <div className="bg-gray-200 rounded-full p-3">
              <PrivacyTipTwoTone
                fontSize="large"
                color="secondary"
                className="hover:animate-ping"
              />
            </div>
            <h1 className="text-xl leading-none font-semibold">
              Эрүүл мэнд, гоо сайхны зөвлөгөө
            </h1>
          </div>
          <p className="text-justify">
            БНСУ-ын Samsung группын албан ёсны эрхтэйгээр гоо сайхны болон
            эрүүлжүүлэх үйлчилгээтэй эм, бэлдмэлүүдээр хэрэглэгчиддээ үйлчилж
            байна.
          </p>
        </div>
      </div>
    </div>
  );
}
