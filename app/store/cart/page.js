import OrderDetails from "@/components/cart/OrderDetails";
import Payment from "@/components/cart/Payment";

const CartPage = () => {
  return (
    <div className="p-2 flex flex-col w-full justify-center">
      <div className="flex justify-center items-center gap-10 flex-col xl:flex-row 2xl:flex-row w-full">
        <OrderDetails />
        <Payment />
      </div>
    </div>
  );
};

export default CartPage;
