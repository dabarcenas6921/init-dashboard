import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="m-auto p-8">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
