import React, { useState } from 'react';
import { Card, Dropdown } from 'flowbite-react';
import DeleteJobModal from './DeleteJobModal';

export type Job = {
  id?: number,
  image: string;
  title: string;
  company: string;
  jobType: string;
  jobPosition: string;
  jobLocation: string;
  date: string;
  url: string;
};

type JobCardProps = {
  jobPostings: Job[];
};

export default function JobCard({ jobPostings }: JobCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (job: Job) => {
    setIsModalOpen(true);
    console.log("Selected Job:", job.id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!Array.isArray(jobPostings) || jobPostings.length === 0) {
    return <p>No matching job postings.</p>;
  }

  return (
    <div className={`w-full flex flex-wrap items-start justify-evenly ${jobPostings.length === 2 ? 'xl:justify-evenly' : 'xl:justify-between'}`}>
      <DeleteJobModal isOpen={isModalOpen} onClose={closeModal} />
      {jobPostings.map((job, index) => (
        <Card
          key={index}
          className="max-w-xs min-w-[16rem] bg-[#121415] border-[#121415] mb-8 max-[820px]:mb-8"
        >
          <div className="text-white flex justify-end px-4">
            <Dropdown inline label="" className="">
              <Dropdown.Item>
                <a
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                  href="#"
                >
                  <p>Edit</p>
                </a>
              </Dropdown.Item>

              <Dropdown.Item onClick={() => openModal(job)}>
                <a
                  className="block px-4 py-2 text-sm text-red-600 hover.bg-gray-100 dark:text-gray-200 dark:hover-bg-gray-600 dark:hover:text-white"
                  href="#"
                >
                  <p>Delete</p>
                </a>
              </Dropdown.Item>
            </Dropdown>
          </div>
          

          {/* Top of Card */}
          <div className="flex items-center mb-1 mt-[-0.5em]">
            <div className="">
              <img className="w-20 h-20 mr-4 max-[428px]:w-16 max-[428px]:h-16" src={job.image} alt={job.title} />
            </div>
            <div>
              <h3 className="text-white text-lg max-[428px]:text-[0.84rem] mb-1">{job.title}</h3>
              <p className="text-sm max-[428px]:text-[0.7rem]">{job.company}</p>
            </div>
          </div>

          {/* Job Roles Pills */}
          <div className="mb-6">
            <span
              className="bg-blue-100 text-blue-800 text-sm max-[428px]:text-[9.25px] font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-blue-900 dark:text-blue-300"
            >
              {job.jobType}
            </span>

            <span
              className="bg-green-100 text-green-800 text-sm max-[428px]:text-[9.25px] font-medium mr-2 px-2.5 py-1.5 rounded  dark:bg-green-900 dark:text-green-300"
            >
              {job.jobPosition}
            </span>

            <span
              className="bg-yellow-100 text-yellow-800 text-sm max-[428px]:text-[9.25px] font-medium mr-2 px-2.5 py-1.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
            >
              {job.jobLocation}
            </span>

          </div>

          {/* Date posted and Apply Button */}
          <div className="flex items-center mb-4">
            <h3 className="mr-8 max-[428px]:text-[0.7rem]">{job.date}</h3>
            <a
              href={job.url}
              rel="noopener noreferrer"
              target="_blank"
              className="rounded block bg-primary_yellow px-5 py-2 max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem] font-bold text-primary text-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Apply
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
