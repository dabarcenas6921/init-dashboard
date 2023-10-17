import Head from "next/head";
import { api } from "~/utils/api";
import Carousel from "./components/Carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const [viewportSize, setViewportSize] = useState({ width: 0, height: 0 });
  const [maxY, setMaxY] = useState(0);

  const squareSize = 60; // The size of the square, adjust as necessary

  useEffect(() => {
    const updateDimensions = () => {
      setViewportSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setMaxY(window.innerHeight - squareSize);
    };

    updateDimensions(); // Call once on mount

    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const maxX = viewportSize.width - squareSize;

  const squareAnimations = {
    loop: {
      x: [0, maxX, maxX, 0, 0],
      y: [0, 0, maxY, maxY, 0],
      rotate: [0, 90, 180, 270, 360],
      transition: {
        duration: 20, // Adjust as needed
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <>
      <Head>
        <title>Init Dashboard</title>
        <meta name="description" content="Website for Init" />
      </Head>

      {/* Navbar component */}
      {/* Main content of the Home component */}
      <main className="flex min-h-screen flex-col bg-primary">
        <div className="hero-wrapper-2 flex flex-col items-center justify-center sm:flex-row sm:items-start sm:pt-10 md:flex-row">
          <div className="pr-0 text-center sm:pr-40 sm:text-left">
            <h1 className="pb-30 text-9xl">INIT</h1>
            <p className="pt-10 text-3xl">
              South Florida&apos;s Largest <br />
              Tech Community
            </p>
            <div className="flex flex-row space-x-5 pl-10 pt-10 sm:pl-0">
              <button
                type="button"
                className="rounded-lg  bg-yellow-300 px-6 py-3.5 text-center text-base font-medium text-black hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Join Now
              </button>
              <button
                type="button"
                className="rounded-lg bg-yellow-300 px-6 py-3.5 text-center text-base font-medium text-black hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Extra large
              </button>
            </div>
          </div>
          <div className="mt-10 sm:mt-0">
            <Carousel />
          </div>
        </div>

        <div>
          <section id="Programs" className="programs">
            <div className="container-3">
              <h1 className="centered-heading-3 margin-bottom-32px flex justify-center pt-60 text-4xl">
                🧠 Programs
              </h1>
              <div className="hero-wrapper-2 flex flex-col justify-center sm:flex-row sm:items-center sm:pt-10 md:flex-row">
                <p className="programs margin-bottom-16px text-left md:p-0 lg:pl-80 lg:pr-10">
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
                  width={432}
                  height={300}
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 43vw, 432.3984375px"
                  className="gallery-image shadow-two flex lg:pr-60"
                  style={{
                    width: "40%", // Default width
                    marginTop: "20px", // Add top margin to create space
                  }}
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <div style={{ position: "relative", minHeight: "50vh" }}>
        <motion.div
          style={{
            width: `${squareSize}px`,
            height: `${squareSize}px`,
            backgroundImage: 'url("/assets/images/floatingsquare.png")', // Replace with the path to your image
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "fixed",
            top: 0,
            right: 0,
            left: 0,
          }}
          animate="loop"
          variants={squareAnimations}
        />
      </div>
    </>
  );
}
