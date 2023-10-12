'use client';

import { Card, Dropdown } from 'flowbite-react';


export default function UserProfileCard() {
  return (
    <Card>
      <div className="text-black flex justify-end px-4 pt-4">
        <Dropdown
          inline
          label=""
          className=""
        >
          <Dropdown.Item>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              <p>
                Edit
              </p>
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              <p>
                Export Data
              </p>
            </a>
          </Dropdown.Item>
          <Dropdown.Item>
            <a
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              href="#"
            >
              <p>
                Delete
              </p>
            </a>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt="Bonnie image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src="/images/people/profile-picture-3.jpg"
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          Bonnie Green
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Visual Designer
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6">
          <a
            className="inline-flex items-center rounded-lg bg-cyan-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
            href="#"
          >
            <p>
              Add friend
            </p>
          </a>
          <a
            className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            href="#"
          >
            <p>
              Message
            </p>
          </a>
        </div>
      </div>
    </Card>
  )
}


