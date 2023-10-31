import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-gray-200 bg-primary pb-8 pt-4">
      <div className="mx-auto flex flex-wrap items-center justify-between">
        <Link href="/">
          <span className="order-1 flex cursor-pointer items-center md:order-1">
            <span className="font-bulky self-center whitespace-nowrap text-3xl text-white  hover:text-yellow-200">
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
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } relative z-0 w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col bg-gray-900 p-4 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-primary">
            <li className="font-bulky block cursor-pointer rounded py-2 pl-3 pr-4 text-white hover:text-yellow-200">
              <Link href="/jobs">Job Opportunities</Link>
            </li>
            <li className="font-bulky block cursor-pointer rounded py-2 pl-3 pr-4 text-white  hover:text-yellow-200">
              <Link href="/events">Events</Link>
            </li>
            <li className="font-bulky block cursor-pointer rounded py-2 pl-3 pr-4 text-white  hover:text-yellow-200">
              <Link href="/programs">Programs</Link>
            </li>
            <li className="font-bulky block cursor-pointer rounded py-2 pl-3 pr-4 text-white  hover:text-yellow-200">
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } relative z-10 order-2 flex w-full flex-row justify-center space-x-4 border-gray-800 bg-gray-900 p-4 md:flex md:w-auto md:flex-row md:bg-primary`}
        >
          <a
            href="https://www.instagram.com/initofficial/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-tr from-orange-500 to-purple-500 hover:from-purple-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a
            href="https://discord.gg/init"
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-400 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
              viewBox="0 0 24 24"
            >
              <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/initofficial/"
            rel="noopener noreferrer"
            target="_blank"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
          <a
            href="https://airtable.com/appkfpQOssQZfmORj/shrNlrSaT073i6fog"
            rel="noopener noreferrer"
            target="_blank"
            className="rounded bg-primary_yellow px-5 py-2 font-bold text-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
          >
            Join
          </a>
        </div>
      </div>
    </nav>
  );
}
