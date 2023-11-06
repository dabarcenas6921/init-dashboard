import Image from "next/image";
// import Test from "src/assets/images/programCards/initexplore.png";

export default function Programs() {
  const sampleData: {
    title: string;
    image: string;
    discription: string;
    open: boolean;
    url: string;
    color: string;
  }[] = [
    {
      // {index 1} index in mapping
      title: "Init Explore",
      image: " Test",
      discription:
        "INIT Explore is a program focused on the software development side of technology. From web development to machine learning to simple scripts, this program aims to expose members to all sorts of different programming languages and frameworks commonly used in the industry.",

      open: true,
      //pages that applications will be filled up
      url: "https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog",
      color: "#EB6A65",
    },
    {
      // {index 2} index in mapping
      title: "init reach",
      image: "/assets/images/programCards/initexplore.png",
      discription:
        "INIT Reach is a program focused on the hardware development side of technology. Using all sorts of machinery, large or small, this program aims inspire members to create their own devices with the technology available today.",
      open: true,
      url: "https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog",
      color: "#6FA4F4",
    },
    {
      // {index 3} index in mapping
      title: "Init Build",
      image: "/assets/images/programCards/initexplore.png",
      discription:
        "INIT Build is a program focused on project development. Teams have nine weeks to complete a project corresponding to a topic in technology that they may be interested in. From mobile applications to games to even robots.",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#FC6C3F",
    },
    {
      // {index 4} index in mapping
      title: "Init Ignite",
      image: "/assets/images/programCards/initexplore.png",
      discription:
        "INIT Ignite is a program focused on information technology, a field in technology. Commonly overlooked, information technology ensures that the systems running the software are secured and works. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#87DE65",
    },
    {
      // {index 5} index in mapping
      title: "init Hack",
      image: "/assets/images/programCards/initexplore.png",
      discription:
        "INIT Hack is a program focused on the community in Computer Science. Across the country, there are various coding competitions, Hackathons, where students must create a solution by the end of a given time frame. Most students work as teams, with the members being fellow students in the same school. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#A27BFC",
    },
    {
      // {index 6} index in mapping
      title: "Init Discover",
      image: "/assets/images/programCards/initexplore.png",
      discription:
        "INIT Discover is a program focused on the academic side of technology. Though often overlooked, research is a viable career path for students interested in academics or furthering advancements in the field. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#7F88A0",
    },
    {
      // {index 7} index in mapping
      title: "Init Uplift",
      image: "/assets/images/programCards/initexplore.png",
      discription:
        "INIT Uplift is a program focused on mentorship. Many incoming freshmen are overwhelmed by the amount of information available to them from the start. Our program aims to guide these new students and help them kickstart their tech careers. Those with experience in the field or program help to navigate freshmen during these rough times and allow them to establish a network or two. Mentor with us or get a mentor today",

      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#FF3E9E",
    },
    {
      // {index 8} index in mapping
      title: "Init Launch",
      image: "/assets/images/programCards/initexplore.png",
      discription:
        "INIT Launch is a program focused on project development. Teams have nine weeks to complete a project corresponding to a topic in technology that they may be interested in. From mobile applications to games to even robots, this program aims teach you the fundamentals of project development in the real world. No experience is required to spark up your portfolio with us.",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#11CEBB",
    },
  ];
  return (
    <main className="min-h-screen">
      <div className="mb-4 flex flex-col items-center justify-between md:mb-0 md:flex-row">
        <h1 className="mb-4 text-2xl text-white md:mb-0 md:text-3xl">
          Programs
        </h1>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-8 ">
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
            <div key={index} className="relative mx-auto mt-4 ">
              <div
                className=" w-full max-w-sm shadow dark:bg-gray-500"
                style={{ height: "100%", backgroundColor: "#121827" }}
              >
                <a href="#">
                  <Image
                    className="rounded-t-lg"
                    alt={programData.title}
                    src={programData.image}
                    width={200}
                    height={200}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5
                      className={`light:text-red mb-2 text-2xl font-bold tracking-tight text-${programData.color}`}
                    >
                      {programData.title}
                    </h5>
                  </a>
                  <p className="text-none-500 dark:text-none-500 mb-8 font-poppins">
                    {/* {programData.discription} */}
                    INIT
                    <span style={{ color: `${programData.color}` }}>
                      {" "}
                      {firstWord}{" "}
                    </span>
                    {pAfterFirstWord}
                  </p>
                  {/* (Ternary.Operator) anything before ? is the condition if the conditon is true it
                  needs to show whats on the left : and if its false everything
                  on thr right on the : exampleOne.true ? : exampleTwo.false */}
                  <div className="botton-container absolute bottom-0 mb-2 ">
                    {programData.open ? (
                      <>
                        <a
                          style={{ backgroundColor: `${programData.color}` }}
                          // This helps Url open in a different tab
                          target="_blank"
                          href={programData.url}
                          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                          Apply Now
                          <svg
                            className="ml-2 h-3.5 w-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                      </>
                    ) : (
                      //Else
                      <>
                        <a
                          style={{
                            backgroundColor: `${programData.color}`,
                            opacity: ".45",
                          }}
                          // This helps Url open in a different tab
                          target="_blank"
                          // href={programData.url}
                          className=" inline-flex items-center rounded-lg bg-blue-300 px-3 py-2 text-center text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-gray-400"
                        >
                          Applications Closed
                          <svg
                            className="ml-2 h-3.5 w-3.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                          </svg>
                        </a>
                      </>
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
