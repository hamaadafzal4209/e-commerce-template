import OrderDetailPage from "@/pages/OrderDetailPage";
import ProtectedRoute from "@/pages/ProtectedRoute";

export default function OrderDetail() {
  return (
    <ProtectedRoute>
      <OrderDetailPage />
    </ProtectedRoute>
  );
}