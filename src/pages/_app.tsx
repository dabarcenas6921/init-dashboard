import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import Layout from "../components/Layout";
import { useEffect } from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  useEffect(() => {
    require("preline");
  }, []);

  return (
    <div className="bg-primary text-white">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default api.withTRPC(MyApp);
