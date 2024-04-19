import Polymaker from "../../public/svg/Polymaker.svg";
import Worthington from "../../public/svg/Worthington.svg";

const Companies = () => {
  return (
    <div className=" flex flex-col bg-[#1D2939] w-full px-4 rounded-md">
      <p className="text-white text-xl text-nowrap ">
        {" "}
        Trusted by 4,000+ Companies{" "}
      </p>

      <div className="flex flex-row w-full">
        <Polymaker />

        <Worthington />
      </div>
    </div>
  );
};

export default Companies;
