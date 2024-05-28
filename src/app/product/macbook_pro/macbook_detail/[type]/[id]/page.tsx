"use client";
import { useRouter } from "next/router";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import data_14 from "./../../../../../data/macbook_14.json";
import data_16 from "./../../../../../data/macbook_16.json";
import { MacItem, MacItem16 } from "@/app/data/mac_interface";

interface params {
  params: paramsItem;
}
interface paramsItem {
  type: string;
  id: string;
}
interface memoryMessage {
  size: string;
  trigger: boolean;
}
const MacbookProductDetailMainContainer: React.FC<params> = ({ params }) => {
  const id = params.id;
  const splittedParams = decodeURIComponent(params.type).split("-");
  const [mobileTopSticky, updateMobileSticky] = useState<boolean>(false);
  const [color, updateColor] = useState<string>("");
  const [size, updateSize] = useState<string>("");
  const [macChoice, updateMacChoice] = useState<any>([]);
  const [currentData, updateCurrentData] = useState<MacItem | null>(null);
  const [currentData16, updateCurrentData16] = useState<MacItem16 | null>(null);
  const [moreOption, updateMoreOption] = useState<boolean>(false);
  const [memoryMessage, updateMemoryMessage] = useState<memoryMessage | null>({
    size: "",
    trigger: false,
  });
  const h2Ref = useRef<HTMLHeadingElement>(null);

  function updateProcessor(index: number): any {
    if (currentData && currentData.processor.choice[index].availability) {
      let minusAmmount = currentData.processor.choice[index].additional_price;
      const updatedPrice = currentData.processor.choice.map((item) => {
        return {
          ...item,
          additional_price: item.additional_price - minusAmmount,
        };
      });
      const correspondingNewMapping =
        currentData.processor.condition[index.toString()];
      const correspondingPrevMapping =
        currentData.processor.condition[currentData.processor.result];
      const result = correspondingNewMapping[index].map((item) => {
        if (item === currentData.memory.result) {
        }
      });
      let newMemoryID = correspondingNewMapping[index][0];
      let changesOccur = true;
      for (let i = 0; i < correspondingNewMapping[index].length; i++) {
        if (correspondingNewMapping[index][i] === currentData.memory.result) {
          newMemoryID = correspondingNewMapping[index][i];
          changesOccur = false;
          break;
        }
      }

      const tempMemoryData = currentData.memory.choice;

      Object.keys(tempMemoryData).forEach((indexInner) => {
        tempMemoryData[parseInt(indexInner)].availability = false;
        correspondingNewMapping[index].forEach((innerItem) => {
          if (innerItem == Number(indexInner)) {
            tempMemoryData[parseInt(indexInner)].availability = true;
            updateMemoryMessage({
              trigger: false,
              size: "",
            });
          }
        });
      });

      let updatedPriceMemory = tempMemoryData;

      if (changesOccur) {
        updateMemoryMessage({
          trigger: true,
          size: currentData.memory.choice[newMemoryID].type.split(" ")[0],
        });
        const priceDiff =
          currentData.memory.choice[newMemoryID].additional_price;
        minusAmmount += priceDiff;
        updatedPriceMemory = tempMemoryData.map((item) => {
          return {
            ...item,
            additional_price: item.additional_price - priceDiff,
          };
        });
      }

      updateCurrentData({
        ...currentData,
        price: currentData.price + minusAmmount,
        price_div: (currentData.price + minusAmmount) / 24,
        processor: {
          ...currentData.processor,
          choice: updatedPrice,
          result: index,
        },
        memory: {
          ...currentData.memory,
          choice: updatedPriceMemory,
          result: newMemoryID,
        },
      });
    }

    if (currentData16 && currentData16.processor.choice[index].availability) {
      let minusAmmount = currentData16.processor.choice[index].additional_price;
      const updatedPrice = currentData16.processor.choice.map((item) => {
        return {
          ...item,
          additional_price: item.additional_price - minusAmmount,
        };
      });
      const correspondingNewMapping =
        currentData16.processor.condition[index.toString()];
      const correspondingPrevMapping =
        currentData16.processor.condition[currentData16.processor.result];
      const result = correspondingNewMapping[index].map((item) => {
        if (item === currentData16.memory.result) {
        }
      });
      let newMemoryID = correspondingNewMapping[index][0];
      let changesOccur = true;
      for (let i = 0; i < correspondingNewMapping[index].length; i++) {
        if (correspondingNewMapping[index][i] === currentData16.memory.result) {
          newMemoryID = correspondingNewMapping[index][i];
          changesOccur = false;
          break;
        }
      }

      const tempMemoryData = currentData16.memory.choice;

      Object.keys(tempMemoryData).forEach((indexInner) => {
        tempMemoryData[parseInt(indexInner)].availability = false;
        correspondingNewMapping[index].forEach((innerItem) => {
          if (innerItem == Number(indexInner)) {
            tempMemoryData[parseInt(indexInner)].availability = true;
            updateMemoryMessage({
              trigger: false,
              size: "",
            });
          }
        });
      });

      let updatedPriceMemory = tempMemoryData;

      if (changesOccur) {
        updateMemoryMessage({
          trigger: true,
          size: currentData16.memory.choice[newMemoryID].type.split(" ")[0],
        });
        const priceDiff =
          currentData16.memory.choice[newMemoryID].additional_price;
        minusAmmount += priceDiff;
        updatedPriceMemory = tempMemoryData.map((item) => {
          return {
            ...item,
            additional_price: item.additional_price - priceDiff,
          };
        });
      }

      updateCurrentData16({
        ...currentData16,
        price: currentData16.price + minusAmmount,
        price_div: (currentData16.price + minusAmmount) / 24,
        processor: {
          ...currentData16.processor,
          choice: updatedPrice,
          result: index,
        },
        memory: {
          ...currentData16.memory,
          choice: updatedPriceMemory,
          result: newMemoryID,
        },
      });
    }
  }

  function updateAdapter(index: number) {
    if (currentData) {
      const minusAmmount = currentData.adapter.choice[index].additional_price;
      const updatedPrice = currentData.adapter.choice.map((item) => {
        return {
          ...item,
          additional_price: item.additional_price - minusAmmount,
        };
      });
      updateCurrentData({
        ...currentData,
        price: currentData.price + minusAmmount,
        price_div: (currentData.price + minusAmmount) / 24,
        adapter: {
          ...currentData.adapter,
          choice: updatedPrice,
          result: index,
        },
      });
    }
  }
  function updateStorage(index: number): any {
    if (currentData && currentData.storage.choice[index].availability) {
      const minusAmmount = currentData.storage.choice[index].additional_price;
      const updatedPrice = currentData.storage.choice.map((item) => {
        return {
          ...item,
          additional_price: item.additional_price - minusAmmount,
        };
      });
      updateCurrentData({
        ...currentData,
        price: currentData.price + minusAmmount,
        price_div: (currentData.price + minusAmmount) / 24,
        storage: {
          ...currentData.storage,
          choice: updatedPrice,
          result: index,
        },
      });
    } else if (
      currentData16 &&
      currentData16.storage.choice[index].availability
    ) {
      const minusAmmount = currentData16.storage.choice[index].additional_price;
      const updatedPrice = currentData16.storage.choice.map((item) => {
        return {
          ...item,
          additional_price: item.additional_price - minusAmmount,
        };
      });
      updateCurrentData16({
        ...currentData16,
        price: currentData16.price + minusAmmount,
        price_div: (currentData16.price + minusAmmount) / 24,
        storage: {
          ...currentData16.storage,
          choice: updatedPrice,
          result: index,
        },
      });
    }
  }
  function updateMemory(index: number): any {
    if (currentData && currentData.memory.choice[index].availability) {
      const minusAmmount = currentData.memory.choice[index].additional_price;
      const updatedPrice = currentData.memory.choice.map((item) => {
        return {
          ...item,
          additional_price: item.additional_price - minusAmmount,
        };
      });
      updateCurrentData({
        ...currentData,
        price: currentData.price + minusAmmount,
        price_div: (currentData.price + minusAmmount) / 24,
        memory: {
          ...currentData.memory,
          choice: updatedPrice,
          result: index,
        },
      });
    } else if (
      currentData16 &&
      currentData16.memory.choice[index].availability
    ) {
      const minusAmmount = currentData16.memory.choice[index].additional_price;
      const updatedPrice = currentData16.memory.choice.map((item) => {
        return {
          ...item,
          additional_price: item.additional_price - minusAmmount,
        };
      });
      updateCurrentData16({
        ...currentData16,
        price: currentData16.price + minusAmmount,
        price_div: (currentData16.price + minusAmmount) / 24,
        memory: {
          ...currentData16.memory,
          choice: updatedPrice,
          result: index,
        },
      });
    }
  }

  useEffect(() => {
    updateSize(splittedParams[0] + "-" + splittedParams[1]);
    updateColor(splittedParams[2]);
    if (splittedParams[0].toString() === "14") {
      updateMacChoice([...data_14]);
    } else {
      updateMacChoice([...data_16]);
    }
  }, []);

  useEffect(() => {
    if (macChoice && splittedParams[0].toString() === "14") {
      macChoice.map((item: MacItem) => {
        if (item.id.toString() === id) {
          updateCurrentData(item);
        }
      });
    } else if (macChoice && splittedParams[0].toString() === "16") {
      macChoice.map((item: MacItem16) => {
        if (item.id.toString() === id) {
          updateCurrentData16(item);
        }
      });
    }
  }, [macChoice]);


  useEffect(() => {
    const handleScroll = () => {
      if (h2Ref.current) {
        const h2Position = h2Ref.current.getBoundingClientRect();
        if (h2Position.top <= 70) {
          updateMobileSticky(true);
        } else {
          updateMobileSticky(false);
        }
      } else {
        updateMobileSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const formatWithTwoDecimals = (num: number | undefined): string => {
    if (typeof num === "number") {
      return Math.abs(num)
        .toFixed(2)
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    return "";
  };

  return (
    <>
      <div className="flex flex-col items-center mx-[24px] mt-[40px] md:m-auto lg:m-auto xl:m-auto md:w-[980px] md:mt-[70px] lg:mt-[70px] xl:mt-[70px] pb-[200px]">
        <div
          className={`sm:invisible flex flex-col justify-start bg-customDarkGrey fixed top-0 w-full ${
            moreOption ? `h-[320px]` : `h-[181px]`
          } mx-auto ${
            mobileTopSticky ? "animate-slide-down" : "animate-slide-up"
          }`}
        >
          <div
            className={` thisdiv flex flex-row items-start justify-center pb-[20px] pt-[24px]`}
          >
            <div className="leading-7 flex flex-col max-w-[224px] self-start ">
              <h3 className="text-[14px] font-medium tracking-tighter">
                RM{" "}
                {currentData
                  ? formatWithTwoDecimals(currentData.price)
                  : formatWithTwoDecimals(currentData16?.price)}{" "}
                or
              </h3>
              <h3 className="text-[14px] font-medium tracking-tighter">
                RM{" "}
                {currentData
                  ? formatWithTwoDecimals(currentData.price_div)
                  : formatWithTwoDecimals(currentData16?.price_div)}
                /mo. for 24 mo.*
              </h3>
              <p className="text-[#06c] text-[14px]  flex flex-col items-center hover:cursor-pointer hover:underline tracking-tight leading-5">
                Explore monthly instalment options
                <span className="flex flex-row items-center self-start">
                  {`>`}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
              </p>
            </div>
            <div className="pl-[15px] text-[14px] mt-[6px] ">
              <button className=" py-[8px] px-[15px] rounded-lg bg-[#0071E3] text-white">
                Add to Bag
              </button>
            </div>
            <img src="/Bookmark.png" className="w-[35px] h-[35px] mt-[8px]" />
          </div>
          <div className="ml-[28px] justify-start">
            <p
              className={`text-[14px] tracking-tight text-[#06c] hover:cursor-pointer hover:underline ${
                moreOption && `invisible`
              }`}
              onClick={() => updateMoreOption(true)}
            >
              Show Options ˅
            </p>
            {moreOption && (
              <>
                <div className="w-full border border-b-1 "></div>
                <div className="pt-[16px] w-[490px] ">
                  <div className="flex ">
                    <img className="w-6 h-4 mr-2" src="/truck.png" />
                    <div className="text-sm">
                      <h4 className="font-medium">Delivery:</h4>
                      <p>In Stock</p>
                      <p>Free Shipping</p>
                      <p className="inline-flex items-center text-sm align-middle items-center text-[#06c] hover:cursor-pointer hover:underline">
                        Get delivery dates{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </p>
                    </div>
                  </div>
                </div>
                <p
              className={`text-[14px] pt-[16px] tracking-tight text-[#06c] hover:cursor-pointer hover:underline ${
                !moreOption && `invisible`
              }`}
              onClick={() => updateMoreOption(false)}
            >
              Hide Options ^
            </p>
              </>
            )}
          </div>
        </div>

        <div className="md:self-end lg:self-end xl:self-end w-[full]">
          <h2
            ref={h2Ref}
            className=" text-[28px] md:text-[40px] h-[64px] md:h-[88px] max-w-[490px] font-medium tracking-tighter leading-8 sm:leading-10"
          >
            Customize your {size} MacBook Pro - {color}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row max-w-[980px]">
          <div className="left-bar static sm:mb-[350px] md:sticky lg:sticky xl:sticky top-2 flex flex-col items-left m-auto mt-[50px] sm:m-0  sm:mt-[-55px]  self-start items-start md:w-[490px]  lg:w-[490px] xl:w-[490px]">
            <div className="h-[220px] ">
              <img
                src={
                  color === "Space Black"
                    ? "/space_black_mac.png"
                    : color === "Grey"
                    ? "/silver_mac.png"
                    : "/space_grey_mac.png"
                }
                className="mx-auto mt-[-20px] sm:mt-0 w-[224px] h-[137px] md:w-[420px] lg:w-[420px] xl:w-[420px] md:h-[252px] lg:h-[252px] xl:h-[252px] pl-[10px] "
              />
              <div className="pt-[22px] sm:py-[22px] w-full h-[77px] sm:h-[99px] text-[14px]">
                <p className="flex flex-row items-center justify-center text-[#06c] hover:cursor-pointer hover:underline">
                  View gallery
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
              <div className="flex flex-row justify-center invisible md:visible mt-[12px]">
                <div className="flex flex-col justify-between items-center w-[215px] h-[51px]">
                  <img src="/delivery_icon.png" className="w-[23px] h-[25px]" />
                  <p className="text-[12px]">Free delivery</p>
                </div>
                <div className="flex flex-col items-center w-[215px]">
                  <img src="/return_icon.png" className="w-[26px] h-[25px]" />
                  <p className="text-[12px]">Free and easy return</p>
                </div>
              </div>
              <div className="flex m-auto mt-[20px] w-full text-[14px] flex-row justify-center invisible md:visible">
                <p className="text-center">
                  Have questions about buying a Mac?
                  <br />
                  <span className=" text-[#06c] hover:cursor-pointer hover:underline">
                    Chat with a Mac Specialist
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="right-bar mx-[24px] sm:mx-0 flex flex-col pt-[10px]  md:w-[490px] lg:w-[490px] xl:w-[490px]">
            <div className="text-[14px]">
              <p className="mb-[11px]">
                {splittedParams[0].toString() === "14"
                  ? currentData?.subtitle
                  : currentData16?.subtitle}
              </p>
              <p className="mb-[11px]">
                {splittedParams[0].toString() === "14"
                  ? currentData?.memory.choice[currentData?.memory.result].type
                  : currentData16?.memory.choice[currentData16?.memory.result]
                      .type}
              </p>
              <p className="mb-[11px]">
                {splittedParams[0].toString() === "14"
                  ? currentData?.storage.choice[currentData?.storage.result]
                      .type
                  : currentData16?.storage.choice[currentData16?.storage.result]
                      .type}
              </p>
              <p className="mb-[11px]">
                {splittedParams[0].toString() === "14"
                  ? currentData?.display
                  : currentData16?.display}
              </p>
              <p className="mb-[11px]">
                {splittedParams[0].toString() === "14"
                  ? currentData?.adapter.choice[currentData.adapter.result].type
                  : currentData16?.adapter}
              </p>
              <p className="mb-[11px]">
                {splittedParams[0].toString() === "14"
                  ? currentData?.ports
                  : currentData16?.ports}
              </p>
              <p className="mb-[11px]">
                {splittedParams[0].toString() === "14"
                  ? currentData?.Keyboard.choice[currentData.Keyboard.result]
                  : currentData16?.Keyboard.choice[
                      currentData16.Keyboard.result
                    ]}
              </p>
            </div>
            <div className="w-full border border-b-1 mt-[20px]"></div>
            <div className="text-[14px] pt-[11px] pb-[27px]">
              <h3 className="font-medium pt-[10px] pb-[12px]">
                Add a trade-in
              </h3>
              <div>
                <p className="pb-[4px]">
                  Get credit towards a new Mac when you trade in your eligible
                  computer. Or recycle it for free.**
                </p>
                <p className="flex flex-row items-center text-[#06c] hover:cursor-pointer hover:underline">
                  Get started
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full border border-b-1 "></div>

            <div className="text-[17px] mt-[14px]">
              {splittedParams[0].toString() === "14" &&
                currentData?.processor && (
                  <div>
                    <h2 className="font-medium">{`Chip (Processor)`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      Which chip is right for you?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    <div className="flex flex-col">
                      {currentData.processor.choice.map((item, index) => {
                        return (
                          <div
                            onClick={() => updateProcessor(index)}
                            className={`flex flex-col sm:flex-row border-2 rounded-xl mt-[12px] p-[12px] ${
                              currentData.processor.result === index
                                ? "border-sky-700"
                                : item.availability
                                ? "border-[#B2B2B5]"
                                : "border-[#CCCCCE] text-[#CCCCCE]"
                            } ${item.availability && "hover:cursor-pointer"} `}
                          >
                            <p className="sm:w-[215px] font-medium tracking-tight leading-5">
                              {item.type}
                            </p>
                            <p className="mr-auto sm:ml-auto sm:mr-0 self-center font-light">
                              {item.additional_price > 0 &&
                                "+ RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                              {item.additional_price < 0 &&
                                "- RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[#6E6E73] mt-[20px] ml-[16px] tracking-tight">
                      {currentData.processor.subtitle}
                    </p>
                  </div>
                )}
              {splittedParams[0].toString() === "16" &&
                currentData16?.processor && (
                  <div>
                    <h2 className="font-medium">{`Chip (Processor)`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      Which chip is right for you?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    <div className="flex flex-col">
                      {currentData16.processor.choice.map((item, index) => {
                        return (
                          <div
                            onClick={() => updateProcessor(index)}
                            className={`flex flex-col sm:flex-row border-2 rounded-xl mt-[12px] p-[12px] ${
                              currentData16.processor.result === index
                                ? "border-sky-700"
                                : item.availability
                                ? "border-[#B2B2B5]"
                                : "border-[#CCCCCE] text-[#CCCCCE]"
                            } ${item.availability && "hover:cursor-pointer"} `}
                          >
                            <p className="sm:w-[215px] font-medium tracking-tight leading-5">
                              {item.type}
                            </p>
                            <p className="mr-auto sm:ml-auto sm:mr-0 self-center font-light">
                              {item.additional_price > 0 &&
                                "+ RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                              {item.additional_price < 0 &&
                                "- RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[#6E6E73] mt-[20px] ml-[16px] tracking-tight">
                      {currentData16.processor.subtitle}
                    </p>
                  </div>
                )}
            </div>

            <div className="text-[17px] mt-[14px]">
              {splittedParams[0].toString() === "14" && currentData?.memory && (
                <div>
                  <h2 className="font-medium">{`Memory`}</h2>
                  <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                    How much memory is right for you?
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="size-4 ml-1"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                  </p>
                  {memoryMessage?.trigger && (
                    <p className="bg-[#FAFAFC] text-[14px] border-2 rounded-lg p-[12px] mt-[12px] font-light">
                      {`Based on your configuration, we’ve selected ${memoryMessage.size} unified
                      memory. Please review this selection.`}
                    </p>
                  )}
                  <div className="flex flex-col">
                    {currentData.memory.choice.map((item, index) => {
                      return (
                        <div
                          onClick={() => updateMemory(index)}
                          className={`flex flex-col sm:flex-row border-2 rounded-xl h-[83px] sm:items-center mt-[12px] p-[15px] ${
                            currentData.memory.result === index
                              ? "border-sky-700"
                              : item.availability
                              ? "border-[#B2B2B5]"
                              : "border-[#CCCCCE] text-[#CCCCCE]"
                          } ${item.availability && "hover:cursor-pointer"}`}
                        >
                          <p className="font-medium tracking-tight leading-5">
                            {item.type}
                          </p>
                          <p className="mr-auto sm:ml-auto sm:mr-0 self-center font-light">
                            {item.additional_price > 0 &&
                              "+ RM " +
                                formatWithTwoDecimals(item.additional_price)}
                            {item.additional_price < 0 &&
                              "- RM " +
                                formatWithTwoDecimals(item.additional_price)}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <p className="text-[#6E6E73] mt-[20px] ml-[16px] tracking-tight">
                    {currentData.memory.subtitle}
                  </p>
                </div>
              )}
              {splittedParams[0].toString() === "16" &&
                currentData16?.memory && (
                  <div>
                    <h2 className="font-medium">{`Memory`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      How much memory is right for you?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    {memoryMessage?.trigger && (
                      <p className="bg-[#FAFAFC] text-[14px] border-2 rounded-lg p-[12px] mt-[12px] font-light">
                        {`Based on your configuration, we’ve selected ${memoryMessage.size} unified
                      memory. Please review this selection.`}
                      </p>
                    )}
                    <div className="flex flex-col">
                      {currentData16.memory.choice.map((item, index) => {
                        return (
                          <div
                            onClick={() => updateMemory(index)}
                            className={`flex flex-col sm:flex-row border-2 rounded-xl h-[83px] sm:items-center mt-[12px] p-[15px] ${
                              currentData16.memory.result === index
                                ? "border-sky-700"
                                : item.availability
                                ? "border-[#B2B2B5]"
                                : "border-[#CCCCCE] text-[#CCCCCE]"
                            } ${item.availability && "hover:cursor-pointer"}`}
                          >
                            <p className="font-medium tracking-tight leading-5">
                              {item.type}
                            </p>
                            <p className="mr-auto sm:ml-auto sm:mr-0 self-center font-light">
                              {item.additional_price > 0 &&
                                "+ RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                              {item.additional_price < 0 &&
                                "- RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                    <p className="text-[#6E6E73] mt-[20px] ml-[16px] tracking-tight">
                      {currentData16.memory.subtitle}
                    </p>
                  </div>
                )}
            </div>
            <div className="text-[17px] mt-[14px]">
              {splittedParams[0].toString() === "14" &&
                currentData?.storage && (
                  <div>
                    <h2 className="font-medium">{`Storage`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      How much storage is right for you?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    <div className="flex flex-col">
                      {currentData.storage.choice.map((item, index) => {
                        return (
                          <div
                            onClick={() => updateStorage(index)}
                            className={`flex flex-col sm:flex-row border-2 rounded-xl h-[83px] sm:items-center mt-[12px] p-[15px] ${
                              currentData.storage.result === index
                                ? "border-sky-700"
                                : item.availability
                                ? "border-[#B2B2B5]"
                                : "border-[#CCCCCE] text-[#CCCCCE]"
                            } ${item.availability && "hover:cursor-pointer"} `}
                          >
                            <p className="font-medium tracking-tight leading-5">
                              {item.type}
                            </p>
                            <p className="mr-auto sm:ml-auto sm:mr-0 self-center font-light">
                              {item.additional_price > 0 &&
                                "+ RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                              {item.additional_price < 0 &&
                                "- RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              {splittedParams[0].toString() === "16" &&
                currentData16?.storage && (
                  <div>
                    <h2 className="font-medium">{`Storage`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      How much storage is right for you?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    <div className="flex flex-col">
                      {currentData16.storage.choice.map((item, index) => {
                        return (
                          <div
                            onClick={() => updateStorage(index)}
                            className={`flex flex-col sm:flex-row border-2 rounded-xl h-[83px] sm:items-center mt-[12px] p-[15px] ${
                              currentData16.storage.result === index
                                ? "border-sky-700"
                                : item.availability
                                ? "border-[#B2B2B5]"
                                : "border-[#CCCCCE] text-[#CCCCCE]"
                            } ${item.availability && "hover:cursor-pointer"} `}
                          >
                            <p className="font-medium tracking-tight leading-5">
                              {item.type}
                            </p>
                            <p className="mr-auto sm:ml-auto sm:mr-0 self-center font-light">
                              {item.additional_price > 0 &&
                                "+ RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                              {item.additional_price < 0 &&
                                "- RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>
            <div className="text-[17px] mt-[14px]">
              {splittedParams[0].toString() === "14" &&
                currentData?.adapter && (
                  <div>
                    <h2 className="font-medium">{`Storage`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      How much power adapter is right for you?
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    <div className="flex flex-col">
                      {currentData.adapter.choice.map((item, index) => {
                        return (
                          <div
                            onClick={() => updateAdapter(index)}
                            className={`flex flex-col sm:flex-row border-2 rounded-xl h-[83px] sm:items-center mt-[12px] p-[15px] ${
                              currentData.adapter.result === index
                                ? "border-sky-700"
                                : "border-[#B2B2B5]"
                            } hover:cursor-pointer `}
                          >
                            <p className="font-medium tracking-tight leading-5">
                              {item.type}
                            </p>
                            <p className="mr-auto sm:ml-auto sm:mr-0 self-center font-light">
                              {item.additional_price > 0 &&
                                "+ RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                              {item.additional_price < 0 &&
                                "- RM " +
                                  formatWithTwoDecimals(item.additional_price)}
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
            </div>
            <div className="mt-[17px]">
              {splittedParams[0].toString() === "14" &&
                currentData?.Keyboard && (
                  <div>
                    <h2>{`Keyboard`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      Learn more
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    <div className="flex flex-col w-full max-w-[380px] sm:max-w-[490px] mt-[10px]">
                      <select
                        id="keyboard-select"
                        className="border-2 h-[56px] border-[#B2B2B5] pt-[18px] pr-[40px] pl-[16px] rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 "
                      >
                        {currentData.Keyboard.choice.map((item, index) => (
                          <option
                            className="pt-[18px] pr-[40px] pl-[16px]"
                            key={index}
                            value={item}
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                      <label
                        htmlFor="keyboard-select"
                        className="text-gray-600 text-xs mt-[10px] ml-[22px] absolute"
                      >
                        Keyboard Language
                      </label>
                    </div>
                  </div>
                )}
              {splittedParams[0].toString() === "16" &&
                currentData16?.Keyboard && (
                  <div>
                    <h2>{`Keyboard`}</h2>
                    <p className="mt-[4px] text-[14px] text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline">
                      Learn more
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="size-4 ml-1"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                          />
                        </svg>
                      </span>
                    </p>
                    <div className="flex flex-col w-full max-w-[380px] sm:max-w-[490px] mt-[10px]">
                      <select
                        id="keyboard-select"
                        className="border-2 h-[56px] border-[#B2B2B5] pt-[18px] pr-[40px] pl-[16px] rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 "
                      >
                        {currentData16.Keyboard.choice.map((item, index) => (
                          <option
                            className="pt-[18px] pr-[40px] pl-[16px]"
                            key={index}
                            value={item}
                          >
                            {item}
                          </option>
                        ))}
                      </select>
                      <label
                        htmlFor="keyboard-select"
                        className="text-gray-600 text-xs mt-[10px] ml-[22px] absolute"
                      >
                        Keyboard Language
                      </label>
                    </div>
                  </div>
                )}
            </div>
            <div className="mt-[14px] p-[30px] bg-[#FAFAFC] text-[14px]">
              <h3 className="font-medium">Need a moment</h3>
              <p className="pb-[8px]">
                Keep all your selections by saving this device to Your Saves,
                then come back anytime and pick up right where you left off.
              </p>
              <p className="text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline ml-[-12px]">
                <span>
                  <img src="/Bookmark.png" className="w-[24px] mr-[5px]" />
                </span>
                Save for later
              </p>
            </div>
          </div>
        </div>
        <div className=" invisible sm:visible z-10 fixed bottom-0 flex justify-center w-full bg-customDarkGrey border-t-2">
          <div className=" w-full max-w-[980px] h-[136px] bg-customDarkGrey  flex flex-row justify-between">
            <div className="pt-[20px] w-[490px]">
              <div className="flex pt-[16px]">
                <img className="w-6 h-4 mr-2" src="/truck.png" />
                <div className="text-sm">
                  <h4 className="font-medium">Delivery:</h4>
                  <p>In Stock</p>
                  <p>Free Shipping</p>
                  <p className="inline-flex items-center text-sm align-middle items-center text-[#06c] hover:cursor-pointer hover:underline">
                    Get delivery dates{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </p>
                </div>
              </div>
            </div>

            <div className="w-[490px] py-[24px] text-right flex flex-row justify-end ">
              <div className="leading-7 flex flex-col ">
                <h3 className="text-[24px] font-medium tracking-tighter">
                  RM{" "}
                  {currentData
                    ? formatWithTwoDecimals(currentData.price)
                    : formatWithTwoDecimals(currentData16?.price)}{" "}
                  or
                </h3>
                <h3 className="text-[24px] font-medium tracking-tighter">
                  RM{" "}
                  {currentData
                    ? formatWithTwoDecimals(currentData.price_div)
                    : formatWithTwoDecimals(currentData16?.price_div)}
                  /mo. for 24 mo.*
                </h3>
                <p className="text-[#06c] text-[14px] flex flex-row items-center justify-end hover:cursor-pointer hover:underline">
                  {`Explore monthly instalment options > `}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="size-4 ml-1"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </span>
                </p>
              </div>
              <div className="pl-[15px] text-[14px] ">
                <button className=" py-[8px] px-[15px] rounded-lg bg-[#0071E3] text-white">
                  Add to Bag
                </button>
              </div>
              <img src="/Bookmark.png" className="w-[35px] h-[35px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="visible sm:invisible">
        <div className="bg-black h-[190px] text-white">
          <div className="max-w-[376px] mx-auto text-center tracking-tighter">
            <h2 className="text-[20px] p-0 flex flex-row items-center justify-center pt-[25px]">
              <span>
                <img
                  src="/apple_icon_white.png"
                  className="w-[15px] h-[16px]"
                />
              </span>
              tv+
            </h2>
            <h3 className="text-[24px] font-medium mt-[10px] leading-6">
              Get 3 months of Apple TV+ free when you buy a Mac.***
            </h3>
            <div className="text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline justify-center gap-x-8 mt-[15px]">
              <p>{`Try it free ^ >`}</p>
              <p>{`Learn more >`}</p>
            </div>
          </div>
        </div>
        <img src="/adv_big.jpg" className="h-[320px] w-full" />
      </div>

      <div className="invisible sm:visible w-full mx-auto mt-[-490px] bg-[url(/adv_long.jpg)] min-h-[500px] max-w-[1070px]">
        <div className="max-w-[370px] pt-[70px] pl-[60px] tracking-tighter text-white ">
          <h2 className="text-[25px] items-center p-0 flex flex-row pt-[25px]">
            <span>
              <img src="/apple_icon_white.png" className="w-[18px] h-[19px]" />
            </span>
            tv+
          </h2>
          <h3 className="text-[32px] font-medium mt-[10px] leading-8">
            Get 3 months of Apple TV+ free when you buy a Mac.***
          </h3>
          <div className="text-[#06c] flex flex-row items-center hover:cursor-pointer hover:underline  gap-x-8 mt-[15px]">
            <p>{`Try it free ^ >`}</p>
            <p>{`Learn more >`}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MacbookProductDetailMainContainer;
