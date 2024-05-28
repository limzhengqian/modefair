"use client";
import { MacItem16 } from "@/app/data/mac_interface";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface PropsInterface {
  macItem: MacItem16;
}
const SingleMacItem16: React.FC<PropsInterface> = ({ macItem }) => {
  const router = useRouter()
  const [colorChoice, updateColorChoice] = useState<number>(0);
  function handleRedirect(){
    router.push(`/product/macbook_pro/macbook_detail/16-inch-${macItem.color.choice[colorChoice]}/${macItem.id}`)
  }
  const formatWithTwoDecimals = (num: number | undefined): string => {
    if (typeof num === "number")
      return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return "";
  };

  return (
    <div className="font-sans text-left bg-customDarkGrey border-0 rounded-2xl w-[310px] p-4">
      <img
        src={`/${macItem.color.choice[colorChoice]
          .toLowerCase()
          .replace(" ", "_")}_mac.png`}
        className="w-[280px] h-[170px]  m-auto" 
      />
      <div className="flex flex-col justify-start  mt-10">
        {colorChoice == 0 ? (
          <p className="text-sm">{macItem.color.choice[0]}</p>
        ) : (
          <p className="text-sm">{macItem.color.choice[1]}</p>
        )}
        <div className="flex mt-3">
          <div
            onClick={() => updateColorChoice(0)}
            className={`mr-4 border outline-double outline-offset-2 ${
              macItem.color.choice[0] === "Space Grey"
                ? `bg-customGreyBall`
                : `bg-customBlackBall`
            } rounded-full w-6 h-6 ${
              colorChoice == 0 ? `outline-sky-700` : `outline-transparent`
            }`}
          ></div>
          <div
            onClick={() => updateColorChoice(1)}
            className={`border outline-double outline-offset-2 bg-customSilverBall rounded-full w-6 h-6 ${
              colorChoice == 1 ? `outline-sky-700` : `outline-transparent`
            }`}
          ></div>
        </div>
        <div>
          <img
            src={
              macItem.type === 1
                ? "/M3Pro.png"
                : "/M3Max.png"
            }
            className="w-12 h-12 mt-5 mb-3"
          />
        </div>
        <div className="text-xl sm:text-xl md:text-2xl lg:text-2xl  font-medium leading-6">
          <h2>{macItem.CPU}</h2>
          <h2>{macItem.GPU}</h2>
          <h2>{macItem.memory.choice[macItem.memory.result].type}</h2>
          <h2>{macItem.storage.choice[macItem.memory.result].type}</h2>
        </div>
        <div className="text-sm  leading-6 mt-4">
          <p>{macItem.display}</p>
          <p>{macItem.ports}</p>
          <p>{macItem.keyboard_title}</p>
          <p>{macItem.trackpad}</p>
          <p>{macItem.adapter}</p>
        </div>
        <div className="pt-5">
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  font-medium ">
            RM {formatWithTwoDecimals(macItem.price)}
          </h2>
          <p className="pt-2 pb-2 text-sm">or</p>
          <h2 className="text-xl sm:text-xl md:text-2xl lg:text-2xl  font-medium md:max-w-52 lg:max-w-52">
          RM {formatWithTwoDecimals(macItem.price_div)}/mo. for 24 mo.*
          </h2>
          <p className="inline-flex items-center text-sm text-[#06c] hover:cursor-pointer hover:underline">
            {`Explore monthly instalment options > `}
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
        <div className="text-sm mt-5 ">
          <h3 className="font-medium">Add a trade-in</h3>
          <p>
            Get credit towards a new Mac when you trade in your eligible
            computer. Or recycle it for free.**
          </p>
          <p className="inline-flex items-center text-sm text-[#06c] hover:cursor-pointer hover:underline">
            {`Get started `}
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
        <button className="mt-6 w-full bg-customButtonColor h-9 text-white text-sm border-0 rounded-md" onClick={handleRedirect}>
          Select
        </button>
        <div className="text-sm mt-5 max-w-60">
          <h3 className="font-medium">Need a moment?</h3>
          <p>
            Keep all your selections by saving this device to Your Saves, then
            come back anytime and pick up right where you left off.
          </p>
          <p className="inline-flex items-center text-sm align-middle items-center text-[#06c] hover:cursor-pointer hover:underline mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
              />
            </svg>
            {`Save for later `}
          </p>
        </div>
        <div className="flex mt-10">
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
    </div>
  );
};

export default SingleMacItem16;
