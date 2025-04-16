import DashAllRefundOrders from "../../components/SellerComponent/ShopDashBoard/DashAllRefundOrders";
import DashBoardHeader from "../../components/SellerComponent/ShopDashBoard/DashBoardHeader";
import DashSidebar from "../../components/SellerComponent/ShopDashBoard/DashSidebar";

const DashAllRefunds = () => {
  return (
    <div>
      <DashBoardHeader />
      <div className="flex">
        <div>
          <DashSidebar active={10} />
        </div>
        <div className="w-full max-w-[950px] flex-1">
          <DashAllRefundOrders />
        </div>
      </div>
    </div>
  );
};

export default DashAllRefunds;