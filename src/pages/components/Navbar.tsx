import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="mb-5 border-gray-200 bg-primary">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link href="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-3xl text-white">
            INIT
          </span>
        </Link>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col rounded-lg border  border-gray-700  bg-gray-800 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0  md:bg-primary md:p-0">
            <Link
              href="/jobs"
              className="block rounded py-2 pl-3 pr-4 text-white"
            >
              Job Opportunities
            </Link>
            <Link
              href="/events"
              className="block rounded py-2 pl-3 pr-4 text-white"
            >
              Events
            </Link>
            <Link
              href="/programs"
              className="block rounded py-2 pl-3 pr-4 text-white"
            >
              Programs
            </Link>
            <Link
              href="/about"
              className="block rounded py-2 pl-3 pr-4 text-white"
            >
              About Us
            </Link>
            <Link
              href="/join"
              className="block rounded py-2 pl-3 pr-4 text-white"
            >
              Join
            </Link>
          </ul>
        </div>
        <div className="flex space-x-4">
          <button className="h-10 w-10 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-600">
            {/* Discord Icon Here */}
          </button>
          <button className="h-10 w-10 rounded-full bg-pink-500 focus:outline-none focus:ring-2 focus:ring-gray-600">
            {/* Instagram Icon Here */}
          </button>
        </div>
      </div>
    </nav>
  );
}
