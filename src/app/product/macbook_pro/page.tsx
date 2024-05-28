"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import MacBookList14Inch from "./macBook_List/macBook_14";
import MacBookList16Inch from "./macBook_List/macBook_16";
import BoxItemContainer from "./macBook_List/boxItem";
import ConsiderItemContainer from "./macBook_List/considerItem";

export default function ProductSelectionPageMacBook() {
  const [inch14Seletion, updateInchSelection] = useState<boolean>(true);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [carousel, setCarousel] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const stickyElement = document.getElementById("sticky-header");
      if (stickyElement) {
        const offset = stickyElement.getBoundingClientRect().top;
        setIsSticky(offset <= 0);
      }
    };

    const updateScreenWidth = () => {
      if (window.innerWidth <= 736) {
        setCarousel(true);
      } else {
        setCarousel(false);
      }
    };
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScreenWidth);
    };
  }, []);

  useEffect(() => {}, []);
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h1 className="font-medium font-sans tracking-tight text-3xl sm:text-3xl md:text-5xl lg:text-5xl mt-12 mb-8 ml-12 mr-12 text-center">
        Choose your new MacBook Pro.
      </h1>
      <img
        src="/chat_icon.png"
        alt="chat_icon"
        className="w-8 h-7 mb-2 ml-12 mr-12 "
      />
      <h3 className="text-lg sm:text-lg md:text-xl ml-12 mr-12 tracking-tight">
        Have questions about buying a Mac?
      </h3>
      <h3 className="text-[#06c]  hover:underline text-lg sm:text-lg md:text-xl ml-12 mr-12 tracking-tight">
        Chat with a Mac Specialist
      </h3>
      <div
        id="sticky-header"
        className={`flex flex-row mt-6 p-5 justify-center w-full gap-x-3 lg:gap-x-0 sticky top-0 z-10 ${
          isSticky && `bg-customStickyGrey bg-opacity-95`
        }`}
      >
        <div
          onClick={() => updateInchSelection(true)}
          className={`hover:cursor-pointer pt-7 pb-7 pl-[60px] pr-[60px] md::pl-10 md:pr-10 lg:pl-10 lg:pr-10 border-2 rounded-l-xl font-medium ${
            inch14Seletion && `border-sky-700`
          } `}
        >
          14-inch
        </div>
        <div
          onClick={() => updateInchSelection(false)}
          className={`hover:cursor-pointer pt-7 pb-7 pl-[60px] pr-[60px] md::pl-10 md:pr-10 lg:pl-10 lg:pr-10  border-2 rounded-r-xl font-medium ${
            !inch14Seletion && `border-sky-700`
          }`}
        >
          16-inch
        </div>
      </div>
      {inch14Seletion ? (
        <MacBookList14Inch isCarousel={carousel} />
      ) : (
        <MacBookList16Inch isCarousel={carousel} />
      )}
      <div className={`m-5 flex flex-col text-center font-sans w-full`}>
        <h2
          className={`${
            carousel ? `text-[28px]` : `text-[40px]`
          } font-medium tracking-tight	`}
        >
          What's in the Box
        </h2>
        <BoxItemContainer isCarousel={carousel} specChoice={inch14Seletion} />
      </div>
      <ConsiderItemContainer
        specChoice={inch14Seletion}
        isCarousel={carousel}
      />
      <div className="w-full mt-4 bg-customStickyGrey flex flex-col items-center">
        <h2 className="text-[36px] font-semibold mt-16 tracking-tight">
          Compare Mac models
        </h2>
        <div className="flex flex-row items-center gap-x-1 hover:cursor-pointer hover:underline text-[#06c] mt-3">
          <p className="text-[15px]">Choose the best Mac for you</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-3"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </div>
        <img
          src="/mac_compare.png"
          className={`pb-[92px] ${
            !carousel ? `w-[960px] h-[355px]` : `w-[320px] h-[199px]`
          }`}
        />
      </div>
      <div className="p-[80px] w-[376px] md:w-[980px] sm:w-[980px] lg:w-[980px] xl:w-[980px]  flex justify-center flex flex-col items-center">
        <img src="/apple_care.jpg" className="w-[91px] pb-[60px]" />
        <h2 className="font-medium tracking-tight text-[24px] sm:text-[32px] md:text-[32px] lg:text-[32px] xl:text-[32px] mb-2">
          AppleCare+ for Mac
        </h2>

        <p className="">
          Every Mac comes with a{" "}
          <span className="text-[#06c] hover:cursor-pointer hover:underline">
            one-year limited warranty
          </span>{" "}
          and up to 90 days of{" "}
          <span className="text-[#06c] hover:cursor-pointer hover:underline">
            complimentary technical support
          </span>
          . AppleCare+ for Mac extends your coverage to three years from your
          AppleCare+ purchase date and adds unlimited incidents of accidental
          damage protection, each subject to a service fee of RM 469 for screen
          damage or external enclosure damage, or RM 1,429 for other accidental
          damage. In addition, you‘ll get 24/7 priority access to Apple experts
          by chat or phone through{" "}
          <span className="text-[#06c] hover:cursor-pointer hover:underline">
            getsupport.apple.com
          </span>
          . For complete details, see the{" "}
          <span className="text-[#06c] hover:cursor-pointer hover:underline">
            terms
          </span>
          .
        </p>
        <p className="text-[#06c] hover:cursor-pointer hover:underline mt-13">{`Learn more about AppleCare+ >`}</p>
      </div>
    </div>
  );
}
