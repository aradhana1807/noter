import { Navbar } from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full dark:bg-[#1f1f1f]">
      <main className="h-full pt-[100px]">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default MarketingLayout;
