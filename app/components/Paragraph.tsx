import { CiSearch } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
const Paragraph = () => {
  return (
    <div className="text-white mr-[184px]">
      {" "}
      <h1 className="w-[457px] text-[64px] font-bold leading-[80px]">
        Discover
        <br /> Most Suitable Watches
      </h1>
      <p className=" text-[#8B8E99] text-[16px] font-medium max-w-[456px]">
        Find the best, reliable, and cheap smart watches here. We focus on
        product quality. Here you can find smart watches of almost all brands.
        So why you are waiting? Just order now!
      </p>
      <div className="flex items-center w-[443px] justify-between bg-white rounded-[15px] h-[60px] mt-[47px]">
        <FaSearch className="ml-[19px] mr-4" size={31} color="blue" />
        <input
          className="w-[443px] text-black outline-none "
          type="text"
          placeholder="Find the best brands"
        />
        <button
          className="bg-[#3858D6] text-[18px] w-[112px] h-[45px] shrink-0 rounded-[15px] mr-[9px] "
          type="submit"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Paragraph;
