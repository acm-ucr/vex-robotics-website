"use client";
import logo from "@/public/assets/logo.webp";
import Link from "next/link";
import { items } from "@/data/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathname = usePathname();

  return (
    <div className="md:pl-0 pl-2 mr-5 h-8 md:min-h-[12vh] min-h-[9vh] bg-vex-black bg-opacity-80 w-full flex md:justify-between items-center font-righteous text-[10px] md:text-lg 2xl:text-2xl">
      <Link
        className="md:mr-0  hover:opacity-60 duration-300 md:w-2/5 w-1/5 h-auto 2xl:w-1/4"
        href="/"
      >
        <Image
          alt="logo"
          src={logo}
          className="md:ml-24 md:max-w-[15%] ml-4 max-w-[70%] pb bg-red-20"
        />
      </Link>
      <div className="md:pl-0 pl-4 pr-7 items-center flex flex-row whitespace-nowrap gap-4 sm:w-3/5 w-full justify-around">
        {items.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={`hover:text-vex-grey duration-300 border-dashed ${
              pathname === item.link
                ? "border-b-2 border-vex-white text-vex-white"
                : "text-vex-white"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Navigation;
