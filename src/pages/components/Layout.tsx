import type { PropsWithChildren } from "react";
import Navbar from "./Navbar";
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-full p-8">
      <Navbar />
      {children}
    </div>
  );
};
export default Layout;
