import Image, { StaticImageData } from "next/image";
import InitPicture from "../assets/images/programCards/initexplore.png";
import InitReach from "../assets/images/programCards/initreach.png";
import InitBuild from "../assets/images/programCards/initbuild.png";
import InitHack from "../assets/images/programCards/inithack.png";

export default function Programs() {
  const sampleData: {
    title: string;
    image: StaticImageData;
    discription: string;
    open: boolean;
    url: string;
    color: string;
  }[] = [
    {
      // {index 1} index in mapping
      title: "Explore",
      image: InitPicture,
      discription:
        "INIT Explore is a program focused on the software development side of technology. From web development to machine learning to simple scripts, this program aims to expose members to all sorts of different programming languages and frameworks commonly used in the industry.",

      open: true,
      //pages that applications will be filled up
      url: "https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog",
      color: "#EB6A65",
    },
    {
      // {index 2} index in mapping
      title: "Reach",
      image: InitReach,
      discription:
        "INIT Reach is a program focused on the hardware development side of technology. Using all sorts of machinery, large or small, this program aims inspire members to create their own devices with the technology available today.",
      open: true,
      url: "https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog",
      color: "#6FA4F4",
    },
    {
      // {index 3} index in mapping
      title: "Build",
      image: InitBuild,
      discription:
        "INIT Build is a program focused on project development. Teams have nine weeks to complete a project corresponding to a topic in technology that they may be interested in. From mobile applications to games to even robots.",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#FC6C3F",
    },
    {
      // {index 4} index in mapping
      title: "Ignite",
      image: InitPicture,
      discription:
        "INIT Ignite is a program focused on information technology, a field in technology. Commonly overlooked, information technology ensures that the systems running the software are secured and works. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#87DE65",
    },
    {
      // {index 5} index in mapping
      title: "Hack",
      image: InitHack,
      discription:
        "INIT Hack is a program focused on the community in Computer Science. Across the country, there are various coding competitions, Hackathons, where students must create a solution by the end of a given time frame. Most students work as teams, with the members being fellow students in the same school. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#A27BFC",
    },
    {
      // {index 6} index in mapping
      title: "Discover",
      image: InitPicture,
      discription:
        "INIT Discover is a program focused on the academic side of technology. Though often overlooked, research is a viable career path for students interested in academics or furthering advancements in the field. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#7F88A0",
    },
    {
      // {index 7} index in mapping
      title: "Uplift",
      image: InitPicture,
      discription:
        "INIT Uplift is a program focused on mentorship. Many incoming freshmen are overwhelmed by the amount of information available to them from the start. Our program aims to guide these new students and help them kickstart their tech careers. Those with experience in the field or program help to navigate freshmen during these rough times and allow them to establish a network or two. Mentor with us or get a mentor today",

      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#FF3E9E",
    },
    {
      // {index 8} index in mapping
      title: "Launch",
      image: InitPicture,
      discription:
        "INIT Launch is a program focused on project development. Teams have nine weeks to complete a project corresponding to a topic in technology that they may be interested in. From mobile applications to games to even robots, this program aims teach you the fundamentals of project development in the real world. No experience is required to spark up your portfolio with us.",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#11CEBB",
    },
  ];
  return (
    <main className="min-h-screen p-4">
      <div className="mb-4 flex flex-col items-center justify-between md:mb-0 md:flex-row">
        <h1 className="mb-4 text-2xl text-white md:mb-0 md:text-3xl">
          Programs
        </h1>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {/* what ever comes first in the array thats the objects in the array and whats second is the Index */}
        {sampleData.map((programData, index) => {
          const afterINITArray: string =
            programData.discription.split("INIT")[1] ?? "";
          const initArrayWords = afterINITArray.split(" ");
          const firstWord = afterINITArray.split(" ")[1];

          console.log(programData.image);

          //for discription title colors
          let pAfterFirstWord = "";
          initArrayWords.forEach((word, i) => {
            if (i > 1) {
              pAfterFirstWord += word + " ";
            }
          });

          return (
            <div
              key={index}
              className="firstrow relative mx-auto mt-4 w-full"
              style={{ height: "530px" }}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-900 shadow">
                <a href="#">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      className="rounded-t-lg sm:object-left md:object-left  2xl:object-top"
                      alt={programData.title}
                      src={programData.image}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </a>
                <div className="flex flex-grow flex-col p-5">
                  <h5
                    className={`mb-2 flex items-center text-2xl font-bold tracking-tight text-white`}
                    style={{ color: programData.color }}
                  >
                    <svg
                      className="mr-2 h-4"
                      fill="currentColor"
                      strokeWidth="0"
                      id="Footer INIT Logo"
                      data-name="Footer INIT Logo"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1200 480.12"
                    >
                      <path d="m499.17,75.78c-79.68,0-131.34,62.17-153.23,108.58-3.5,7.01-7.88,17.51-18.39,13.13-11.38-4.38-2.63-21.89,4.38-35.9,7-14.01,11.38-28.9,11.38-49.91v-21.89h0c-77.37,0-140.1,62.73-140.1,140.1v250.23h140.1l1.02-163.32c0-87.13,37.48-123.43,94.39-123.43,49.91,0,86.72,30.4,86.72,134.6v152.16h140.1v-208.2c0-131.34-66.55-196.14-166.37-196.14Z" />
                      <path d="m1140.2,201.87c33.02,0,59.8-26.77,59.8-59.8v-52.28h-126.09V0h-140.1v338.26c0,111.2,43.78,141.85,136.6,141.85h129.59v-112.08h-84.06c-40.28,0-42.03-1.75-42.03-45.53v-120.64h66.29Z" />
                      <path d="m800.09,142.42c-27,0-51.55-12.01-69.82-31.6v369.3h138.95V111.55c-18.19,19.17-42.47,30.87-69.13,30.87Z" />
                      <path d="m799.86,116.1c31.38,0,56.82-25.49,56.82-56.93s-25.44-56.93-56.82-56.93-56.82,25.49-56.82,56.93,25.44,56.93,56.82,56.93Z" />
                      <path d="m69.82,142.42c-27,0-51.55-12.01-69.82-31.6v369.3h138.95V111.55c-18.19,19.17-42.47,30.87-69.13,30.87Z" />
                      <ellipse cx="69.59" cy="59.18" rx="56.82" ry="56.93" />
                    </svg>
                    {programData.title}
                  </h5>
                  <p
                    className="text-md mb-3 flex-grow overflow-y-auto font-semibold"
                    style={{ height: "100px" }}
                  >
                    INIT
                    <span style={{ color: programData.color }}>
                      {" "}
                      {firstWord}{" "}
                    </span>
                    {pAfterFirstWord}
                  </p>
                  <div className="mb-2 self-start">
                    {programData.open ? (
                      <a
                        href={programData.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-opacity-50"
                        style={{ backgroundColor: programData.color }}
                      >
                        Apply Now
                        {/* SVG Icon */}
                      </a>
                    ) : (
                      <div
                        className="inline-flex w-full items-center justify-center rounded-lg px-3 py-2 text-center text-sm font-medium text-white"
                        style={{
                          backgroundColor: programData.color,
                          opacity: ".45",
                        }}
                      >
                        Applications Closed
                        {/* SVG Icon */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
