import Head from "next/head";
import { api } from "~/utils/api";
import Carousel from "./components/Carousel";
import Image from "next/image";
import React, { useState, useEffect } from "react";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Init Dashboard</title>
        <meta name="description" content="Website for Init" />
      </Head>

      <main className="flex flex-col items-center justify-center bg-primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          <div className="lg: flex justify-center md:justify-start lg:justify-end">
            <div className="max-w-md p-4 text-center md:text-left lg:mr-10 xl:ml-80">
              <p className="pt-3 text-4xl leading-tight md:text-5xl lg:text-6xl">
                Empowering Tech talent in Miami and beyond 🚀
              </p>
              <p className="text-md pt-5 lg:text-lg">
                INIT empowers underserved communities to launch careers in
                technology, closing the talent gap and helping individuals
                achieve economic mobility
              </p>
              <div className="flex flex-row justify-center space-x-5 pt-10 md:justify-start lg:justify-start">
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
          <div className="mt-5 md:ml-10 md:mt-0 lg:mr-40 xl:mr-40">
            <Carousel />
          </div>
        </div>

        <div>
          <section id="Programs" className="programs">
            <div className="container-3">
              <h1 className="centered-heading-3 margin-bottom-32px mt-10 flex justify-center text-3xl md:text-4xl lg:mt-20 xl:mt-40">
                🧠 Programs
              </h1>
              <div className="hero-wrapper-2 flex flex-col items-center md:flex-row lg:ml-10 xl:ml-80">
                <p className="programs margin-bottom-16px p-4 text-center md:text-left lg:pl-20 xl:pl-0 xl:pr-20">
                  INIT chapters carry out our signature experiential learning
                  and career development programs within their communities.
                  These programs attract thousands of individuals annually,
                  helping them gain technical skills, work on projects, improve
                  their resume, prepare for interviews, connect with industry,
                  and much more. &apos;
                  <a
                    href="https://2022.shellhacks.net/"
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
                <Image
                  src="/assets/images/programs.png"
                  loading="lazy"
                  alt=""
                  width={300}
                  height={208}
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 43vw, 432.3984375px"
                  className="gallery-image shadow-two ml-8 mt-4 md:ml-0 md:mt-0 md:w-1/2 lg:pr-20 xl:pr-60"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
