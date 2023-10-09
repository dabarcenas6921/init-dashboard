import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Init Dashboard</title>
        <meta name="description" content="Website for Init" />
      </Head>

      {/* Main content of the Home component */}
      <main className="flex min-h-screen flex-col bg-primary"></main>
    </>
  );
}
