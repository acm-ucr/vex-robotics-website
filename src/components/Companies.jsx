import Polymaker from "../../public/svg/Polymaker.svg";
import Worthington from "../../public/svg/Worthington.svg";
import Image from "next/image";

const Companies = () => {
  return (
    <div className=" flex flex-col bg-[#1D2939] w-full px-4 rounded-md items-center font-inter">
      <p className="text-white text-xl text-nowrap my-5 ">
        Trusted by 4,000+ Companies
      </p>

      <div className="flex flex-row w-full justify-center">
        <Image src={Polymaker} className="w-full  mx-10 my-5 " />
        <Image src={Worthington} className="w-full  mx-10" />
      </div>
    </div>
  );
};

export default Companies;
