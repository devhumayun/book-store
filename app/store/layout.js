import Sidebar from "@/components/Sidebar";
import StoreProvider from "@/provider";

const StoreLayout = ({ children }) => {
  return (
    <StoreProvider>
      <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
        <Sidebar />
        <div className="flex flex-wrap justify-center w-full">{children}</div>
      </div>
    </StoreProvider>
  );
};

export default StoreLayout;
