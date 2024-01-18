import Image from "next/image";
import Appleseries from "@/public/firstwatch.png";
import Xiaomiseries from "@/public/secondwatch.png";
import FitBitseries from "@/public/thirdwatch.png";

const Noramlwatches = () => {
  return (
    <div className="w-[1104px] flex justify-between mt-[73px] ">
      <div className="w-[354px] h-[249px] flex justify-center items-center ">
        <Image
          className="shrink-0"
          src={Appleseries}
          width={85}
          height={148}
          alt="applewatch"
        />
        <div className=" ml-[26px]">
          <h1 className="text-[36px] font-bold shrink-0">Apple</h1>
          <p className="max-w-[173px] text-[#8B8E99] font-medium shrink-0">
            Apple is one of the most famous smart watches providing company.
          </p>
        </div>
      </div>
      <div>
        {" "}
        <div className="w-[354px] h-[249px] flex justify-center items-center ">
          <Image
            className="shrink-0"
            src={Xiaomiseries}
            width={85}
            height={148}
            alt="applewatch"
          />
          <div className=" ml-[26px]">
            <h1 className="text-[36px] font-bold shrink-0">Xiaomi</h1>
            <p className="max-w-[173px] text-[#8B8E99] font-medium shrink-0">
              Xiaomi smart watches are produced by MI company.
            </p>
          </div>
        </div>
      </div>
      <div>
        {" "}
        <div className="w-[354px] h-[249px] flex justify-center items-center ">
          <Image
            className="shrink-0"
            src={FitBitseries}
            width={85}
            height={148}
            alt="applewatch"
          />
          <div className=" ml-[26px]">
            <h1 className="text-[36px] font-bold shrink-0">FitBit</h1>
            <p className="max-w-[173px] text-[#8B8E99] font-medium shrink-0">
              FitBit smart watches are best for there health and fitness
              features.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Noramlwatches;
