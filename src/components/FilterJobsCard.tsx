import React from 'react'
import { useState } from 'react';
import { setWasSearchBtnClicked } from './SearchInput';

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
}

/*
 * Defined getters and setters to
 * determine if the user filtered
 * for a job
 *
*/
let wasApplyFilterClicked = false

export function setWasApplyFilterClicked(value: boolean) {
  wasApplyFilterClicked = value
}

export function getWasApplyFilterClicked() {
  return wasApplyFilterClicked
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

  /*
   * These will be used to set the selected filters 
   */
  const [jobTypeArr, setJobTypeArr] = useState<string[]>([]);
  const [jobPosTypeArr, setJobPosTypeArr] = useState<string[]>([]);
  const [jobLocArr, setJobLocArr] = useState<string[]>([]);


  /* Populates and depopulates the jobTypeArr, jobPositionArr, and jobLocArr
   * whenever a checkbox is checked or unchecked
   */ 
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


  // Unchecks all the filters and sets the selected filters to empty
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

    onResetFilters();  // refer to onResetFilters in jobs.tsx

    setWasApplyFilterClicked(false)
    setWasSearchBtnClicked(false)
  };


  // Ran when the Apply Filter button is clicked
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FilterInput object based on selected values
    const filterInput: FilterInput = {
      jobType: jobTypeArr,
      jobPosition: jobPosTypeArr,
      jobLocation: jobLocArr,
    };

    onFilterChange(filterInput);  // onFilterChange comes from setSelectedFilters in jobs.tsx

    setWasApplyFilterClicked(true)
    setWasSearchBtnClicked(false)
    
  };

    
  return (
      <div className="border-2 border-[#121415] bg-[#121415] w-48 h-[485px] p-6 rounded-md">

        <div className="flex justify-between items-baseline">
          <h2 className="text-xl mb-4">Filter</h2>
          {/* Reset Filters Button */}
          <p 
              className="text-xs text-primary_yellow cursor-pointer hover:underline"
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
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="partTime">Parttime</label>
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
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="newGrad">New-Grad</label>
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
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="onSite">On-Site</label>
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
            id="filter-btn"
            type="button"
            className="bg-primary_yellow mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm 
                        font-medium text-black hover:bg-light_yellow focus:ring-light_yellow dark:focus:ring-yellow-900"
          onClick={handleSubmit}
          >
            Apply Filter
          </button>

        </form>

      </div>
  )
};

export default FilterCard