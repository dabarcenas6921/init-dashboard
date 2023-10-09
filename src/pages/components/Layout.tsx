import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-full pl-8 pr-8">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
