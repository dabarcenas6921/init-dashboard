import React, { useState } from "react";
import { Card } from "flowbite-react";
import DeleteModal from "./DeleteModal";
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
          <DeleteModal
            cardType="job"
            isOpen={isModalOpen && selectedJob === job}
            onClose={closeModal}
            id={job.id}
            setPostings={setJobPostings}
          />
          {isSignedIn && (
            <div className="flex justify-end text-white">
              <button
                onClick={() => openModal(job)}
                className="text-red-600 hover:text-red-900"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
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
