export default function Programs() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Programs</h1>
        <div className="flex items-center space-x-5"></div>
      </div>

      {/* Card for Init Build*/}

      <div className="dark:border-none-700 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:bg-gray-800">
        <a href="#">
          <img
            className="rounded-t-lg"
            src="https://s3-alpha-sig.figma.com/img/bdfa/e996/ec49d92b4a38e9615eb9f39c6126b252?Expires=1698019200&Signature=flYOVQDABPxN8w9~PQPrGi147fl0lhnXkgsf0l1hsC~eQ4myKRWMZjchmZeOQs2reqk4uEvGg0o8AgVVAKl~snuJZA00u-DN6vRps0t4Cx4Itey-sL7vPmJZ26u58DoXo6D72kkmpNBDQX2HjOZSGsxBjtplytJTvsVLf9YsfI7Nk08aJH~v2Lg40m0-U5EtSzRWvJXYwQOpAYbOvyBhVg~c7c3rejMOUVAa7hTZ7ckU91h-QEKwEv0eZ5iBiv34XpcaKk-FVdVvbOyaR2Qv-mbFBoRMCBakk8CQMZPbSzVF7mr7LYq6NwwYM76eaYu2ZN-mYWIafS0PzwkQzwffoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="light:text-red mb-2 text-2xl font-bold tracking-tight text-red-900">
              Init Build
            </h5>
          </a>
          <p className="text-none-700 dark:text-none-400 mb-3 font-normal">
            INIT Explore is a program focused on the software development side
            of technology. From web development to machine learning to simple
            scripts, this program aims to expose members to all sorts of
            different programming languages and frameworks commonly used in the
            industry.
          </p>
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
        {/* Card for Init Build*/}
        <div className="dark:border-none-700 max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:bg-gray-800">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://s3-alpha-sig.figma.com/img/bdfa/e996/ec49d92b4a38e9615eb9f39c6126b252?Expires=1698019200&Signature=flYOVQDABPxN8w9~PQPrGi147fl0lhnXkgsf0l1hsC~eQ4myKRWMZjchmZeOQs2reqk4uEvGg0o8AgVVAKl~snuJZA00u-DN6vRps0t4Cx4Itey-sL7vPmJZ26u58DoXo6D72kkmpNBDQX2HjOZSGsxBjtplytJTvsVLf9YsfI7Nk08aJH~v2Lg40m0-U5EtSzRWvJXYwQOpAYbOvyBhVg~c7c3rejMOUVAa7hTZ7ckU91h-QEKwEv0eZ5iBiv34XpcaKk-FVdVvbOyaR2Qv-mbFBoRMCBakk8CQMZPbSzVF7mr7LYq6NwwYM76eaYu2ZN-mYWIafS0PzwkQzwffoQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt=""
            />
          </a>

          <div className="p-5">
            <a href="#">
              <h5 className="light:text-red mb-2 text-2xl font-bold tracking-tight text-red-900">
                Init Build
              </h5>
            </a>
            <p className="text-none-700 dark:text-none-400 mb-3 font-normal">
              INIT Explore is a program focused on the software development side
              of technology. From web development to machine learning to simple
              scripts, this program aims to expose members to all sorts of
              different programming languages and frameworks commonly used in
              the industry.
            </p>
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-red-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
