import React from "react";
import RightPattern from "@/public/assets/RightPattern.svg";
import Logo from "../../public/assets/logo.webp";
import BottomPattern from "../../public/assets/BottomPattern.svg";
import LeftPattern from "../../public/assets/LeftPattern.svg";
import Image from "next/image";
import Link from "next/link";
import { ICONS } from "../data/footer";

const Footer = () => {
  return (
    <div className="bg-vex-black w-full">
      <div className="flex justify-between flex-row mt-10">
        <div className="ml-10 w-1/4">
          <Image src={LeftPattern} alt="left-pattern" />
        </div>
        <div className="w-1/4">
          <div className="bg-vex-purple-400 grid justify-items-center grid-rows-2 justify-center pt-10 rounded-lg">
            <div className="w-11 md:w-24">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="flex flex-row justify-center w-3 md:w-9 gap-x-2 md:gap-x-8">
              {ICONS.map((icon, index) => {
                return (
                  <Link
                    key={index}
                    href={icon.link}
                    target="_blank"
                    className="hover:scale-110 duration-300 md:text-5xl sm:text-2xl text-lg text-white"
                  >
                    {icon.logo}
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row justify-between mx-10">
            <div className="w-1/4">
              <Image src={BottomPattern} alt="bottom-pattern" />
            </div>
            <div className="w-1/4">
              <Image src={BottomPattern} alt="bottom-pattern" />
            </div>
          </div>
        </div>
        <div className="mr-10 w-1/4">
          <Image src={RightPattern} alt="right-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
