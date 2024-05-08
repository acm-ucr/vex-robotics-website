import Landing from "@/components/landing/Landing";
import Vex from "@/components/Vex";
import Sponsors from "@/components/home/Sponsors";
import Companies from "@/components/Companies";
import Subteams from "@/components/about/Subteams";
const Home = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <Landing />
      <Vex />
      <Subteams />
      <Sponsors />
      <Companies />
    </div>
  );
};
export default Home;
