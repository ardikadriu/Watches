import Image from "next/image";
import LatestwatchApple from "@/public/smartwatch-black.png";
import LatestwatchgrayApple from "@/public/smartwatch-gray.png";
import LatestwatchpinkApple from "@/public/smartwatch-pink.png";
import Stars from "@/public/stars.png";
const Latestwatch = () => {
  return (
    <div className="mt-[135px]">
      <h3 className="text-[#3858D6] font-medium text-center m-0">
        Find your favourite smart watch.
      </h3>
      <h1 className="text-[36px] font-bold text-center">Our Latest Products</h1>

      <div className="flex w-[1104px] mt-[94px]">
        <div>
          <Image
            src={LatestwatchApple}
            width={250}
            height={280}
            alt="latestApple"
          />
          <div className="">
            <h1 className="max-w-[334px] text-center mt-[11px] text-[24px] font-semibold">
              Apple Smart I
            </h1>
            <div className="max-w-[334px] flex justify-center mt-2">
              <Image
                className="max-w-[334px] text-center mx-[43px]"
                src={Stars}
                width={115}
                height={21}
                alt="rate-stars"
              />
            </div>
            <h1 className="max-w-[334px] text-center text-[24px] font-semibold mt-2">
              <span className="line-through leading-[24px] text-[20px] text-[#8B8E99]">
                $300.00
              </span>
              $255.00
            </h1>
          </div>
        </div>

        <div className="ml-[93px]">
          <Image
            className="mx-[43px]"
            src={LatestwatchgrayApple}
            width={250}
            height={280}
            alt="latestApple"
          />
          <div className="">
            <h1 className="max-w-[334px] text-center mt-[11px] text-[24px] font-semibold">
              Apple Smart I
            </h1>
            <div className="max-w-[334px] flex justify-center mt-2">
              <Image
                className="max-w-[334px] text-center "
                src={Stars}
                width={115}
                height={21}
                alt="rate-stars"
              />
            </div>
            <h1 className="max-w-[334px] text-center text-[24px] font-semibold mt-2">
              <span className="line-through leading-[24px] text-[20px] text-[#8B8E99]">
                $300.00
              </span>
              $255.00
            </h1>
          </div>
        </div>
        <div className="ml-[93px]">
          <Image
            className="mx-[43px]"
            src={LatestwatchpinkApple}
            width={250}
            height={280}
            alt="latestApple"
          />
          <div className="">
            <h1 className="max-w-[334px] text-center mt-[11px] text-[24px] font-semibold">
              Apple Smart I
            </h1>
            <div className="max-w-[334px] flex justify-center mt-2">
              <Image
                className="max-w-[334px] text-center "
                src={Stars}
                width={115}
                height={21}
                alt="rate-stars"
              />
            </div>
            <h1 className="max-w-[334px] text-center text-[24px] font-semibold mt-2">
              <span className="line-through leading-[24px] text-[20px] text-[#8B8E99]">
                $300.00
              </span>
              $255.00
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center pb-[100px]">
        <button className="w-[196px] h-[46px] bg-[#3858D6] text-[18px] font-semibold text-white rounded-[20px] mt-[80px]">
          View More
        </button>
      </div>
    </div>
  );
};

export default Latestwatch;
