import React, { useState } from 'react';
import { Card } from 'flowbite-react';
import DeleteJobModal from './DeleteJobModal';
import Image from "next/image";
import { useUser } from '@clerk/nextjs';

export type Job = {
  id: number,
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
  setJobPostings: React.Dispatch<React.SetStateAction<{
    id: number;
    image: string;
    title: string;
    company: string;
    jobType: string;
    jobPosition: string;
    jobLocation: string;
    date: string;
    url: string;
}[]>>
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


  return (
    <div className={`w-full grid place-items-center grid-cols-1 min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3 `}>
      {jobPostings.map((job, index) => (
        <Card
          key={index}
          className={`max-w-xs min-w-[16rem] bg-[#121415] ${!isSignedIn && "pt-6"} border-[#121415] mb-8 max-[820px]:mb-8`}
        >
          <DeleteJobModal 
            isOpen={isModalOpen && selectedJob === job} 
            onClose={closeModal} 
            id={job.id} 
            setJobPostings={setJobPostings}
            />
          {isSignedIn && <div className="flex justify-end">
            <button
            onClick={() => openModal(job)}
            className="w-min rounded-lg bg-primary bg-opacity-70 p-2 text-red-600 hover:bg-opacity-80 hover:text-red-800"
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
        </div>}
          

          {/* Top of Card */}
          <div className="flex items-center mb-1 mt-[-0.5em]">
            <div className="">
              <Image className="w-20 h-20 mr-4 max-[428px]:w-16 max-[428px]:h-16" src={job.image} alt={job.title} width={1000} height={1000} />
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
              className="rounded block bg-primary_yellow px-5 py-2 max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem] font-bold text-primary text-sm hover:bg-light_yellow focus:ring-light_yellow"
            >
              Apply
            </a>
          </div>
        </Card>
      ))}
    </div>
  );
}
