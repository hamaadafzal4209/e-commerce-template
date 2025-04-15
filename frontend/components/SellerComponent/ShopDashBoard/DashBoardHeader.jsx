import { Link } from "react-router-dom";
import { AiOutlineGift } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlineLocalOffer } from "react-icons/md";
import { FiPackage, FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { backend_url } from "../../../server";

function DashBoardHeader() {
  const { seller } = useSelector((state) => state.seller);
  return (
    <div className="sticky top-0 z-50 h-20 w-full bg-white shadow-sm">
      <div className="flex h-20 items-center justify-between px-4">
        {/* logo */}
        <div className="">
          <Link to="/">
            <img
              src="https://shopo.quomodothemes.website/assets/images/logo.svg"
              alt=""
            />
          </Link>
        </div>
        {/* dashboard navbar icons */}
        <div className="flex items-center gap-10">
          <Link to="/dashboard-coupouns" className="hidden md:block">
            <AiOutlineGift size={30} color="#555" />
          </Link>
          <Link to="/dashboard-events" className="hidden md:block">
            <MdOutlineLocalOffer size={30} color="#555" />
          </Link>
          <Link to="/dashboard-products" className="hidden md:block">
            <FiShoppingBag size={30} color="#555" />
          </Link>
          <Link to="/dashboard-orders" className="hidden md:block">
            <FiPackage size={30} color="#555" />
          </Link>
          <Link to="/dashboard-messages" className="hidden md:block">
            <BiMessageSquareDetail size={30} color="#555" />
          </Link>
          <Link to={`/shop/${seller._id}`}>
            <img
              src={`${backend_url}/${seller.avatar}`}
              className="h-10 w-10 rounded-full object-cover object-top"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DashBoardHeader;
