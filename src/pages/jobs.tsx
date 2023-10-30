"use client";
import React, { useState, useEffect } from "react";
import { Dropdown } from 'flowbite-react';
import { jobPostings  } from '../Data/jobPostingsData'
import SearchInput from '~/components/SearchInput';
import FilterJobsCard from '~/components/FilterJobsCard';
import JobCard from '~/components/JobCard';
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

// Define a type for the selected filters
export type SelectedFilters = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};

// Fetches Job Posts 
const fetchPosts = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default function Jobs() {

  ///////////////////////////////
  // LOGIC FOR FILTERING JOBS //
  //////////////////////////////

  // State to store selected filter values
  const [selectedFilters, setSelectedFilters] = useState({
    jobType: [] as string[],
    jobPosition: [] as string[],
    jobLocation: [] as string[],
  });

  // State to store the filtered job postings
  const [filteredJobPostings, setFilteredJobPostings] = useState(jobPostings);

  // Function to handle checkbox changes
  const handleFilterChange = (category: keyof SelectedFilters, value: string) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      if (updatedFilters[category].includes(value)) {
        // If the value is already in the array, remove it
        updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
      } else {
        // If the value is not in the array, add it
        updatedFilters[category] = [...updatedFilters[category], value];
      }
      return updatedFilters;
    });
  };

  // Function to filter job postings based on selected filters
  const filterJobPostings = () => {
    const { jobType, jobPosition, jobLocation } = selectedFilters;
    const filtered = jobPostings.filter((job) => {
      const typeMatches = jobType.length === 0 || jobType.includes(job.jobType);
      const positionMatches = jobPosition.length === 0 || jobPosition.includes(job.jobPosition);
      const locationMatches = jobLocation.length === 0 || jobLocation.includes(job.jobLocation);
      return typeMatches && positionMatches && locationMatches;
    });
    setFilteredJobPostings(filtered);
  };

  // Function to reset filters and show all job postings
  const resetFilters = () => {
    setSelectedFilters({
      jobType:     [] as string[],
      jobPosition: [] as string[],
      jobLocation: [] as string[],
    });
    // Uncheck the checkboxes by setting their checked state to false
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      const inputCheckbox = checkbox as HTMLInputElement;
      inputCheckbox.checked = false;
    });
    setFilteredJobPostings(jobPostings);
  };

  ///////////////////////////////
  // LOGIC FOR SEARCHING JOBS  //
  //////////////////////////////
  

  return (
    <main className="min-h-screen">

      {/* Container to keep everything in line */}
      <div className="p-4 max-w-screen-xl mx-auto">

        {/* Title and Search Bar */}
        <div className="flex flex-col md:flex-row items-start mb-4 md:mb-6">
          <div className="mb-8 md:mr-[5%] max-[766px]:mb-4 mx-auto">
            <h1 className="w-48 text-3xl text-center md:text-left">Job Board</h1>
          </div>
          <div className="w-full flex justify-center">
            <SearchInput/>
          </div>
        </div>
        
        {/* Filter Card and Jobs container */}
        <div className="flex flex-col md:flex-row">
  
          {/* Dropdown for small Screen sizes */}
          <div className="md:hidden mx-auto mb-8">
              <Dropdown className="text-white bg-[#1A1E22]" label="Filter" placement="bottom" inline>
                  {selectedFilters ? (
                    <FilterJobsCard
                      handleFilterChange={handleFilterChange}
                      filterJobPostings={filterJobPostings}  
                      resetFilters={resetFilters}
                      selectedFilters={selectedFilters}
                    />
                  ): null}
                  
              </Dropdown>
          </div>

          {/* Normal Screen Sizes */}
          <div className="hidden md:block mr-[5%]">
            {selectedFilters ? (
              <FilterJobsCard
                handleFilterChange={handleFilterChange}
                filterJobPostings={filterJobPostings}  
                resetFilters={resetFilters}
                selectedFilters={selectedFilters}
              />
            ): null}
          </div>

          <div className="w-full">
              {filteredJobPostings.length > 0 ? (
                <JobCard jobPostings={filteredJobPostings} />
              ) : (
                <p>No matching job postings.</p>
              )}
          </div>

        </div>   
        
      </div>
      
    </main>
    
    
  );
}