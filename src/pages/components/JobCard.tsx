'use client';

import { Card, Dropdown } from 'flowbite-react';


export default function UserProfileCard() {
  return (
    <Card className="max-w-xs min-w-[16rem] bg-[#1A1E22] flex-grow mr-4 max-[820px]:mb-8">
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
      {/* Top of Card */}
      <div className="flex">
        <div className="">
          <img className="w-10" src="https://www.freepnglogos.com/uploads/netflix-logo-app-png-16.png"></img>
        </div>
        <div>
          <h3 className="text-white">Job Title</h3>
          <p>Company Name</p>
        </div>
        
      </div>
    </Card>
  )
}


