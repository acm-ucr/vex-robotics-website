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
      <div className="flex justify-center flex-row mt-10">
        <div className="md:mx-10 w-1/4 md:block hidden">
          <Image src={LeftPattern} alt="left-pattern" />
        </div>
        <div className="md:w-1/5 w-4/5">
          <div className="bg-vex-purple-400 grid justify-items-center md:grid-rows-2 justify-center rounded-lg items-center p-3">
            <div className="w-1/2">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="flex flex-row justify-around w-full">
              {ICONS.map((icon, index) => {
                return (
                  <Link
                    key={index}
                    href={icon.link}
                    target="_blank"
                    className="hover:scale-110 duration-300 md:text-5xl text-5xl text-white"
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
        <div className="md:mx-10 w-1/4 md:block hidden">
          <Image src={RightPattern} alt="right-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
