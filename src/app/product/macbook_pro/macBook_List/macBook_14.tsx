"use client";

import { useEffect, useState } from "react";
import data from "./../../../data/macbook_14.json";
import { MacItem } from "@/app/data/mac_interface";
import SingleMacItem from "./single_Mac_Item";
import BoxItemContainer from "./boxItem";
interface BoxItemProps {
  isCarousel: boolean;
}
const MacBookList14Inch: React.FC<BoxItemProps>=({isCarousel})=> {
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
          className={`hover:cursor-pointer flex items-center justify-center border-2 border-double rounded-3xl pt-[6px] pb-[6px] pl-[18px] pr-[18px] text-[14px] font-medium ${
            specChoice == 1
              ? `bg-customSpecButtonBlack text-white outline outline-sky-700 outline-2`
              : `bg-customSpecButtonGrey text-black`
          }`}
        >
          M3
        </div>
        <div
          onClick={() => updateSpecChoice(2)}
          className={`hover:cursor-pointer flex items-center justify-center border-2 border-double rounded-3xl pt-[4px] pb-[4px] pl-[18px] pr-[18px] text-[14px] font-medium ${
            specChoice == 2
              ? `bg-customSpecButtonBlack text-white outline outline-sky-700 outline-2`
              : `bg-customSpecButtonGrey text-black`
          }`}
        >
          M3 Pro
        </div>
        <div
          onClick={() => updateSpecChoice(3)}
          className={`hover:cursor-pointer flex items-center justify-center border-2 border-double rounded-3xl pt-[4px] pb-[4px] pl-[18px] pr-[18px] text-[14px] font-medium ${
            specChoice == 3
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
              macChoice.map((item: MacItem, index: number) => {
                if (specChoice === 0) {
                  return <SingleMacItem macItem={item} key={index} />;
                } else {
                  if (item.type === specChoice) {
                    return <SingleMacItem macItem={item} key={index} />;
                  }
                }
              })}
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default MacBookList14Inch