import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-screen-2xl p-8">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
