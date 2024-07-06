import Boards from "@/components/board/Boards";
import Image from "next/image";
import purpleBar from "@/public/assets/PurpleBar.svg";
import Header from "@/components/Header";

const TeamPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10 overflow-x-hidden">
      <Header text="OUR TEAM" />
      {/* <p className="text-vex-purple-100 font-saira font-bold text-xl italic p-8">
        &ldquo;Statement About Team&rdquo;
      </p> */}
      <Boards />;
      <Image alt="bottom pattern" src={purpleBar} className="w-3/4" />
    </div>
  );
};

export default TeamPage;
