import Head from "next/head";
import { api } from "~/utils/api";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Init Dashboard</title>
        <meta name="description" content="Website for Init" />
      </Head>

      {/* Navbar component */}
      {/* Main content of the Home component */}
      <main className="flex min-h-screen flex-col bg-primary">
        <Carousel />
      </main>
    </>
  );
}
