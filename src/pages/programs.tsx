import Image from "next/image";
import { programs } from "~/Data/programData";

export default function Programs() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl p-4 px-8 md:p-0 md:px-8">
      <div className="mb-4 flex flex-col items-center justify-between md:mb-0 md:flex-row">
        <h1 className="mb-4 text-2xl text-white md:mb-0 md:text-3xl">
          Programs
        </h1>
      </div>
      <div className=" grid gap-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {/* what ever comes first in the array thats the objects in the array and whats second is the Index */}
        {programs.map((programData, index) => {
          const afterINITArray: string =
            programData.description.split("INIT")[1] ?? "";
          const initArrayWords = afterINITArray.split(" ");
          const firstWord = afterINITArray.split(" ")[1];

          //for description title colors
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
              <div className="flex h-full flex-col overflow-hidden rounded-none bg-zinc-900  shadow">
                <a href="#">
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      className="rounded-s-none	 max-[2560px]:object-top min-[320px]:object-left sm:object-left md:object-left  2xl:object-top"
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
