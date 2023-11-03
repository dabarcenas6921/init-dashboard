"use client";
import React, { useState } from "react";
import { Dropdown } from 'flowbite-react';
import SearchInput from '~/components/SearchInput';
import type { FilterInput } from '~/components/FilterJobsCard';
import FilterJobsCard from '~/components/FilterJobsCard'
import JobCard from '~/components/JobCard';
import { useSearchParams } from "next/navigation";
import { api } from "~/utils/api";


// Define a type for the selected filters
export type SelectedFilters = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};



export default function Jobs() {

   ///////////////////////////////
  // LOGIC FOR SEARCHING JOBS  //
  //////////////////////////////

  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null
  const encodedSearchQuery = encodeURI(searchQuery ?? "")

  const input = { q: encodedSearchQuery };
  const query = api.jobs.getByQuery.useQuery(input);

  ///////////////////////////////
  // LOGIC FOR FILTERING JOBS //
  //////////////////////////////


  const [selectedFilters, setSelectedFilters] = useState<FilterInput>({
    jobType: [],
    jobPosition: [],
    jobLocation: [],
  });

  // console.log(selectedFilters)
  const filteredJobs = api.jobs.filterBySelectedFilters.useQuery(selectedFilters ?? {});
  
  const resetFilters = () => {
    // Reset selected filters to their initial empty values
    setSelectedFilters({
      jobType: [],
      jobPosition: [],
      jobLocation: [],
    });
  };
  

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
                    <FilterJobsCard  
                      onFilterChange={setSelectedFilters}
                      onResetFilters={resetFilters}
                    />
                
              </Dropdown>
          </div>

          {/* Normal Screen Sizes */}
          <div className="hidden md:block mr-[5%]">
              <FilterJobsCard
                onFilterChange={setSelectedFilters}
                onResetFilters={resetFilters}
              />
          </div>

          <div className="w-full">
              {query.data && query.data.length > 0 ? (
                <JobCard jobPostings={query.data} />
              ) : (
                <p>No matching job postings.</p>
              )}
          </div>

        </div>   
        
      </div>
      
    </main>
    
    
  );
}




/*

<div className="w-full">
  {filtersApplied ? (
    filteredJobPostings.length > 0 ? (
      <JobCard jobPostings={filteredJobPostings} />
    ) : (
      <p>No matching job postings based on filters.</p>
    )
  ) : (
    query.data && query.data.length > 0 ? (
      <JobCard jobPostings={query.data} />
    ) : (
      <p>No matching job postings based on search.</p>
    )
  )}
</div>

*/