import { CgAppleWatch } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { IoMdPerson } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className="w-[1100px] flex justify-between py-3">
      <div className="flex items-center">
        <CgAppleWatch size={27} />
        <h1>Mohid</h1>
      </div>
      <div className="w-[475px] flex justify-between text-[#8B8E99] ">
        {" "}
        <h2 className="hover:cursor-pointer">Home</h2>
        <h2 className="hover:cursor-pointer">Brands</h2>
        <h2 className="hover:cursor-pointer">Recent Products</h2>
        <h2 className="hover:cursor-pointer">Contact</h2>
        <h2 className="hover:cursor-pointer">About</h2>
      </div>
      <div className="flex items-center w-[97px] justify-between">
        <IoSearch size={23} />
        <IoMdPerson size={23} />
        <IoCartSharp size={23} />
      </div>
    </div>
  );
};

export default Topbar;
