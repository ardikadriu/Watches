import Image from "next/image";
import Smartwatch from "@/public/smart-watch.png";
const Smartwatchiamge = () => {
  return (
    <div>
      <Image src={Smartwatch} width={461} height={563} alt="watch" />
    </div>
  );
};

export default Smartwatchiamge;
