import Link from "next/link";

export default function LearnMoreNavbar() {
  return (
    <>
      <div className=" bg-customDarkGrey flex justify-center w-full border-t-2">
        <nav className="bg-customDarkGrey h-[72px] md:h-[52px] lg:h-[52px] xl:h-[52px] flex justify-between py-[12px] items-center ">
          <div className="flex ml-10 mr-10 text-center">
            <p className="text-sm ">
              Pay 0% interest for up to 24 months. Terms apply.◊◊{" "}
              <Link href="#" className="text-sky-600  hover:underline text-sm">
                {" "}
                Learn More
              </Link>{" "}
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}
