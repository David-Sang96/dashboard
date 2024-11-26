import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section>
      <Navbar />
      <div className="flex">
        <aside className="min-h-screen w-[300px] max-md:hidden">
          <Sidebar />
        </aside>
        <section className="w-full p-5 md:max-w-[1140px]">{children}</section>
      </div>
    </section>
  );
};

export default MainLayout;
