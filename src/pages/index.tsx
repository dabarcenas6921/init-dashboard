import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import Navbar from "./components/navbar";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Init Dashboard</title>
        <meta name="description" content="Website for Init" />
      </Head>
      <main className="flex min-h-screen flex-col bg-primary">
        <Navbar />
      </main>
    </>
  );
}
