import Landing from "@/components/landing/Landing";
import Vex from "@/components/Vex";
import Sponsors from "@/components/home/Sponsors";
import Companies from "@/components/Companies";
import Image from "next/image";
import purpleBar from "@/public/assets/PurpleBar.svg";
const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <Landing />
      <Vex />
      <Sponsors />
      <Companies />
      <Image alt="bottom pattern" src={purpleBar} className="w-3/4" />
    </div>
  );
};
export default Home;
