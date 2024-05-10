import AboutUs from "@/components/about/AboutUs";
import Subteams from "@/components/about/Subteams";
import Image from "next/image";
import purpleBar from "@/public/assets/PurpleBar.svg";
const AboutPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <AboutUs />
      <Subteams />
      <Image src={purpleBar} alt="purple bar" className="w-3/4" />
    </div>
  );
};

export default AboutPage;
