import { useState } from "react";
import { Modal } from "flowbite-react";
import { CldUploadWidget } from "next-cloudinary";

export default function EventModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <button
        className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-4 py-3 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow md:w-auto"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        Add Event
      </button>
      <Modal
        dismissible
        show={openModal}
        size="xl"
        popup
        onClose={() => setOpenModal(false)}
      >
        <div className="flex justify-end bg-primary">
          <button
            type="button"
            className="mr-5 mt-5 inline-flex items-center justify-center rounded-none"
            aria-label="Close"
            onClick={() => setOpenModal(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-white hover:text-primary_yellow"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <Modal.Body className="bg-primary text-primary_gray">
          <div className="space-y-6">
            <h3 className="flex justify-center text-xl font-medium text-primary_yellow">
              Add a New Event
            </h3>
            <form className="space-y-6" action="#">
              <div className="flex items-center justify-between whitespace-nowrap text-sm">
                <div className="mr-2 w-full">
                  <label htmlFor="name" className="mb-1 block font-medium">
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="block w-full rounded-sm text-sm text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                    placeholder="e.g. Workshop, Hackathon, ..."
                    required
                  />
                </div>
                <div className="ml-2 w-full">
                  <label htmlFor="program" className="mb-1 block font-medium">
                    Program
                  </label>
                  <select
                    id="program"
                    className="block w-full cursor-pointer rounded-sm text-sm text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                  >
                    <option className="italic">-- Select a Program --</option>
                    <option>Build</option>
                    <option>Code</option>
                    <option>Discover</option>
                    <option>Hack</option>
                    <option>Ignite</option>
                    <option>Launch</option>
                    <option>Reach</option>
                    <option>ShellHacks</option>
                    <option>Uplift</option>
                  </select>
                </div>
              </div>
              <CldUploadWidget
                options={{
                  sources: ["local", "google_drive", "dropbox", "url"],
                }}
                uploadPreset="<Upload Preset>"
              >
                {({ open }) => {
                  function handleOnClick(e: any) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <>
                      <div
                        onClick={handleOnClick}
                        className="flex cursor-pointer items-center justify-center border-2 border-dashed border-primary_gray py-10 text-center text-primary_gray hover:border-solid hover:border-primary_yellow hover:text-primary_yellow"
                      >
                        <svg
                          className="text-current-50 mr-1 h-8 w-8"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="m-0">Upload Event Image</p>
                      </div>
                    </>
                  );
                }}
              </CldUploadWidget>
              <div className="mr-2 w-full text-sm">
                <label htmlFor="location" className="mb-1 block font-medium">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  className="block w-full rounded-sm text-sm text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                  placeholder="e.g. MMC, BBC, Room, ..."
                  required
                />
              </div>
              <div className="mr-2 w-full text-sm">
                <label htmlFor="date-time" className="mb-1 block font-medium">
                  Date and Time
                </label>
                <input
                  type="datetime-local"
                  name="date-time"
                  id="date-tinme"
                  className="block w-full rounded-sm text-sm text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                  required
                />
              </div>
              <button
                type="submit"
                className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-4 py-3 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow dark:focus:ring-offset-gray-800"
              >
                Confirm Event
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
