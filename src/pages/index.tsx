import Head from "next/head";
import Carousel from "./components/Carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Init Dashboard</title>
        <meta name="description" content="Website for Init" />
      </Head>

      <main className="flex flex-col items-center justify-center bg-primary">
        <div className="grid grid-cols-1 space-x-0 md:grid-cols-2 md:space-x-5 lg:space-x-0">
          <div className="flex justify-center md:justify-start">
            <div className="max-w-md p-4 text-center md:text-left">
              <p className="pt-3 text-center text-4xl leading-tight md:text-left md:text-5xl lg:text-6xl">
                Empowering Tech talent in Miami and beyond 🚀
              </p>
              <p className="text-md pt-5 text-start lg:text-lg">
                INIT empowers underserved communities to launch careers in
                technology, closing the talent gap and helping individuals
                achieve economic mobility
              </p>
              <div className="flex flex-col justify-center gap-2 space-x-0 pt-10 md:flex-row md:space-x-5">
                <button
                  type="button"
                  className="rounded-lg  bg-yellow-300 px-6 py-3.5 text-center text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Join Now
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-discord_purple px-6 py-3.5 text-center text-base font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Discord
                </button>
              </div>
            </div>
          </div>
          <div className="mt-5 max-w-lg md:mt-0 lg:max-w-xl">
            <Carousel />
          </div>
        </div>

        <div>
          <section id="Programs" className="programs">
            <div className="container-3">
              <h1 className="centered-heading-3 margin-bottom-32px mt-10 flex justify-center text-3xl md:text-4xl lg:mt-20 xl:mt-40">
                🧠 Programs
              </h1>
              <div className="grid grid-cols-1 space-x-0 md:grid-cols-2 md:space-x-5 lg:space-x-0">
                <div className="flex justify-center md:justify-start">
                  <div className="max-w-xl p-4 text-center md:text-left">
                    <p className="text-md pt-5 text-left lg:text-lg">
                      INIT chapters carry out our signature experiential
                      learning and career development programs within their
                      communities. These programs attract thousands of
                      individuals annually, helping them gain technical skills,
                      work on projects, improve their resume, prepare for
                      interviews, connect with industry, and much more. &apos;
                      <a
                        href="https://2022.shellhacks.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-span-3 text-yellow-200"
                      >
                        ShellHacks
                      </a>
                      , hosted by our INIT FIU chapter, is the largest hackathon
                      in Florida and brings together 1,500 students to innovate
                      each year.
                    </p>
                  </div>
                </div>
                <Image
                  src="/assets/images/programs.png"
                  loading="lazy"
                  alt=""
                  width={300}
                  height={208}
                  className="mt-5 w-full"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
