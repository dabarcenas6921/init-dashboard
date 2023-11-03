// "use client";

// import { Card } from "flowbite-react";

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
      image:
        "https://s3-alpha-sig.figma.com/img/6681/fe34/73232e8ff3804ccb0937eb3944ba4bbe?Expires=1699228800&Signature=X9MgB4~CaNI6e-qY7JWPah-4KmmJ~qHKlScfZMRlOoSAX25hjKcu9Mvh0BfzyU7n9tLN-Po~h00RiOOeFHrKzmWkt2-~-hLrTeJID5yosJw36tejowusqWHverWtchi0IG5eZU8P4tJxI5AK0lpfU1D228ibHL3rf3L6XXQKy2yFU3-gmsOvCxk6XvF~txZRHBDGnjbiFu67ltQFdtZYE81ByCcKaqpZd8m0hrZk0G0hZuJfBRUI0CSjC2pDk4s~~cs8iny-5iYGqf5hCpGw50b-B4msEKLB1Smo~lRlayDO-ujiT4YnGdLkH0XnWSOlQs6orreihxlh4Z4kjZiGNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
      image:
        "https://s3-alpha-sig.figma.com/img/82aa/b3c6/78ea0ccf36fe437a336d5bb6acd9ac90?Expires=1699228800&Signature=YEYyd~ngtSMsTuD3mvQmZz80GvgxRAj5ML7blZ4GBunpWyjFFa8IbdA6d7jorksb9WPcUmIvOhelcpc4DROXU-3uLRnNetPqnpOO4j~Jl3Ax1PEnh7HVukR3ZfVXCFWhj~IHOtoLiFzE1D6zNdPt9IHw9z64~qGF--YX-7af0GmO6A8~VfcNhbnnmvObXfKzhRXvf5UW0rAaoPoFw5joMd3zm3IspZ6o5F~U1ePukUoCvMndx~rjT5uugnbYLh~FsjZ-FPhynZLAiE2EtPyFfDtSz75ms2iPsLiXw6Wh1Py92R1xuIqGGrkh7ZvyzejHifcZH32avSTokVxyTGbMtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Reach is a program focused on the hardware development side of technology. Using all sorts of machinery, large or small, this program aims inspire members to create their own devices with the technology available today.",
      open: true,
      url: "https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog",
      color: "#6FA4F4",
    },
    {
      // {index 3} index in mapping
      title: "Init Build",
      image:
        "https://s3-alpha-sig.figma.com/img/1768/8492/709c016b0d1b66b4d4022e8e00245f52?Expires=1699228800&Signature=GWQs6EoiUUDSDKKyA5TvOv67JQJVA-hz4Blb3oVRISYz-mYGUtgAn56nuhfq1KErhZncwX1rQ1xtXcWqaiV8PkL3OYtIxYvZ5MKtnBSa~9mJz23uNiU2xMpKdpyqJceInhJ~HKdIWDNriyoqh0U72zF3mb5Tpk4qOOVT5Vfv3ekl3GKuj72kfwapWp-F6ApHb38SaOpyiTHVyB7vXpkgpiIhCwla-MvOl8TRbS6kbh7vhd9sccye9v6rR~BVa8HlBaBaXaJu230URk42tf69t~Q~qjxSJXZrkwD~-1cILwZlBJrR3248gi6NgqAH7qN0-~X2I3z7Vz9PfsiyIb45Zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Build is a program focused on project development. Teams have nine weeks to complete a project corresponding to a topic in technology that they may be interested in. From mobile applications to games to even robots.",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#FC6C3F",
    },
    {
      // {index 4} index in mapping
      title: "Init Ignite",
      image:
        "https://s3-alpha-sig.figma.com/img/e493/479b/710e8134263af482bdfcbcd1106330bd?Expires=1699228800&Signature=OBacKnEMg5fAD~Sx3lb2e0USE9ZQLfGEPwwy0sfVQeEls1AOWAcncEBk9BRv3yT0DuXZfGfqMnh7RUTuHondzmVIYVswsU4zgJorkZ25pQ5U3EjaAuWZTos4NBg53T2PdT6jMBy2a9~RKHlvyIFV3cEgBQj7l1RJziPxeQCHAqLaGYqyt1PJmGGnej6YgwbayxzrxnZoUufcKsTivSyAxsAJDMrSEoiswycMYvFpCkllslPzDrbYrUx2LVPCby12FMLrmd5qBV7bVc8KRxkljdR-2xHwsAtiH51Zep7ENRV5OgsJrRfef3GmKBZasW~6doMGkPxZ8imsGP-uZk3ZbQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Ignite is a program focused on information technology, a field in technology. Commonly overlooked, information technology ensures that the systems running the software are secured and works. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#87DE65",
    },
    {
      // {index 5} index in mapping
      title: "init Hack",
      image:
        "https://s3-alpha-sig.figma.com/img/96ab/1321/85913dfeb40c26affd8b72e08ef7bfdb?Expires=1699228800&Signature=jFyzXu5AY7MfiZBWdWk2PwRlkFlggVl0ZpO4Jfmbmu~GE1SFDM0U4tcrIBVk9cfrb7A0nKIuOb2mvqENKloggJhrcpaF4dLa0lMGZ64hKQhyjmIG6UzdEFlq45dRz8nZ3MOctrrZgPXO0~E8-pybR-SusOV-cXCzRwccfH6nMw1iu5JU7JO39Aw9cPLRdPM9lu1jGx86sPM5WeaK6Rriw5X~x94UNxAeyJUub2BwpkXKVMKJs6uezEV728D8Q8onaMDDpVXIKG63ogDzN-2qlHCwYseP84HGufkA0IleZL0OFbjbtf-OaCCZZmDyGZC0~2s3OCIQqtuxnhzBAA5BVQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Hack is a program focused on the community in Computer Science. Across the country, there are various coding competitions, Hackathons, where students must create a solution by the end of a given time frame. Most students work as teams, with the members being fellow students in the same school. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#A27BFC",
    },
    {
      // {index 6} index in mapping
      title: "Init Discover",
      image:
        "https://s3-alpha-sig.figma.com/img/8f6b/77fb/981a2e6ce87c7537a1fd4017152342d5?Expires=1699228800&Signature=PE0kazZFlLKohUdp8SlfCyVS31z1KP8JzGf85Cn8UCvWr7pEn5K5nkas9iUmT7A63jwAwc~lKMVKFDdOaj3lrPWYjEsTSYlls3Huzkt9pS22hFHfbcoLzHo0-irWkz-8mur4KIQf3TV1GSNec0BupPmOYSiU7XJmybgd7GL5S9nLmXhb2064vtwyoi-WeFWj~UOTKx07GQ1UwyRsC79hLggjJtOPikYZPs1F1Zw6pTjyoA86XIixf08xPDZjNhuNU3E5QoXHvs11VvF1umLgmRqfKrTCtKLwYf8q52JTEZOydgf~79KPf4iiL3rYTxeUL3ckDGYaN9cr-kzm0Tx7bw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Discover is a program focused on the academic side of technology. Though often overlooked, research is a viable career path for students interested in academics or furthering advancements in the field. ",
      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#7F88A0",
    },
    {
      // {index 7} index in mapping
      title: "Init Uplift",
      image:
        "https://s3-alpha-sig.figma.com/img/bdfa/e996/ec49d92b4a38e9615eb9f39c6126b252?Expires=1699228800&Signature=dftADo4bJNSyWDw8ZDgxKAgQmRS86965Ckp3piZEAAQTQdTiqizRrCtSIyOeCuL1jszTfA9qYNxyfc2mPZ2aCOtDVSSTid13ov6DCQu-x4EwSFmpkGucnkvdLOJM8cgpzHul3Mf4cLRGU2LWLfdmWGg6DyVG4e1YZUaBtfz3fsAtI4ocjbeHyVHs43gm4y61DiX~79T7iQpnSY~KZ0lBLQrRhqMqHJ13DibK-JEAIbRrUm2vVS~ljaVTQIUZ06T~-PJBQWrcm4E4yqc6RV-MPXXs6BTSguZRjhTW-eZ9Tz9NJnhX2ny89QA8HMPnnQ6yTKdlksoSFl6jRkaV5sQobw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Uplift is a program focused on mentorship. Many incoming freshmen are overwhelmed by the amount of information available to them from the start. Our program aims to guide these new students and help them kickstart their tech careers. Those with experience in the field or program help to navigate freshmen during these rough times and allow them to establish a network or two. Mentor with us or get a mentor today",

      open: false,
      url: "https://generalassemb.ly/education/user-experience-design-immersive",
      color: "#FF3E9E",
    },
    {
      // {index 8} index in mapping
      title: "Init Launch",
      image:
        "https://s3-alpha-sig.figma.com/img/bdfa/e996/ec49d92b4a38e9615eb9f39c6126b252?Expires=1699228800&Signature=dftADo4bJNSyWDw8ZDgxKAgQmRS86965Ckp3piZEAAQTQdTiqizRrCtSIyOeCuL1jszTfA9qYNxyfc2mPZ2aCOtDVSSTid13ov6DCQu-x4EwSFmpkGucnkvdLOJM8cgpzHul3Mf4cLRGU2LWLfdmWGg6DyVG4e1YZUaBtfz3fsAtI4ocjbeHyVHs43gm4y61DiX~79T7iQpnSY~KZ0lBLQrRhqMqHJ13DibK-JEAIbRrUm2vVS~ljaVTQIUZ06T~-PJBQWrcm4E4yqc6RV-MPXXs6BTSguZRjhTW-eZ9Tz9NJnhX2ny89QA8HMPnnQ6yTKdlksoSFl6jRkaV5sQobw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
          const afterINITArray = programData.discription.split("INIT")[1];
          const initArrayWords = afterINITArray.split(" ");
          const firstWord = afterINITArray.split(" ")[1];

          //for discription title colors
          let pAfterFirstWord = "";
          initArrayWords.forEach((word, i) => {
            if (i > 1) {
              pAfterFirstWord += word + " ";
            }
          });
          // console.log(programData.color, "color");
          // console.log(firstWord, "firstWord");
          // console.log(pAfterFirstWord, "pAfterFirstWord");
          console.log(initArrayWords, "firstWord");
          console.log(programData.discription, "programData.discription");
          return (
            <div key={index} className="relative mx-auto mt-4 ">
              <div
                className=" w-full max-w-sm shadow dark:bg-gray-500"
                style={{ height: "100%", backgroundColor: "#121827" }}
              >
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    alt=""
                    src={programData.image}
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
