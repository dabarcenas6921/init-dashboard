'use client';
import { Modal } from 'flowbite-react';
import React from 'react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import { api } from "~/utils/api";
import { useRouter } from 'next/router'
import type { JobPostingType } from "~/server/api/routers/jobRouter";

interface DeleteJobModalProps {
  isOpen: boolean;
  onClose: () => void;
  id?: number; // Optional id prop,
  jobPostings: JobPostingType[],
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
}

export default function DeleteJobModal({ isOpen, onClose, id, setJobPostings, jobPostings }: DeleteJobModalProps) {

  const mutation = api.jobs.delete.useMutation({
    onSuccess: (jobPostings) =>{
      setJobPostings(currentJobPostings => currentJobPostings.filter((job) => job.id !== jobPostings.id))
    }
  })


  async function deleted() {
    console.log("DELETED JOB:", id ?? "No ID available");
    
    if (id) {
      try {
        await mutation.mutateAsync({ id }); // Using mutateAsync to wait for completion
        console.log(jobPostings)
      } catch (error) {
        console.error("Error deleting job posting:", error);
        // Handle error if necessary
      }
    }
  }

  async function deletedAndClose() {
    await deleted();
    onClose();
  }
  
  return (
    <>
      <Modal 
        show={isOpen} 
        size="md" 
        onClose={onClose} 
        popup
        dismissible
        className={`${isOpen ? "overflow:initial" : "overflow-auto"}`}
      >
        <Modal.Header className="bg-primary" />
        <Modal.Body className="bg-primary">
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-red-600 dark:text-red-300" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this job posting?
            </h3>
            <div className="flex justify-center gap-4">
              <button 
                className="bg-primary_yellow mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm 
                            font-medium text-black hover:bg-yellow-500 focus:outline-none 
                            focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900" 
                            // eslint-disable-next-line @typescript-eslint/no-misused-promises
                            onClick={deletedAndClose}
                >
                {"Yes, I'm sure"}
              </button>
              <button 
                className="bg-gray-300 mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm 
                font-medium text-black hover:bg-gray-500 focus:outline-none 
                focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900" 
                onClick={onClose}  
              >
                {"No, cancel"}
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

// onClick={() => setOpenModal(false)}

