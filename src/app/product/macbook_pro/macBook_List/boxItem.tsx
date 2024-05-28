import TouchSlider from "./imageSlider";

interface BoxItemProps {
  isCarousel: boolean;
  specChoice: boolean;
}

const BoxItemContainer: React.FC<BoxItemProps> = ({
  isCarousel,
  specChoice,
}) => {
  return (
    <div className=" w-full font-sans mt-10">
      {isCarousel ? (
        <div className="mt-6">
            <TouchSlider specChoice = {specChoice}/>
        </div>
      ) : (
        <div className="flex flex-row mx-auto max-w-[980px]">
          <div className="w-4/12 ">
            <img
              className="bg-customStickyGrey w-[333px] h-[392px]"
              src={specChoice ? "/14_laptop.png" : "/16_laptop.png"}
            />
            <p className="text-sm mt-3 font-light tracking-tight">{specChoice ? "14-inch MacBook Pro" : "16-inch MacBook Pro"}</p>
          </div>
          <div className="w-4/12 ">
            <img
              className="bg-customStickyGrey w-[333px] h-[392px] "
              src={specChoice ? "/14_cable.png" : "/16_cable.png"}
            />
            <p className="text-sm mt-3 font-light tracking-tight">USB-C to MagSafe 3 Cable (2m)</p>
          </div>
          <div className="w-4/12 ">
            <img
              className="bg-customStickyGrey w-[333px]/12 h-[392px]"
              src= "/14_adapter.png" 
            />
            <p className="text-sm mt-3 font-light tracking-tight">{specChoice ? "USB-C Power Adapter" : "140W USB-C Power Adapter"}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BoxItemContainer;
