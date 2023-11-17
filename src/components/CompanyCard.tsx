import { Card } from "flowbite-react";
import Image from "next/image";

export type Company = {
  image: string;
  name: string;
  id: number;
};

type CompanyCardProps = {
  company: Company[];
};

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <div
      className={`flex w-full flex-wrap items-start justify-evenly ${
        company.length === 2 ? "xl:justify-evenly" : "xl:justify-between"
      }`}
    >
      {company.map((companyCard, index) => (
        <Card
          key={index}
          className="mb-8 min-w-[16rem] max-w-xs border-[#121415] bg-[#121415] max-[820px]:mb-8"
        >
          <div className="mb-1 mt-[-0.5em] flex items-center">
            <div className="">
              <img
                className="mr-4 h-20 w-20 max-[428px]:h-16 max-[428px]:w-16"
                src={companyCard.image}
                alt={companyCard.name}
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <h3 className="mr-8 max-[428px]:text-[0.7rem]">
              {companyCard.name}
            </h3>
            <button
              //onClick={() => setSearchQuery(companyCard.name)}
              value={companyCard.name}
              rel="noopener noreferrer"
              className="block rounded bg-primary_yellow px-5 py-2 text-sm font-bold text-primary hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-gray-600 max-[428px]:px-4 max-[428px]:py-1 max-[428px]:text-[0.8rem]"
            >
              Jobs Posted: {companyCard.id}
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}
