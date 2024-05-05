import AboutUs from "@/components/about/AboutUs";
import Subteams from "@/components/about/Subteams";
const AboutPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <AboutUs />
      <Subteams />
    </div>
  );
};

export default AboutPage;
