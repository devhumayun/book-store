import Sidebar from "@/components/Sidebar";

const StoreLayout = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row xl:flex-row min-h-screen 2xl:flex-row">
      <Sidebar />
      <div className="">{children}</div>
    </div>
  );
};

export default StoreLayout;

// flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row min-h-screen
