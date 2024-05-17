import Boards from "@/components/board/Boards";
import Image from "next/image";
import purpleBar from "@/public/assets/PurpleBar.svg";
import Header from "@/components/Header";

const TeamPage = () => {
  return (
    <>
      <Header text="OUR TEAM" />
      <Boards />;
      <Image alt="bottom pattern" src={purpleBar} className="w-3/4" />
    </>
  );
};

export default TeamPage;
