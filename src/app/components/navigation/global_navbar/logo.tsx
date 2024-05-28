import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  logoType: string;
  enlarge : boolean;
}

const Logo: React.FC<LogoProps> = ({ logoType,enlarge }) => {
  return (
    <>
      <Link href="/">
        <img
          src={
            logoType === "icon"
              ? "/apple_icon.png"
              : logoType === "search"
              ? "/searchIcon.png"
              : logoType === "cart"
              ? "/cart_icon.png"
              : "/dropdown_icon.png"
          }
          alt="Logo"
          className={enlarge ? "w-5 h-5 aspect-square" : "w-3.5 h-4 aspect-square"}
        ></img>
      </Link>
    </>
  );
};

export default Logo;
