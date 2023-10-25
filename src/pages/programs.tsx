// "use client";

// import { Card } from "flowbite-react";

export default function Programs() {
  const sampleData = [
    {
      title: "init build",
      image:
        "https://s3-alpha-sig.figma.com/img/bdfa/e996/ec49d92b4a38e9615eb9f39c6126b252?Expires=1698019200&Signature=flYOVQDABPxN8w9~PQPrGi147fl0lhnXkgsf0l1hsC~eQ4myKRWMZjchmZeOQs2reqk4uEvGg0o8AgVVAKl~snuJZA00u-DN6vRps0t4Cx4Itey-sL7vPmJZ26u58DoXo6D72kkmpNBDQX2HjOZSGsxBjtplytJTvsVLf9YsfI7Nk08aJH~v2Lg40m0-U5EtSzRWvJXYwQOpAYbOvyBhVg~c7c3rejMOUVAa7hTZ7ckU91h-QEKwEv0eZ5iBiv34XpcaKk-FVdVvbOyaR2Qv-mbFBoRMCBakk8CQMZPbSzVF7mr7LYq6NwwYM76eaYu2ZN-mYWIafS0PzwkQzwffoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Explore is a program focused on the software development side of technology. From web development to machine learning to simple scripts, this program aims to expose members to all sorts of different programming languages and frameworks commonly used in the industry.",
    },
    {
      title: "init reach",
      image:
        "https://s3-alpha-sig.figma.com/img/0ec1/da54/6cf38b347bee1dcc6b49c386b1768072?Expires=1698624000&Signature=ku4MuOGJU-HqRhaLZG~rQ~ZMWFYb8LiSZT42juYGag3E0Piyh1oc9YyjR2dOr6HDbqd5iLrGZtTPfLLwZdRWlI~moY2YC0n2pD4QrjtWYjp0osOQtFTgKuVMNFSoxNNMXYnb-VDB05vsZLfVZDrrRAm1LPst5suNPFOnJCJQiZ1JXVVCEpAhjyYUTrQ8X~Lb19evV0zTyNZbHnJZBxwyEgwEWevONS13a8A9qV-g9sj3j9NIzJKVjeiuOIhVCvncvaeJTZstOBnCFmcT14o9jeO7eX9m1FX1SJ1i28YN8geAHACH6yS8mKLwQbMJS1OPjpRb2bTZGtPXO5z5NiD9aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Reach is a program focused on the hardware development side of technology. Using all sorts of machinery, large or small, this program aims inspire members to create their own devices with the technology available today.",
    },
    {
      title: "init explore",
      image:
        "https://s3-alpha-sig.figma.com/img/bdfa/e996/ec49d92b4a38e9615eb9f39c6126b252?Expires=1698019200&Signature=flYOVQDABPxN8w9~PQPrGi147fl0lhnXkgsf0l1hsC~eQ4myKRWMZjchmZeOQs2reqk4uEvGg0o8AgVVAKl~snuJZA00u-DN6vRps0t4Cx4Itey-sL7vPmJZ26u58DoXo6D72kkmpNBDQX2HjOZSGsxBjtplytJTvsVLf9YsfI7Nk08aJH~v2Lg40m0-U5EtSzRWvJXYwQOpAYbOvyBhVg~c7c3rejMOUVAa7hTZ7ckU91h-QEKwEv0eZ5iBiv34XpcaKk-FVdVvbOyaR2Qv-mbFBoRMCBakk8CQMZPbSzVF7mr7LYq6NwwYM76eaYu2ZN-mYWIafS0PzwkQzwffoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      discription:
        "INIT Explore is a program focused on the software development side of technology. From web development to machine learning to simple scripts, this program aims to expose members to all sorts of different programming languages and frameworks commonly used in the industry.",
    },
  ];
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="mt-6 text-3xl text-white">Programs</h1>
        <div className="flex items-center space-x-5"></div>
      </div>
      <div className="Cards flex">
        {sampleData.map((programData, index) => {
          return (
            <div key={index} className="mt-12 flex flex-row space-x-4">
              <div className="dark:border-none-600 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:bg-gray-800 ">
                <a href="#">
                  <img
                    className="rounded-t-lg"
                    alt="programimg"
                    src={programData.image}
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="light:text-red mb-2 text-2xl font-bold tracking-tight text-red-500">
                      {programData.title}
                    </h5>
                  </a>
                  <p className="text-none-700 dark:text-none-400 mb-3 font-normal">
                    {programData.discription}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  >
                    Read more
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
