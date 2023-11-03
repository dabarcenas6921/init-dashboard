import React from 'react'
import { useState } from 'react';

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
  jobType: string[]; // Replace with the actual type for jobType
  jobPosition: string[]; // Replace with the actual type for jobPosition
  jobLocation: string[]; // Replace with the actual type for jobLocation
};

type FilterJobsCardProps = {
  onFilterChange: (filterInput: FilterInput) => void;
  onResetFilters: () => void; // Define a prop for the reset filters function
}

const FilterCard = ({ onFilterChange, onResetFilters }: FilterJobsCardProps) => {
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

  const handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void = (e) => {
    const { name, checked } = e.target;
    setCheckboxState({ ...checkboxState, [name]: checked });

    if (name === 'fulltime' || name === 'partTime') {
      if (checked) {
        setJobTypeArr((prevArr) => [...prevArr, name]);
      } else {
        setJobTypeArr((prevArr) => prevArr.filter((item) => item !== name));
      }
    }

    if (name === 'internship' || name === 'newGrad') {
      if (checked) {
        setJobPosTypeArr((prevArr) => [...prevArr, name]);
      } else {
        setJobPosTypeArr((prevArr) => prevArr.filter((item) => item !== name));
      }
    }

    if (name === 'onSite' || name === 'hybrid' || name === 'remote') {
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
    
  };

    
  return (
      <div className="border-2 border-[#121415] bg-[#121415] w-48 h-[485px] p-6 rounded-md">

        <div className="flex justify-between items-baseline">
          <h2 className="text-xl mb-4">Filter</h2>
          {/* Reset Filters Button */}
          <p 
              className="text-xs text-primary_yellow cursor-pointer "
              onClick={resetFilters}
          >
              Clear filters
          </p>
        </div>
        <form action="submit">

          {/* Job Hours Container */}
          <div className="mb-2">
            <h3 className="text-base mb-2">Job Type</h3>
            {/* Full time box */}
            <div className="mb-1.5 flex items-center">
              <input 
              type="checkbox" 
              name="fulltime" 
              id="fulltime"
              className="mr-1.5 rounded-sm cursor-pointer" 
              checked={checkboxState.fulltime}
              onChange={handleCheckboxChange}/>
              
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="fulltime">Fulltime</label>
            </div>
            {/* Part time box */}
            <div className="mb-1.5 flex items-center">
              <input 
              type="checkbox" 
              name="partTime" 
              id="partTime"
              className="mr-1.5 rounded-sm cursor-pointer" 
              checked={checkboxState.partTime}
              onChange={handleCheckboxChange}/>
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="partTime">Part-time</label>
            </div>
          </div>

          {/* Job Type Container */}
          <div className="mb-2">
            <h3 className="text-base mb-2">Position Type</h3>
            {/* Internship box */}
            <div className="mb-1.5 flex items-center">
              <input 
              type="checkbox" 
              name="internship" 
              id="internship"
              className="mr-1.5 rounded-sm cursor-pointer"
              checked={checkboxState.internship}
              onChange={handleCheckboxChange} />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="internship">Internship</label>
            </div>
            {/* New-grad box */}
            <div className="mb-1.5 flex items-center">
              <input 
              type="checkbox" 
              name="newGrad" 
              id="newGrad"
              className="mr-1.5 rounded-sm cursor-pointer"
              checked={checkboxState.newGrad}
              onChange={handleCheckboxChange} />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="newGrad">New-grad</label>
            </div>
          </div>

          {/* Job location Container */}
          <div className="mb-9">
            <h3 className="text-base mb-2">Job location</h3>
            {/* On-site box */}
            <div className="mb-1.5 flex items-center">
              <input 
              type="checkbox" 
              name="onSite" 
              id="onSite"
              className="mr-1.5 rounded-sm cursor-pointer" 
              checked={checkboxState.onSite}
              onChange={handleCheckboxChange}/>
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="onSite">On-site</label>
            </div>
            {/* Hybrid box */}
            <div className="mb-1.5 flex items-center">
              <input 
              type="checkbox" 
              name="hybrid" 
              id="hybrid" 
              className="mr-1.5 rounded-sm cursor-pointer"
              checked={checkboxState.hybrid}
              onChange={handleCheckboxChange} />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="hybrid">Hybrid</label>
            </div>
            {/* New-grad box */}
            <div className="mb-1.5 flex items-center">
              <input 
              type="checkbox" 
              name="remote" 
              id="remote"
              className="mr-1.5 rounded-sm cursor-pointer"
              checked={checkboxState.remote}
              onChange={handleCheckboxChange} />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="remote">Remote</label>
            </div>

          </div>
          
          {/* Apply Filter Button */}
          <button
            type="button"
            className="bg-primary_yellow mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm 
                        font-medium text-black hover:bg-yellow-500 focus:outline-none 
                        focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          onClick={handleSubmit}
          >
            Apply Filter
          </button>

        </form>

      </div>
  )
};

export default FilterCard