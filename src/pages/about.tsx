import Head from "next/head";
import Image from "next/image";
import init_members from "../../../public/images/init-members.jpeg";
import FIU_Logo from "/Users/user/initDashboard/init-dashboard-Hassani/src/assets/images/FIU-Engineering-Logo.svg";
import knight_foundation from "/Users/user/initDashboard/init-dashboard-Hassani/src/assets/images/knight-foundation-logo.svg";
import lab22c from "/Users/user/initDashboard/init-dashboard-Hassani/src/assets/images/Lab2C-logo.svg";
import mdc_logo from "/Users/user/initDashboard/init-dashboard-Hassani/src/assets/images/MDC-Logo.svg";
import { chapters } from "../../dummy_data/chapters";
import Chapter_card from "/Users/user/initDashboard/init-dashboard-Hassani/src/components/chapter_card";

export default function About() {
  return (
    console.log(chapters),
    (
      <>
        <Head>
          <title>About Init</title>
          <meta name="description" content="About us for Init" />
        </Head>
        <h1 className="text-center text-4xl text-white">💻 About Us</h1>
        <br />
        {/*<section className="flex ">
        <div className="mx-auto h-auto w-1/3 text-sm">
          <p>
            INIT is a non-profit organization empowering underserved communities
            to launch careers in technology. We establish INIT chapters at
            schools, colleges, and municipalities, providing free experiential
            learning and career development programs for everyone. We also
            partner with employers to foster a diverse talent pipeline into the
            tech industry, closing the talent gap and helping low-income
            individuals achieve economic mobility.
          </p>
          <br />
          <p>
            INIT was founded by the student and alumni leaders behind the
            successful UPE student organization at FIU, who have helped
            thousands of students land jobs in tech since 2014. Seeing the need
            to help more students and the opportunity to scale, our team decided
            to start our very own non-profit to drive this work moving forward.
          </p>
          <br />
          <p>
            INIT is supported by the Knight Foundation, Lab22c, Venture Miami,
            and academic institutions in Miami-Dade County including FIU, MDC,
            FMU, and more.
          </p>
        </div>
        <div className=" mx-auto h-auto max-w-lg">
          <Image
            src={init_members}
            alt="Init Members"
            className="mx-auto text-sm"
          />
        </div>
  </section>*/}
        <br />
        <div className="flex items-center justify-center">
          <iframe
            className=" mx-auto text-sm"
            width="100%"
            height="500px"
            src="https://www.youtube.com/embed/q44VgsbcBkw"
            title="INIT Launch Announcement"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen={true}
          ></iframe>
        </div>
        <br />
        <h1 className="text-center text-4xl text-white">🤝Partners</h1>
        <br />
        <span className="flex flex-wrap items-center justify-center">
          <Image
            src={knight_foundation}
            alt="Knight Foundation Logo"
            className="mr-5  text-sm"
            width={175}
            height={50}
            loading="lazy"
          />
          <Image
            src={lab22c}
            alt="Lab22c Logo"
            className="  text-sm"
            width={175}
            height={50}
            loading="lazy"
          />
          <Image
            src={FIU_Logo}
            alt="Init Logo"
            className="text-sm"
            width={175}
            height={50}
            loading="lazy"
          />
          <Image
            src={mdc_logo}
            alt="MDC Logo"
            className="text-sm"
            width={175}
            height={50}
            loading="lazy"
          />
        </span>
        <br />
        <section className=" text-center text-sm">
          <p>More partners to be announced soon!</p>
        </section>
        <br />
        <h1 className="text-center text-4xl text-white">🍎 Chapters</h1>
        <section className="flex justify-center">
          <div className="flex flex-wrap justify-center gap-9 ">
            {chapters.map((chapter) => (
              <Chapter_card
                image={chapter.image}
                name={chapter.name}
                description={chapter.description}
                key={chapter.name}
              />
            ))}
          </div>
        </section>
        <br />

        <main className="flex min-h-screen flex-col bg-primary"></main>
      </>
    )
  );
}
