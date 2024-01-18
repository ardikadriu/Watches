import Noramlwatches from "./Normalwatches";
import Latestwatch from "./Latestwatch";

const Store = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <Noramlwatches />
      <Latestwatch />
    </div>
  );
};

export default Store;
