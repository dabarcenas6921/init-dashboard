/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { useState } from "react";
import { Modal } from "flowbite-react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import axios from "axios";
import { api } from "~/utils/api";
import { type SetPostingsStateType } from "./DeleteModal";

interface IFormInputs {
  title: string;
  company: string;
  image: string;
  jobType: string;
  jobPosition: string;
  jobLocation: string;
  date: string;
  url: string;
}

interface AddModalProps {
  setPostings: SetPostingsStateType;
}

export default function JobModal({ setPostings }: AddModalProps) {
  const [openModal, setOpenModal] = useState(false);
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [filename, setFilename] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const { register, handleSubmit, reset } = useForm<IFormInputs>();
  const createJob = api.jobs.create.useMutation({
    onSuccess: (posting) => {
      setPostings((currentPostings: any) => [...currentPostings, posting]);
    },
  });
  const CLOUDINARY_NAME = process.env.NEXT_PUBLIC_CLOUD_NAME;

  const fileChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      if (!onLoadEvent.target) return;
      setImage(onLoadEvent.target.result);
    };

    if (event.target.files![0]) {
      reader.readAsDataURL(event.target.files![0] as Blob);
      const filenameWithExt = event.target.files![0].name;
      setFilename(filenameWithExt.substring(0, filenameWithExt.indexOf("."))); //removes extension from filename
    }
  };

  const onSubmit = async (data: IFormInputs) => {
    const formData = new FormData();
    formData.append("file", image as string);
    formData.append("upload_preset", "init_dashboard_upload");
    formData.append("public_id", filename);
    formData.append("folder", "init-dashboard/jobs");
    formData.append("filename_override", "true");
    let secure_url = "";

    try {
      const res = await axios.post(
        `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        },
      );

      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
      secure_url = res.data.secure_url;

      if (secure_url) {
        console.log("Image uploaded successfully!");
      }
    } catch (e) {
      console.log(e, "Error, image not uploaded!");
    }

    data = {
      ...data,
      image: secure_url,
      date: date!.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
      }),
    };

    createJob.mutate(data);
    setOpenModal(false);
    setImage(null);
    reset(); //reset method from react-hook-form; resets form fields
  };

  return (
    <>
      <button
        className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow md:w-auto lg:px-4 lg:py-3"
        type="button"
        onClick={() => setOpenModal(true)}
      >
        Add Job
      </button>
      <Modal
        show={openModal}
        size="xl"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Body className="bg-primary text-primary_gray">
          <div className="space-y-5">
            <div className="mt-5 flex items-center whitespace-nowrap">
              <h3 className="flex w-full justify-center text-xl font-medium text-primary_yellow">
                Add a New Job
              </h3>
              <div>
                <button
                  type="button"
                  className="flex items-center justify-center rounded-none"
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
            </div>
            <form
              // eslint-disable-next-line @typescript-eslint/no-misused-promises
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5"
              action="#"
            >
              <div className="space-y-5 whitespace-nowrap text-sm sm:flex sm:items-center sm:justify-between sm:space-y-0">
                <div className="w-full sm:mr-2">
                  <label htmlFor="title" className="mb-1 block font-medium">
                    Job Title
                  </label>
                  <input
                    {...register("title")}
                    type="text"
                    className="block w-full rounded-sm text-xs text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                    placeholder="e.g. SWE, Project Manager, ..."
                    required
                  />
                </div>
                <div className="w-full sm:ml-2">
                  <label htmlFor="company" className="mb-1 block font-medium">
                    Company
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    className="block w-full rounded-sm text-xs text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                    placeholder="e.g. Google, Amazon, ..."
                    required
                  />
                </div>
              </div>
              <label
                className={`${
                  image ? "block" : "flex"
                } w-full cursor-pointer items-center justify-center border-2 border-dashed border-primary_gray py-10 text-center text-primary_gray hover:border-solid hover:border-primary_yellow hover:text-primary_yellow`}
              >
                {image ? (
                  <>
                    <div className="-mt-5 mr-5 flex justify-end">
                      <button
                        type="button"
                        className="flex items-center justify-center rounded-none"
                        aria-label="Close"
                        onClick={(e: React.MouseEvent<Element, MouseEvent>) => {
                          e.preventDefault();
                          setImage(null);
                        }}
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
                    <div className="flex justify-center">
                      <Image
                        src={image as string}
                        alt="Uploaded Company Image"
                        width={200}
                        height={200}
                      />
                    </div>
                  </>
                ) : (
                  <>
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
                    <p className="m-0">Upload Company Image</p>
                  </>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={fileChangeHandler}
                ></input>
              </label>
              <div className="space-y-5 whitespace-nowrap text-sm sm:flex sm:items-center sm:justify-between sm:space-y-0">
                <div className="w-full sm:mr-2">
                  <label htmlFor="jobType" className="mb-1 block font-medium">
                    Fulltime/Parttime
                  </label>
                  <select
                    {...register("jobType")}
                    className="block w-full cursor-pointer rounded-sm text-xs text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                  >
                    <option className="italic">-- Select a Type --</option>
                    <option>Fulltime</option>
                    <option>Parttime</option>
                  </select>
                </div>
                <div className="w-full sm:ml-2">
                  <label
                    htmlFor="jobPosition"
                    className="mb-1 block font-medium"
                  >
                    Position
                  </label>
                  <select
                    {...register("jobPosition")}
                    className="block w-full cursor-pointer rounded-sm text-xs text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                  >
                    <option className="italic">-- Select a Position --</option>
                    <option>Internship</option>
                    <option>New-Grad</option>
                  </select>
                </div>
              </div>

              <div className="space-y-5 whitespace-nowrap text-sm sm:flex sm:items-center sm:justify-between sm:space-y-0">
                <div className="w-full text-sm sm:mr-2">
                  <label htmlFor="program" className="mb-1 block font-medium">
                    Location
                  </label>
                  <select
                    {...register("jobLocation")}
                    className="block w-full cursor-pointer rounded-sm text-xs text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                  >
                    <option className="italic">-- Select a Location --</option>
                    <option>On-Site</option>
                    <option>Hybrid</option>
                    <option>Remote</option>
                  </select>
                </div>
                <div className="w-full text-sm sm:ml-2">
                  <label htmlFor="date" className="mb-1 block font-medium">
                    Date Posted
                  </label>
                  <input
                    onChange={(e) => setDate(new Date(e.target.value))}
                    type="date"
                    className="block w-full rounded-sm text-xs text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                    required
                  />
                </div>
              </div>
              <div className="w-full text-sm">
                <label htmlFor="rsvpLink" className="mb-1 block font-medium">
                  Link to Job Posting
                </label>
                <input
                  {...register("url")}
                  type="url"
                  name="url"
                  id="url"
                  className="block w-full rounded-sm text-xs text-primary shadow-sm focus:border-none focus:ring-light_yellow"
                  placeholder="e.g. https://google.com/..."
                  min={new Date().toISOString().split("T")[0]}
                  required
                />
              </div>
              <button
                type="submit"
                className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-4 py-3 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow dark:focus:ring-offset-gray-800"
              >
                Confirm Job
              </button>
            </form>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
