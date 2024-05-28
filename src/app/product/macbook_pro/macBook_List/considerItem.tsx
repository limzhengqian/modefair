interface ConsiderItemProps {
  specChoice: boolean;
  isCarousel: boolean;
}

interface ChipDetail {
  name: string;
  src: string;
  description: string;
  details: string[];
}
import chip_data from "./../../../data/chip_data.json";
const ConsiderItemContainer: React.FC<ConsiderItemProps> = ({
  specChoice,
  isCarousel,
}) => {
  return (
    <div className={`bg-customStickyGrey  text-center font-sans mt-24 ${isCarousel?`w-[390px]` : `w-[980px]`}`}>
      <div>
        <h2 className="font-medium mt-14 mx-auto tracking-tight text-2xl w-fit sm:text-2xl md:text-[26px] lg:text-[26px]">
          What to consider when choosing your MacBook Pro
        </h2>
        <p className="mt-2 text-[16px] pl-16 pr-16">
          Configure your laptop on the next step.
        </p>
        <div
          className={`flex text-left p-5 tracking-tight shrink-0 ${
            isCarousel ? `flex-col gap-y-5` : `flex-row m-10 gap-x-10 `
          }`}
        >
          {chip_data.map((item: ChipDetail, index: number) => {
            if (index === 0 && !specChoice) return null;
            else {
              return (
                <div className="text-[13px]">
                  <img src={item.src} className="w-9 h-9 mb-5" />
                  <h3 className="font-medium mb-5">{item.name}</h3>
                  <p className="mb-3">{item.description}</p>
                  <ul className="list-disc ml-5">
                    {item.details.map((item: string, index: number) => {
                      return <li className="mb-3">{item}</li>;
                    })}
                  </ul>
                </div>
              );
            }
          })}
        </div>
        <div className="flex justify-center mb-10 gap-x-1">
          <p className="text-[12px]">Have questions about buying a Mac? </p>
          <p className="text-[12px] hover:cursor-pointer text-[#06c] hover:underline">{`Chat with a Mac Specialist.`}</p>
        </div>
      </div>
    </div>
  );
};

export default ConsiderItemContainer;
