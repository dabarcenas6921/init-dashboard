import { Card } from "flowbite-react";
import Image from "next/image";

export type Company = {
  image: string;
  name: string;
  id: number;
};

type CompanyCardProps = {
  company: Company[];
  setJobPostings: React.Dispatch<
    React.SetStateAction<
      {
        image: string;
        company: string;
        id: number;
        date: string;
        title: string;
        jobType: string;
        jobPosition: string;
        jobLocation: string;
        url: string;
      }[]
    >
  >;
  setGroupByCompany: React.Dispatch<React.SetStateAction<boolean>>;
  fetchJobsByCompany: (companyName: string) => void;
};

let wasViewJobsClicked = false;

export function setWasViewJobsClicked(value: boolean) {
  wasViewJobsClicked = value;
}

export function getWasViewJobsClicked() {
  return wasViewJobsClicked;
}

export default function CompanyCard({
  company,
  setJobPostings,
  setGroupByCompany,
  fetchJobsByCompany,
}: CompanyCardProps) {
  function handleSubmit(companyName: string) {
    setJobPostings((prevArr) =>
      prevArr.filter((item) => item.company === companyName),
    );
    fetchJobsByCompany(companyName);
    setGroupByCompany(false);
  }

  return (
    <div
      className={`grid w-full grid-cols-1 place-items-center min-[980px]:grid-cols-2 min-[1320px]:grid-cols-3  `}
    >
      {company.map((companyCard, index) => (
        <Card
          key={index}
          className=" mb-8  h-[250px] w-[315px] border-[#121415] bg-[#121415] max-[820px]:mb-8"
        >
          <div className="mb-1 mt-[-0.5em] flex items-center self-center">
            <div className="">
              <Image
                className=" mt-5 h-[125px] w-full items-center justify-center "
                width={125}
                height={125}
                src={companyCard.image}
                alt={companyCard.name}
              />
            </div>
          </div>
          <div className="mb-4 flex flex-col items-center justify-between gap-5">
            <h2 className=" w-full flex-nowrap text-center ">
              {companyCard.name}
            </h2>
            <button
              onClick={() => handleSubmit(companyCard.name)}
              value={companyCard.name}
              rel="noopener noreferrer"
              className="block h-[36px] w-full flex-nowrap rounded bg-primary_yellow px-4  py-2 text-sm font-bold text-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600 max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem]"
            >
              Jobs Posted: {companyCard.id}
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
