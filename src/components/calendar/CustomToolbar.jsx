import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const CustomToolbar = ({ onNavigate, date }) => {
  return (
    <div className="flex justify-center items-center w-full py-3 flex-col md:flex-row">
      <div className="flex items-center justify-center p-4 rounded-full b-gray-200 shadow-md mr-2">
        <AiOutlineArrowLeft
          onClick={() => {
            onNavigate("PREV");
          }}
          className="hover:cursor-pointer text-saf-brown text-4xl text-gray-500"
        />
      </div>

      <p className="m-0 bg-clip-text bg-saf-brown text-4xl px-3">
        {date.toLocaleString("default", { month: "short" })}{" "}
        {date.getFullYear()}
      </p>

      <div className="flex items-center justify-center p-4 rounded-full b-gray-200 shadow-md mr-2">
        <AiOutlineArrowRight
          onClick={() => onNavigate("NEXT")}
          className="hover:cursor-pointer text-saf-brown text-4xl text-gray-500"
        />
      </div>
    </div>
  );
};

export default CustomToolbar;
