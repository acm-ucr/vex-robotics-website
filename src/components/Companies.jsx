import Polymaker from "../../public/svg/Polymaker.svg";
import Worthington from "../../public/svg/Worthington.svg";
import Image from "next/image";

const Companies = () => {
  return (
    <div className=" flex flex-col bg-[#1D2939] max-w-fit px-4 rounded-md items-center justify-center font-inter mb-14">
      <p className="text-vex-grey md:text-lg text-sm md:text-nowrap pt-6 text-center">
        Trusted by 4,000+ Companies
      </p>

      <div className="flex md:flex-row w-full justify-center flex-col place-items-center mx-4 m-2">
        <Image src={Polymaker} alt="Polymaker" className="max-w-auto p-5" />
        <Image src={Worthington} alt="Worthington" className="max-w-auto p-5" />
      </div>
    </div>
  );
};

export default Companies;
