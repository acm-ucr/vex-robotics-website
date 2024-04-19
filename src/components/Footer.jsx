import React from "react";
import RightPattern from "@/public/assets/RightPattern.svg";
import Logo from "../../public/assets/logo.webp";
import InstagramLogo from "../../public/assets/InstagramLogo.svg";
import DiscordLogo from "../../public/assets/DiscordLogo.svg";
import EmailLogo from "../../public/assets/EmailLogo.svg";
import LinkedInLogo from "../../public/assets/LinkedInLogo.svg";
import BottomPattern from "../../public/assets/BottomPattern.svg";
import LeftPattern from "../../public/assets/LeftPattern.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-vex-black w-screen">
      <div className="flex justify-between flex-row">
        <div className="mx-10 w-1/4">
          <Image src={LeftPattern} alt="left-pattern" />
        </div>
        <div className="w-1/4">
          <div className="bg-vex-purple-400 grid justify-items-center grid-rows-2 justify-center pt-10 rounded-lg">
            <div className="w-1/3">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="flex flex-row gap-x-8">
              <Image src={InstagramLogo} alt="instagram-logo" />
              <Image src={DiscordLogo} alt="discord-logo" />
              <Image src={EmailLogo} alt="email-logo" />
              <Image src={LinkedInLogo} alt="linkedin-logo" />
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
        <div className="mx-10 w-1/4">
          <Image src={RightPattern} alt="right-pattern" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
