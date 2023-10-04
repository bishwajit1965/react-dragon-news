import { FaCalendar } from "react-icons/fa";
import SportsOne from "../../../assets/1.png";
import SportsThree from "../../../assets/3.png";
import SportsTwo from "../../../assets/2.png";
import moment from "moment";

const Sports = () => {
  return (
    <div className="my-6 p-2 space-y-4">
      <div className="mb-6">
        <img src={SportsOne} alt="" className="mb-2" />
        <h2 className="font-bold mb-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex items-center space-x-4">
          <span className="font-bold">Sports</span>
          <span>
            <FaCalendar />
          </span>
          <span>{moment().format("MMM Do YY")}</span>
        </div>
      </div>
      <div className="mb-6">
        <img src={SportsTwo} alt="" className="mb-2" />
        <h2 className="font-bold mb-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex items-center space-x-4">
          <span className="font-bold">Sports</span>
          <span>
            <FaCalendar />
          </span>
          <span>{moment().format("MMM Do YY")}</span>
        </div>
      </div>
      <div className="mb-6">
        <img src={SportsThree} alt="" className="mb-2" />
        <h2 className="font-bold mb-2">
          Bayern Slams Authorities Over Flight Delay to Club World Cup
        </h2>
        <div className="flex items-center space-x-4">
          <span className="font-bold">Sports</span>
          <span>
            <FaCalendar />
          </span>
          <span>{moment().format("MMM Do YY")}</span>
        </div>
      </div>
    </div>
  );
};

export default Sports;
