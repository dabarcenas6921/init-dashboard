import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Init Dashboard</title>
        <meta name="description" content="Website for Init" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-primary flex min-h-screen flex-col items-center justify-center"></main>
    </>
  );
}
