import Landing from "@/components/landing/Landing";
import Vex from "@/components/Vex";
import Sponsors from "@/components/home/Sponsors";
import Companies from "@/components/Companies";
const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <Landing />
      <Vex />
      <Sponsors />
      <Companies />
    </div>
  );
};
export default Home;
