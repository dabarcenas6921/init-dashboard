import React from "react";
import { useState } from "react";
import { setWasSearchBtnClicked } from "./SearchInput";

interface CheckboxState {
  fulltime: boolean;
  partTime: boolean;
  internship: boolean;
  newGrad: boolean;
  onSite: boolean;
  hybrid: boolean;
  remote: boolean;
}

export type FilterInput = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};

type FilterJobsCardProps = {
  onFilterChange: (filterInput: FilterInput) => void;
  onResetFilters: () => void;
};

let wasApplyFilterClicked = false;

export function setWasApplyFilterClicked(value: boolean) {
  wasApplyFilterClicked = value;
}

export function getWasApplyFilterClicked() {
  return wasApplyFilterClicked;
}

const FilterCard = ({
  onFilterChange,
  onResetFilters,
}: FilterJobsCardProps) => {
  const [checkboxState, setCheckboxState] = useState<CheckboxState>({
    fulltime: false,
    partTime: false,
    internship: false,
    newGrad: false,
    onSite: false,
    hybrid: false,
    remote: false,
  });

  const [jobTypeArr, setJobTypeArr] = useState<string[]>([]);
  const [jobPosTypeArr, setJobPosTypeArr] = useState<string[]>([]);
  const [jobLocArr, setJobLocArr] = useState<string[]>([]);

  const handleCheckboxChange: (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void = (e) => {
    const { name, checked } = e.target;
    setCheckboxState({ ...checkboxState, [name]: checked });

    if (name === "fulltime" || name === "partTime") {
      if (checked) {
        setJobTypeArr((prevArr) => [...prevArr, name]);
      } else {
        setJobTypeArr((prevArr) => prevArr.filter((item) => item !== name));
      }
    }

    if (name === "internship" || name === "newGrad") {
      if (checked) {
        setJobPosTypeArr((prevArr) => [...prevArr, name]);
      } else {
        setJobPosTypeArr((prevArr) => prevArr.filter((item) => item !== name));
      }
    }

    if (name === "onSite" || name === "hybrid" || name === "remote") {
      if (checked) {
        setJobLocArr((prevArr) => [...prevArr, name]);
      } else {
        setJobLocArr((prevArr) => prevArr.filter((item) => item !== name));
      }
    }
  };

  const resetFilters = () => {
    setCheckboxState({
      fulltime: false,
      partTime: false,
      internship: false,
      newGrad: false,
      onSite: false,
      hybrid: false,
      remote: false,
    });
    setJobTypeArr([]);
    setJobPosTypeArr([]);
    setJobLocArr([]);

    onResetFilters();

    setWasApplyFilterClicked(false);
    setWasSearchBtnClicked(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FilterInput object based on selected values
    const filterInput: FilterInput = {
      jobType: jobTypeArr,
      jobPosition: jobPosTypeArr,
      jobLocation: jobLocArr,
    };

    onFilterChange(filterInput);

    setWasApplyFilterClicked(true);
    setWasSearchBtnClicked(false);
  };

  return (
    <div className="h-[485px] w-48 rounded-md border-2 border-[#121415] bg-[#121415] p-6">
      <div className="flex items-baseline justify-between">
        <h2 className="mb-4 text-xl">Filter</h2>
        {/* Reset Filters Button */}
        <p
          className="cursor-pointer text-xs text-primary_yellow hover:text-light_yellow hover:underline"
          onClick={resetFilters}
        >
          Clear filters
        </p>
      </div>
      <form action="submit">
        {/* Job Hours Container */}
        <div className="mb-2">
          <h3 className="mb-2 text-base">Job Type</h3>
          {/* Full time box */}
          <div className="mb-1.5 flex items-center">
            <input
              type="checkbox"
              name="fulltime"
              id="fulltime"
              className="mr-1.5 cursor-pointer rounded-sm"
              checked={checkboxState.fulltime}
              onChange={handleCheckboxChange}
            />

            <label
              className="cursor-pointer pt-[0.1rem] text-sm font-normal"
              htmlFor="fulltime"
            >
              Fulltime
            </label>
          </div>
          {/* Part time box */}
          <div className="mb-1.5 flex items-center">
            <input
              type="checkbox"
              name="partTime"
              id="partTime"
              className="mr-1.5 cursor-pointer rounded-sm"
              checked={checkboxState.partTime}
              onChange={handleCheckboxChange}
            />
            <label
              className="cursor-pointer pt-[0.1rem] text-sm font-normal"
              htmlFor="partTime"
            >
              Parttime
            </label>
          </div>
        </div>

        {/* Job Type Container */}
        <div className="mb-2">
          <h3 className="mb-2 text-base">Position Type</h3>
          {/* Internship box */}
          <div className="mb-1.5 flex items-center">
            <input
              type="checkbox"
              name="internship"
              id="internship"
              className="mr-1.5 cursor-pointer rounded-sm"
              checked={checkboxState.internship}
              onChange={handleCheckboxChange}
            />
            <label
              className="cursor-pointer pt-[0.1rem] text-sm font-normal"
              htmlFor="internship"
            >
              Internship
            </label>
          </div>
          {/* New-grad box */}
          <div className="mb-1.5 flex items-center">
            <input
              type="checkbox"
              name="newGrad"
              id="newGrad"
              className="mr-1.5 cursor-pointer rounded-sm"
              checked={checkboxState.newGrad}
              onChange={handleCheckboxChange}
            />
            <label
              className="cursor-pointer pt-[0.1rem] text-sm font-normal"
              htmlFor="newGrad"
            >
              New-Grad
            </label>
          </div>
        </div>

        {/* Job location Container */}
        <div className="mb-9">
          <h3 className="mb-2 text-base">Job location</h3>
          {/* On-site box */}
          <div className="mb-1.5 flex items-center">
            <input
              type="checkbox"
              name="onSite"
              id="onSite"
              className="mr-1.5 cursor-pointer rounded-sm"
              checked={checkboxState.onSite}
              onChange={handleCheckboxChange}
            />
            <label
              className="cursor-pointer pt-[0.1rem] text-sm font-normal"
              htmlFor="onSite"
            >
              On-Site
            </label>
          </div>
          {/* Hybrid box */}
          <div className="mb-1.5 flex items-center">
            <input
              type="checkbox"
              name="hybrid"
              id="hybrid"
              className="mr-1.5 cursor-pointer rounded-sm"
              checked={checkboxState.hybrid}
              onChange={handleCheckboxChange}
            />
            <label
              className="cursor-pointer pt-[0.1rem] text-sm font-normal"
              htmlFor="hybrid"
            >
              Hybrid
            </label>
          </div>
          {/* New-grad box */}
          <div className="mb-1.5 flex items-center">
            <input
              type="checkbox"
              name="remote"
              id="remote"
              className="mr-1.5 cursor-pointer rounded-sm"
              checked={checkboxState.remote}
              onChange={handleCheckboxChange}
            />
            <label
              className="cursor-pointer pt-[0.1rem] text-sm font-normal"
              htmlFor="remote"
            >
              Remote
            </label>
          </div>
        </div>

        {/* Apply Filter Button */}
        <button
          id="filter-btn"
          type="button"
          className="mb-2 mr-2 rounded-lg bg-primary_yellow px-5 py-2.5 text-sm 
                        font-medium text-black hover:bg-light_yellow focus:ring-light_yellow dark:focus:ring-yellow-900"
          onClick={handleSubmit}
        >
          Apply Filter
        </button>
      </form>
    </div>
  );
};

export default FilterCard;
