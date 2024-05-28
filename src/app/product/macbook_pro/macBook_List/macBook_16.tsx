"use client";

import { useEffect, useState } from "react";
import data from "./../../../data/macbook_16.json";
import { MacItem, MacItem16 } from "@/app/data/mac_interface";
import SingleMacItem from "./single_Mac_Item";
import BoxItemContainer from "./boxItem";
import SingleMacItem16 from "./single_Mac_Item_16";
interface BoxItemProps {
  isCarousel: boolean;
}
const MacBookList16Inch: React.FC<BoxItemProps>=({isCarousel})=> {
  const [specChoice, updateSpecChoice] = useState<number>(0);
  const [macChoice, updateMacChoice] = useState<any>([]);

  useEffect(() => {
    updateMacChoice([...data]);
  }, []);


  
  return (
    <div className={`m-5 flex flex-col text-center w-full fade-in`}>
      <p className="text-sm">Filter by chip:</p>
      <div className="flex flex-row justify-center gap-x-2 text-center mt-4">
        <div
          onClick={() => updateSpecChoice(0)}
          className={`hover:cursor-pointer flex items-center justify-center border-2 border-double rounded-3xl pt-[4px] pb-[4px] pl-[18px] pr-[18px] text-[14px] font-medium ${
            specChoice == 0
              ? `bg-customSpecButtonBlack text-white outline outline-sky-700 outline-2`
              : `bg-customSpecButtonGrey text-black`
          }`}
        >
          All
        </div>
        <div
          onClick={() => updateSpecChoice(1)}
          className={`hover:cursor-pointer flex items-center justify-center border-2 border-double rounded-3xl pt-[4px] pb-[4px] pl-[18px] pr-[18px] text-[14px] font-medium ${
            specChoice == 1
              ? `bg-customSpecButtonBlack text-white outline outline-sky-700 outline-2`
              : `bg-customSpecButtonGrey text-black`
          }`}
        >
          M3 Pro
        </div>
        <div
          onClick={() => updateSpecChoice(2)}
          className={`hover:cursor-pointer flex items-center justify-center border-2 border-double rounded-3xl pt-[4px] pb-[4px] pl-[18px] pr-[18px] text-[14px] font-medium ${
            specChoice == 2
              ? `bg-customSpecButtonBlack text-white outline outline-sky-700 outline-2`
              : `bg-customSpecButtonGrey text-black`
          }`}
        >
          M3 Max
        </div>
      </div>
      <div className="flex mt-10 m-auto ">
        <div className="shrink-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2  gap-5">
            {macChoice &&
              macChoice.map((item: MacItem16, index: number) => {
                if (specChoice === 0) {
                  return <SingleMacItem16
                   macItem={item} key={index} />;
                } else {
                  if (item.type === specChoice) {
                    return <SingleMacItem16 macItem={item} key={index} />;
                  }
                }
              })}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MacBookList16Inch