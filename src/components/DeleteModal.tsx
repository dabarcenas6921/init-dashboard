"use client";
import { Modal } from "flowbite-react";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { api } from "~/utils/api";

export type SetPostingsStateType =
  | React.Dispatch<
      React.SetStateAction<
        {
          id: number;
          image: string;
          title: string;
          company: string;
          jobType: string;
          jobPosition: string;
          jobLocation: string;
          date: string;
          url: string;
        }[]
      >
    >
  | React.Dispatch<
      React.SetStateAction<
        {
          id: number;
          name: string;
          description: string;
          picture: string;
          location: string;
          program: string;
          time: Date;
          rsvpLink: string;
        }[]
      >
    >;

interface DeleteModalProps {
  cardType: string;
  isOpen: boolean;
  onClose: () => void;
  id?: number; // Optional id prop,
  setPostings: SetPostingsStateType;
}

export default function DeleteModal({
  cardType,
  isOpen,
  onClose,
  id,
  setPostings,
}: DeleteModalProps) {
  const route = cardType === "job" ? api.jobs : api.events;
  const mutation = route.delete.useMutation({
    onSuccess: (postings) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setPostings((currentPostings: any[]) =>
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        currentPostings.filter(
          (posting: { id: number }) => posting.id !== postings.id,
        ),
      );
    },
  });

  async function deleted() {
    if (id) {
      try {
        await mutation.mutateAsync({ id }); // Using mutateAsync to wait for completion
      } catch (error) {
        console.error(`Error deleting ${cardType} posting:`, error);
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
              Are you sure you want to delete this {cardType} posting?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                className="mb-2 mr-2 rounded-lg bg-primary_yellow px-5 py-2.5 text-sm 
                            font-medium text-black hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow"
                // eslint-disable-next-line @typescript-eslint/no-misused-promises
                onClick={deletedAndClose}
              >
                {"Yes, I'm sure"}
              </button>
              <button
                className="mb-2 mr-2 rounded-lg bg-primary_gray px-5 py-2.5 text-sm 
                font-medium text-black hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
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
