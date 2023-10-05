import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <div className="font-poppins">
      <Component {...pageProps} />
    </div>
  );
};

export default api.withTRPC(MyApp);
