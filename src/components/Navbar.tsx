import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mb-16 border-gray-200 bg-primary">
      <div className="mx-auto flex flex-wrap items-center justify-between p-4">
        <Link href="/">
          <span className="order-1 flex cursor-pointer items-center md:order-1">
            <span className="self-center whitespace-nowrap text-3xl text-white  hover:text-yellow-200">
              INIT
            </span>
          </span>
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="order-3 rounded p-2 focus:outline-none focus:ring sm:order-3 md:hidden"
        >
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="relative z-10 order-2 m-4 flex space-x-4">
          <button className="h-10 w-10 rounded-full bg-blue-500 focus:outline-none focus:ring-2 focus:ring-gray-600">
            {/* Discord Icon Here */}
          </button>
          <button className="h-10 w-10 rounded-full bg-pink-500 focus:outline-none focus:ring-2 focus:ring-gray-600">
            {/* Instagram Icon Here */}
          </button>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } relative z-0 w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col rounded-lg border border-gray-700 bg-gray-800 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-primary">
            <li className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white hover:text-yellow-200">
              <Link href="/jobs">Job Opportunities</Link>
            </li>
            <li className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white  hover:text-yellow-200">
              <Link href="/events">Events</Link>
            </li>
            <li className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white  hover:text-yellow-200">
              <Link href="/programs">Programs</Link>
            </li>
            <li className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white  hover:text-yellow-200">
              <Link href="/about">About Us</Link>
            </li>
            <li className="block cursor-pointer rounded py-2 pl-3 pr-4 text-white  hover:text-yellow-200">
              <Link href="/join">Join</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
