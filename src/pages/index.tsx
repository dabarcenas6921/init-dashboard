import Head from "next/head";
import { api } from "~/utils/api";
import Carousel from "./components/Carousel";
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
        <Carousel />
        <div>
          <section id="Programs" className="programs">
            <div className="container-3">
              <h1 className="centered-heading-3 margin-bottom-32px flex justify-center pt-60 text-4xl">
                🧠 Programs
              </h1>
              <div className="hero-wrapper-2 flex flex-col justify-center sm:flex-row sm:items-center sm:pt-10 md:flex-row">
                <p className="programs margin-bottom-16px text-center md:p-0 lg:pl-10 lg:pr-10">
                  INIT chapters carry out our signature experiential learning
                  and career development programs within their communities.
                  These programs attract thousands of individuals annually,
                  helping them gain technical skills, work on projects, improve
                  their resume, prepare for interviews, connect with industry,
                  and much more.{" "}
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
                <img
                  src="https://uploads-ssl.webflow.com/62c343d1109fa5ddcec5736b/63d0f99d550a564bc47c1ad6_Screenshot%202023-01-25%20at%204.14.08%20AM.png"
                  loading="lazy"
                  alt=""
                  sizes="(max-width: 479px) 94vw, (max-width: 767px) 95vw, (max-width: 991px) 92vw, (max-width: 1439px) 43vw, 432.3984375px"
                  srcSet="...[all the srcSet links]..."
                  className="gallery-image shadow-two flex lg:pr-4"
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
