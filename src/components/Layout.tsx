import type { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-full pl-8 pr-8">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
