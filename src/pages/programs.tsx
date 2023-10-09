export default function Programs() {
  return (
    <main className="min-h-screen">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl text-white">Join our Programs</h1>
        <div className="flex items-center space-x-2">
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg bg-primary_yellow px-5 py-2.5 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          >
            Add Program
          </button>
          <Search />
          <button
            type="button"
            className="mb-2 mr-2 rounded-lg bg-primary_yellow px-5 py-2.5 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          >
            Filter
          </button>
        </div>
      </div>
      {/* Cards */}
      <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
        <a href="#">
          <img className="rounded-t-lg p-8" src="" alt="Init Build" />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
              INIT Explore is a program focused on the software development side
              of technology. From web development to machine learning to simple
              scripts, this program aims to expose members to all sorts of
              different programming languages and frameworks commonly used in
              the industry.
            </h5>
          </a>
          <div className="mb-5 mt-2.5 flex items-center"></div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              Init Build
            </span>
            <a
              href="#"
              className="rounded-lg bg-pink-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
function Search() {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="sr-only mb-2 text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full rounded-md border border-gray-300 bg-white p-2 pl-10 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500"
          placeholder="Search for programs..."
          required
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center justify-center rounded-r-lg bg-primary_yellow px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}
