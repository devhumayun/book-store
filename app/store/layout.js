import Sidebar from "@/components/Sidebar";

const StoreLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row 2xl:flex-row">
      <Sidebar />
      <div className="flex flex-wrap justify-center w-full">{children}</div>
    </div>
  );
};

export default StoreLayout;

// flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row min-h-screen
