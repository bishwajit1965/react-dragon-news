import Logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <>
      <div className="flex justify-center py-6">
        <div className="text-center lg:space-y-3">
          <img src={Logo} alt="" className="" />
          <h3 className="text-xl">Journalism Without Fear or Favour</h3>
          <h3 className="text-xl">
            {moment().format("MMMM Do YYYY, h:mm:ss a")}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Header;
