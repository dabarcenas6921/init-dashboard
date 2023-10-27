import Head from "next/head";
import Carousel from "~/components/Carousel";
import ThisWeekCard from "~/components/ThisWeekCard";
import Image from "next/image";
import Link from "next/link";

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
              <p className="pt-3 text-center text-4xl leading-tight md:text-left md:text-5xl md:leading-tight lg:text-6xl lg:leading-tight">
                Empowering tech talent in Miami and beyond 🚀
              </p>
              <p className="text-md pt-5 text-center md:text-left lg:text-lg">
                INIT empowers underserved communities to launch careers in
                technology, closing the talent gap and helping individuals
                achieve economic mobility
              </p>
              <div className="flex flex-col justify-start gap-2 pt-8 md:flex-row md:space-x-3">
                <button
                  type="button"
                  className="rounded-lg bg-yellow-300 px-6 py-3.5 text-center text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Join Now
                </button>
                <Link href="https://discord.gg/init">
                  <button
                    type="button"
                    className="flex w-full items-center justify-center rounded-lg bg-discord_purple px-6 py-3.5 text-base font-medium text-white focus:outline-none focus:ring-4 focus:ring-blue-300"
                  >
                    <div className="mr-2 h-6 w-6">
                      <svg
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 245 240"
                      >
                        <path
                          className="fill-current text-white"
                          d="M104.4 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1.1-6.1-4.5-11.1-10.2-11.1zM140.9 103.9c-5.7 0-10.2 5-10.2 11.1s4.6 11.1 10.2 11.1c5.7 0 10.2-5 10.2-11.1s-4.5-11.1-10.2-11.1z"
                        />
                        <path
                          className="fill-current text-white"
                          d="M189.5 20h-134C44.2 20 35 29.2 35 40.6v135.2c0 11.4 9.2 20.6 20.5 20.6h113.4l-5.3-18.5 12.8 11.9 12.1 11.2 21.5 19V40.6c0-11.4-9.2-20.6-20.5-20.6zm-38.6 130.6s-3.6-4.3-6.6-8.1c13.1-3.7 18.1-11.9 18.1-11.9-4.1 2.7-8 4.6-11.5 5.9-5 2.1-9.8 3.5-14.5 4.3-9.6 1.8-18.4 1.3-25.9-.1-5.7-1.1-10.6-2.7-14.7-4.3-2.3-.9-4.8-2-7.3-3.4-.3-.2-.6-.3-.9-.5-.2-.1-.3-.2-.4-.3-1.8-1-2.8-1.7-2.8-1.7s4.8 8 17.5 11.8c-3 3.8-6.7 8.3-6.7 8.3-22.1-.7-30.5-15.2-30.5-15.2 0-32.2 14.4-58.3 14.4-58.3 14.4-10.8 28.1-10.5 28.1-10.5l1 1.2c-18 5.2-26.3 13.1-26.3 13.1s2.2-1.2 5.9-2.9c10.7-4.7 19.2-6 22.7-6.3.6-.1 1.1-.2 1.7-.2 6.1-.8 13-1 20.2-.2 9.5 1.1 19.7 3.9 30.1 9.6 0 0-7.9-7.5-24.9-12.7l1.4-1.6s13.7-.3 28.1 10.5c0 0 14.4 26.1 14.4 58.3 0 0-8.5 14.5-30.6 15.2z"
                        />
                      </svg>
                    </div>
                    Join our Discord
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-5 max-w-lg md:mt-0 lg:max-w-xl">
            <Carousel />
          </div>
        </div>
        <div className="w-full max-w-6xl px-4">
          <ThisWeekCard />
        </div>
        <section>
          <h1 className="xl:mt-30 mt-10 flex justify-center text-3xl md:text-4xl lg:mt-10">
            🧠 Programs
          </h1>
          <div className="grid grid-cols-1 space-x-0 md:grid-cols-2 md:space-x-5 lg:space-x-0">
            <div className="flex justify-center md:justify-start">
              <div className="max-w-xl p-4 text-center md:text-left">
                <p className="text-md pt-5 text-left lg:text-lg">
                  INIT chapters carry out our signature experiential learning
                  and career development programs within their communities.
                  These programs attract thousands of individuals annually,
                  helping them gain technical skills, work on projects, improve
                  their resume, prepare for interviews, connect with industry,
                  and much more. &nbsp;
                  <a
                    href="https://shellhacks.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-span-3 text-yellow-200"
                  >
                    ShellHacks
                  </a>
                  , hosted by our INIT FIU chapter, is the largest hackathon in
                  Florida and brings together 1,500 students to innovate each
                  year.
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
        </section>
      </main>
    </>
  );
}
