import AboutUs from "@/components/about/AboutUs";
import Subteams from "@/components/about/Subteams";
import Header from "@/components/Header";
const AboutPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-10">
      <Header text="ABOUT US" />
      <AboutUs />
      <Subteams />
    </div>
  );
};

export default AboutPage;
