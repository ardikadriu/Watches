import Firstsection from "./Firstsection";
import Topbar from "./Topbar";

const Container = () => {
  return (
    <div
      className="flex flex-col items-center text-white pb-[142px]"
      style={{
        background: "linear-gradient(155deg, #383638 2.06%, #0B0B0B 33.08%)",
      }}
    >
      <Topbar />
      <Firstsection />
    </div>
  );
};

export default Container;
