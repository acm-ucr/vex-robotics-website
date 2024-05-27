import "./index.css";

const Header = ({ label }) => {
  return (
    <div className="pt-2 h-12 font-medium md:text-2xl text-xs bg-saf-red border-t-2 border-gray-500">
      {label}
    </div>
  );
};

export default Header;
