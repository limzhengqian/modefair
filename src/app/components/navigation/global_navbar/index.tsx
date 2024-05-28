"use client";
import Link from "next/link";
import Logo from "./logo";
import { useEffect, useState } from "react";

export default function GlobalNavbar() {
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
    <>
      {!minimize ? (
        <nav className="bg-customGrey h-11 mx-auto flex justify-center items-center">
          <ul className="flex text-black text-[12px] lg:gap-x-10 sm:gap-x-4 md:gap-x-6 ml-1">
            <li>
              <Logo logoType="icon" enlarge={false} />
            </li>
            <li>
              <Link href="#">
                <p>Store</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Mac</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>iPad</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>iPhone</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Watch</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>AirPods</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>TV & Home</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Entertainment</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Accessories</p>
              </Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Logo logoType="search" enlarge={false} />
            </li>
            <li>
              <Logo logoType="cart" enlarge={false} />
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="bg-customGrey h-11 mx-auto flex justify-between items-center mr-2">
          <div className="ml-3">
            <Logo logoType="icon" enlarge={true} />
          </div>
          <div className="flex gap-x-7">
            <Logo logoType="search" enlarge={true} />
            <Logo logoType="cart" enlarge={true} />
            <Logo logoType="dropdown" enlarge={true} />
          </div>
        </nav>
      )}
    </>
  );
}
