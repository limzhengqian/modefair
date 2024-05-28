"use client";

import { useEffect, useState } from "react";

const Footer = () => {
  const [openShop, updateOpenShop] = useState<boolean>(false);
  const [openWallet, updateOpenWallet] = useState<boolean>(false);
  const [openAccount, updateOpenAccount] = useState<boolean>(false);
  const [openEntertainment, updateOpenEntertainment] = useState<boolean>(false);
  const [openStore, updateOpenStore] = useState<boolean>(false);
  const [openBusiness, updateOpenBusiness] = useState<boolean>(false);
  const [openEdu, updateOpenEdu] = useState<boolean>(false);
  const [openHealth, updateOpenHealth] = useState<boolean>(false);
  const [openValue, updateOpenValue] = useState<boolean>(false);
  const [openAbout, updateOpenAbout] = useState<boolean>(false);
  const [minimize, setMinimize] = useState<boolean>(false);
  useEffect(() => {
    const updateScreenWidth = () => {
      if (window.innerWidth <= 820) {
        setMinimize(true);
      } else {
        setMinimize(false);
      }
    };
    window.addEventListener("resize", updateScreenWidth);
    updateScreenWidth();
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);
  return (
    <div className="w-full bg-customDarkGrey text-[12px] text-[#0000008F] flex flex-col ">
      <div className="flex flex-col  max-w-[980px] mx-auto px-[16px] sm:px-[0px] md:px-[0px] lg:px-[0px] xl:px-[0px]">
        <p className="mt-[8px]">
          * Monthly pricing is after purchase using credit card interest at 0%
          p.a. over a nine-month tenure. Monthly pricing is rounded to the
          nearest ringgit and displayed for each product added in the order.
          Exact pricing will be for the whole order and provided by your bank,
          subject to your bank’s terms and conditions.
        </p>
        <p className="mt-[8px]">
          ◊◊ Terms & Conditions of 0% interest for 6-, 12- and 24-month
          instalment payment plans
        </p>
        <p className="mt-[8px]">
          0% interest instalment payment plans are available to qualified
          Malaysia residents and provided by participating banks. To qualify for
          the 0% interest for 6-, 12- or 24-month instalment offers, your
          purchase minimum value must be MYR 2,000 or more in a single
          transaction. All purchases on 0% interest instalment plans are subject
          to approval by your credit card issuer. Refer to your credit card
          issuer’s website for conditions, fees and charges.
        </p>
        <p className="mt-[8px]">
          Instalment offers are only available to individual customers using
          consumer credit cards. Apple Employee EPP orders, Education Store
          orders, business purchases and institutional purchases are not
          eligible for this offer. Only Visa and Mastercard credit cards are
          eligible for this offer. If your instalment order is not approved by
          your credit card issuer, we will not be informed of the reason. Please
          contact your credit card issuer for further information. Purchases
          will be billed to your account upon order placement. Offer is
          available on advertised or ticketed price.
        </p>
        <p className="mt-[8px]">
          The information is current as of 24 May 2024.
        </p>
        <p className="mt-[8px]">
          ** Trade-in service is provided by Apple’s trade-in partners. Trade-in
          value quotes are estimated only and actual values may be lower than
          the estimation. Trade-in values vary based on the condition, year and
          model of your trade-in device. Not all devices are eligible for
          credit. You must be at least the age of majority to be eligible to
          trade in for credit. Trade-in value may be applied towards qualifying
          new device purchase. Actual value awarded is based on receipt of a
          qualifying device matching the description provided when the estimate
          was made. Apple’s trade-in partners reserve the right to refuse,
          cancel or limit quantity of any trade-in transaction for any reason.
          More details are available from Apple’s trade-in partner for trade-in
          and recycling of eligible devices. Restrictions and limitations may
          apply. For recycling eligible equipment Terms and restrictions may
          apply.
        </p>
        <ol className="list-decimal pl-[17px]">
          <li className="pb-[9px]">
            1GB = 1 billion bytes and 1TB = 1 trillion bytes; actual formatted
            capacity less.
          </li>
          <li className="pb-[9px]">
            The displays on the 14-inch and 16-inch MacBook Pro have rounded
            corners at the top. When measured as a standard rectangular shape,
            the screens are 14.2 inches and 16.2 inches diagonally (actual
            viewable area is less).
          </li>
          <li className="pb-[9px]">
            Testing conducted by Apple in September and October 2023 using
            pre-production 14-inch MacBook Pro systems with Apple M3 Pro,
            12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final Cut Pro
            10.6.9 tested using a 1-minute picture-in-picture project with
            multiple streams of Apple ProRes 422 video at 8192x4320 resolution
            and 30 frames per second, as well as a 1-minute picture-in-picture
            project with multiple streams of Apple ProRes 422 video at 3840x2160
            resolution and 29.97 frames per second. Performance tests are
            conducted using specific computer systems and reflect the
            approximate performance of MacBook Pro.
          </li>
          <li className="pb-[9px]">
            Testing conducted by Apple in September and October 2023 using
            pre-production 14-inch MacBook Pro systems with Apple M3 Max,
            16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final Cut Pro
            10.6.9 tested using a 1-minute picture-in-picture project with
            multiple streams of Apple ProRes 422 video at 8192x4320 resolution
            and 30 frames per second, as well as a 1-minute picture-in-picture
            project with multiple streams of Apple ProRes 422 video at 3840x2160
            resolution and 29.97 frames per second. Performance tests are
            conducted using specific computer systems and reflect the
            approximate performance of MacBook Pro.
          </li>
          <li className="pb-[9px]">
            Testing conducted by Apple in September and October 2023 using
            pre-production 16-inch MacBook Pro systems with Apple M3 Pro,
            12-core CPU, 18-core GPU, 36GB of RAM and 512GB SSD, and
            pre-production 14-inch MacBook Pro systems with Apple M3 Pro,
            12-core CPU, 18-core GPU, 18GB of RAM and 1TB SSD. 16-inch MacBook
            Pro systems tested with Apple 140W USB-C Power Adapter (Model
            A2452), and 14-inch MacBook Pro systems tested with Apple 96W USB-C
            Power Adapter (Model A2166), both with USB-C to MagSafe 3 Cable
            (Model A2363). Fast-charge testing conducted with drained MacBook
            Pro units. Charge time varies with settings and environmental
            factors; actual results will vary.
          </li>
          <li className="pb-[9px]">
            Testing conducted by Apple in September and October 2023 using
            pre-production 16-inch MacBook Pro systems with Apple M3 Pro,
            12-core CPU, 18-core GPU, 36GB of RAM and 4TB SSD. Final Cut Pro
            10.6.9 tested using a 1-minute picture-in-picture project with
            multiple streams of Apple ProRes 422 video at 8192x4320 resolution
            and 30 frames per second, as well as a 1-minute picture-in-picture
            project with multiple streams of Apple ProRes 422 video at 3840x2160
            resolution and 29.97 frames per second. Performance tests are
            conducted using specific computer systems and reflect the
            approximate performance of MacBook Pro.
          </li>
          <li className="pb-[9px]">
            Testing conducted by Apple in September and October 2023 using
            pre-production 16-inch MacBook Pro systems with Apple M3 Max,
            16-core CPU, 40-core GPU, 128GB of RAM and 8TB SSD. Final Cut Pro
            10.6.9 tested using a 1-minute picture-in-picture project with
            multiple streams of Apple ProRes 422 video at 8192x4320 resolution
            and 30 frames per second, as well as a 1-minute picture-in-picture
            project with multiple streams of Apple ProRes 422 video at 3840x2160
            resolution and 29.97 frames per second. Performance tests are
            conducted using specific computer systems and reflect the
            approximate performance of MacBook Pro.
          </li>
        </ol>
        <p className="mt-[8px]">
          *** Apple TV+ offer available to new and qualified returning
          subscribers only. RM 29.90/month after free trial. Only one offer per
          Apple ID and only one offer per family if you’re part of a Family
          Sharing group, regardless of the number of devices that you or your
          family purchase. This offer is not available if you or your Family
          have previously accepted an Apple TV+ three-months-free or
          one-year-free offer. Offer valid for three months after eligible
          device is activated. Plan automatically renews until cancelled.
          Restrictions and other terms apply.
        </p>
        <p className="mt-[8px]">
          ^ New subscribers only. RM 29.90/month after free trial. Plan
          automatically renews after trial until cancelled.
          <br /> We use your location to show you delivery options faster. We
          found your location using your IP address or because you entered it
          during a previous visit to Apple.
        </p>
        <div className="w-full border border-b-1 mt-[20px]"></div>
        <div className="flex flex-row pt-[17px] pb-[5px] text-[#000000B8] whitespace-nowrap flex-wrap">
          <img src="/apple_icon.png" className="w-[14px] h-[18px] mr-[11px] " />
          <p className="mr-[11px] py-[3px] pr-[4px]">{`>`}</p>
          <p className="mr-[11px] py-[3px] pr-[4px]">Mac</p>
          <p className="mr-[11px] py-[3px] pr-[4px]">{`>`}</p>
          <p className="mr-[11px] py-[3px] pr-[4px] inline">MacBook Pro</p>
          <p className="mr-[11px] py-[3px] pr-[4px]">{`>`}</p>
          <p className="mr-[11px] py-[3px] pr-[4px]">Buy MacBook Pro</p>
          <p className="mr-[11px] py-[3px] pr-[4px]">{`>`}</p>
          <p className="mr-[11px] py-[3px] pr-[4px]">Customise MacBook Pro</p>
        </div>
        <div className="flex flex-col sm:flex-row  w-full text-black leading-2">
          <div className="flex flex-col w-full w-[1/5]">
            {minimize && (
              <div className="w-full border border-b-1 my-[10px]"></div>
            )}

            <div className="flex flex-col">
              <div
                className="flex flex-row justify-between"
                onClick={() => updateOpenShop(!openShop)}
              >
                <h3 className="font-medium text-black mb-[7px]">
                  Shop and learn
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openShop && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openShop
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Store</p>
                <p className="mb-[9px]">Mac</p>
                <p className="mb-[9px]">iPad</p>
                <p className="mb-[9px]">iPhone</p>
                <p className="mb-[9px]">Watch</p>
                <p className="mb-[9px]">AirPods</p>
                <p className="mb-[9px]">TV & Home</p>
                <p className="mb-[9px]">AirTag</p>
                <p className="mb-[9px]">Accessories</p>
                <p className="mb-[9px]">Gift Cards</p>
              </div>
            </div>
            {minimize && (
              <div className="w-full border border-b-1 my-[10px]"></div>
            )}

            <div className="flex flex-col">
              <div
                className="flex flex-row justify-between"
                onClick={() => updateOpenWallet(!openWallet)}
              >
                <h3 className="font-medium text-black">Apple Wallet</h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openWallet && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openWallet
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Wallet</p>
                <p className="mb-[9px]">Apple Pay</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full w-[1/5]">
            {minimize && (
              <div className="w-full border border-b-1 border-stone-300 my-[10px]"></div>
            )}

            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenAccount(!openAccount)}
                  className="font-medium text-black"
                >
                  Account
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openAccount && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openAccount
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Manage Your Apple ID</p>
                <p className="mb-[9px]">Apple Store Account</p>
                <p className="mb-[9px]">iCloud.com</p>
              </div>
            </div>
            {minimize && (
              <div className="w-full border border-b-1 my-[10px]"></div>
            )}

            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenEntertainment(!openEntertainment)}
                  className="font-medium text-black"
                >
                  Entertainment
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openEntertainment && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openEntertainment
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Apple One</p>
                <p className="mb-[9px]">Apple TV+</p>
                <p className="mb-[9px]">Apple Music</p>
                <p className="mb-[9px]">Apple Arcade</p>
                <p className="mb-[9px]">Apple Fitness+</p>
                <p className="mb-[9px]">Apple Podcasts</p>
                <p className="mb-[9px]">Apple Books</p>
                <p className="mb-[9px]">Apple Store</p>
              </div>
            </div>
          </div>
          {minimize && (
            <div className="w-full border border-b-1 my-[10px]"></div>
          )}

          <div className="flex flex-col w-full w-[1/5]">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenStore(!openStore)}
                  className="font-medium text-black"
                >
                  Apple Store
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openStore && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openStore
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Apple Store App</p>
                <p className="mb-[9px]">Financing</p>
                <p className="mb-[9px]">Apple Trade In</p>
                <p className="mb-[9px]">Order Status</p>
                <p className="mb-[9px]">Shopping Help</p>
              </div>
            </div>
          </div>
          {minimize && (
            <div className="w-full border border-b-1 my-[10px]"></div>
          )}

          <div className="flex flex-col w-full w-[1/5]">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenBusiness(!openBusiness)}
                  className="font-medium text-black"
                >
                  For Business
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openBusiness && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openBusiness
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Apple and Business</p>
                <p className="mb-[9px]">Shop for Business</p>
              </div>
            </div>
            {minimize && (
              <div className="w-full border border-b-1 border-stone-300 my-[10px]"></div>
            )}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenEdu(!openEdu)}
                  className="font-medium text-black"
                >
                  For Education
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openEdu && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openEdu
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Apple and Education</p>
                <p className="mb-[9px]">Shop for University</p>
              </div>
            </div>
            {minimize && (
              <div className="w-full border border-b-1 my-[10px]"></div>
            )}

            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenHealth(!openHealth)}
                  className="font-medium text-black"
                >
                  For Healthcare
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openHealth && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openHealth
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Apple in Healthcare</p>
                <p className="mb-[9px]">Health on Apple Watch</p>
              </div>
            </div>
          </div>
          {minimize && (
            <div className="w-full border border-b-1 my-[10px]"></div>
          )}

          <div className="flex flex-col w-full w-[1/5]">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenValue(!openValue)}
                  className="font-medium text-black"
                >
                  Apple Values
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openValue && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openValue
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Accessibility</p>
                <p className="mb-[9px]">Education</p>
                <p className="mb-[9px]">Environment</p>
                <p className="mb-[9px]">Privacy</p>
                <p className="mb-[9px]">Supply Chain</p>
              </div>
            </div>
            {minimize && (
              <div className="w-full border border-b-1 border-stone-300 my-[10px]"></div>
            )}
            <div className="flex flex-col">
              <div className="flex flex-row justify-between">
                <h3
                  onClick={() => updateOpenAbout(!openAbout)}
                  className="font-medium text-black"
                >
                  About Apple
                </h3>
                <p className={`${!minimize ? ` hidden ` : "flex"}`}>
                  {openAbout && minimize ? `^` : `˅`}
                </p>
              </div>

              <div
                className={
                  minimize
                    ? `dropdown flex-col ${
                        openAbout
                          ? `flex  dropdown-enter`
                          : `hidden dropdown-leave`
                      }`
                    : `flex flex-col`
                }
              >
                <p className="mb-[9px]">Newsroom</p>
                <p className="mb-[9px]">Apple Leadership</p>
                <p className="mb-[9px]">Career Opportunities</p>
                <p className="mb-[9px]">Investors</p>
                <p className="mb-[9px]">Ethics & Compliance</p>
                <p className="mb-[9px]">Events</p>
                <p className="mb-[9px]">Contact Apple</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[30px]">
          More ways to shop:
          <span className="text-[#06c] hover:cursor-pointer hover:underline">
            Find a retailer
          </span>{" "}
          near you. Or call 1800-80-6419
        </div>
        <div className="w-full border border-b-1 my-[20px]"></div>
        <div className="flex flex-col sm:flex-row">
          <div className="mr-[30px]">
            Copyright © 2024 Apple Inc. All rights reserved.
          </div>
          <div className="flex flex-row whitespace-nowrap flex-wrap">
            <p className="px-[9px] ml-[-9px]">Privacy Policy</p>
            <p>|</p>
            <p className="px-[9px]"> Terms of Use</p>
            <p>|</p>
            <p className="px-[9px]"> Sales and Refunds</p>
            <p>|</p>
            <p className="px-[9px]"> Legal</p>
            <p>|</p>
            <p className="px-[9px]"> Site Map</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
