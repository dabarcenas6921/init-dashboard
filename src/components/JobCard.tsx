import React, { useState } from "react";
import { Card, Dropdown } from "flowbite-react";
import DeleteJobModal from "./DeleteJobModal";
import Image from "next/image";
import { useUser } from "@clerk/nextjs";

export type Job = {
  id: number;
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
  setJobPostings: React.Dispatch<
    React.SetStateAction<
      {
        date: string;
        id: number;
        image: string;
        title: string;
        company: string;
        jobType: string;
        jobPosition: string;
        jobLocation: string;
        url: string;
      }[]
    >
  >;
};

export default function JobCard({ jobPostings, setJobPostings }: JobCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const { isSignedIn } = useUser();

  const openModal = (job: Job) => {
    setIsModalOpen(true);
    setSelectedJob(job);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
  };

  // if (!Array.isArray(jobPostings) || jobPostings.length === 0) {
  //   return <p>No matching job postingssss.</p>;
  // }

  return (
    <div
      className={`grid w-full grid-cols-1 place-items-center min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3 `}
    >
      {jobPostings.map((job, index) => (
        <Card
          key={index}
          className={`min-w-[16rem] max-w-xs bg-[#121415] ${
            !isSignedIn && "pt-3"
          } mb-8 border-[#121415] max-[820px]:mb-8`}
        >
          <DeleteJobModal
            isOpen={isModalOpen && selectedJob === job}
            onClose={closeModal}
            id={job.id}
            setJobPostings={setJobPostings}
          />
          {isSignedIn && (
            <div className="flex justify-end px-4 text-white">
              <Dropdown inline label="" className="">
                <Dropdown.Item>
                  <a className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white">
                    <p>Edit</p>
                  </a>
                </Dropdown.Item>

                <Dropdown.Item onClick={() => openModal(job)}>
                  <a className="hover.bg-gray-100 dark:hover-bg-gray-600 block px-4 py-2 text-sm text-red-600 dark:text-gray-200 dark:hover:text-white">
                    <p>Delete</p>
                  </a>
                </Dropdown.Item>
              </Dropdown>
            </div>
          )}

          {/* Top of Card */}
          <div className="mb-1 mt-[-0.5em] flex items-center">
            <div className="">
              <Image
                className="mr-4 h-20 w-20 max-[428px]:h-16 max-[428px]:w-16"
                src={job.image}
                alt={job.title}
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <h3 className="mb-1 text-lg text-white max-[428px]:text-[0.84rem]">
                {job.title}
              </h3>
              <p className="text-sm max-[428px]:text-[0.7rem]">{job.company}</p>
            </div>
          </div>

          {/* Job Roles Pills */}
          <div className="mb-6">
            <span className="mr-2 rounded bg-blue-100 px-2.5 py-1.5 text-sm font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300 max-[428px]:text-[9.25px]">
              {job.jobType}
            </span>

            <span className="mr-2 rounded bg-green-100 px-2.5 py-1.5 text-sm font-medium text-green-800 dark:bg-green-900  dark:text-green-300 max-[428px]:text-[9.25px]">
              {job.jobPosition}
            </span>

            <span className="mr-2 rounded bg-yellow-100 px-2.5 py-1.5 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 max-[428px]:text-[9.25px]">
              {job.jobLocation}
            </span>
          </div>

          {/* Date posted and Apply Button */}
          <div className="mb-4 flex items-center">
            <h3 className="mr-8 max-[428px]:text-[0.7rem]">{job.date}</h3>
            <a
              href={job.url}
              rel="noopener noreferrer"
              target="_blank"
              className="block rounded bg-primary_yellow px-5 py-2 text-sm font-bold text-primary hover:bg-light_yellow focus:ring-light_yellow max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem]"
            >
              Apply
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
