"use client";
import React, { useEffect, useState } from "react";
import { Dropdown } from "flowbite-react";
import SearchInput, { setWasSearchBtnClicked } from "~/components/SearchInput";
import type { FilterInput } from "~/components/FilterJobsCard";
import FilterJobsCard from "~/components/FilterJobsCard";
import JobCard from "~/components/JobCard";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/utils/api";
import { getWasApplyFilterClicked } from "~/components/FilterJobsCard";
import { getWasSearchBtnClicked } from "~/components/SearchInput";
import type { JobPostingType } from "~/server/api/routers/jobRouter";
import JobModal from "~/components/JobModal";
import { useUser } from "@clerk/nextjs";

// Define a type for the selected filters
export type SelectedFilters = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};

export default function Jobs() {
  const { isSignedIn } = useUser();

  const [jobPostings, setJobPostings] = useState<JobPostingType[]>([]);
  const router = useRouter();

  ///////////////////////////////
  //      SEARCHING JOBS       //
  //////////////////////////////
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery ?? "");
  const input = { q: encodedSearchQuery };

  ///////////////////////////////
  //      SETS FILTERS        //
  //////////////////////////////
  const [selectedFilters, setSelectedFilters] = useState<FilterInput>({
    jobType: [],
    jobPosition: [],
    jobLocation: [],
  });


  ///////////////////////////////
  //      API CALLS           //
  //////////////////////////////
  const filterQuery = api.jobs.filterBySelectedFilters.useQuery(
    selectedFilters,
    {
      enabled: getWasApplyFilterClicked(),
    },
  );
  const searchResultsQuery = api.jobs.getByQuery.useQuery(
    input, 
    {
      enabled: getWasSearchBtnClicked(),
    },
  );
  const allJobsQuery = api.jobs.getAll.useQuery();


  /* Added this to only display data
   * based on if the user SEARCHED
   * or FILTERED
   */
  let searchData = searchResultsQuery.data
  let queryData = filterQuery.data
  if (getWasApplyFilterClicked()) {
    searchData = undefined;
  }
  if (getWasSearchBtnClicked()) {
    queryData = undefined
  }


  // Updates the jobPosting state
  useEffect(() => {
    if (searchData) {
      setJobPostings(searchData);
    } else if (queryData) {
      setJobPostings(queryData);
    } else if (allJobsQuery.data) {
      setJobPostings(allJobsQuery.data);
    }
  }, [queryData, searchData, allJobsQuery.data]);


  // Displays all the jobs in database
  const resetJobs = () => {
    setWasSearchBtnClicked(false);
    router.push("/jobs");

    if(isSignedIn) {
      router.refresh();
    }
  };


  /* Resets the filters and displays
   * all jobs in the database
   */ 
  function onResetFilters() {
    setSelectedFilters({
      jobType: [],
      jobPosition: [],
      jobLocation: [],
    });
    resetJobs();
  }

  
  return (
    <main className="min-h-screen">
      {/* Container to keep everything in line */}
      <div className="mx-auto max-w-screen-xl">
        {/* Title and Search Bar */}
        <div className="mb-4 flex flex-col items-center justify-between  md:mb-8 md:flex-row">
          <h1 className="mb-4 text-xl text-white md:mb-0 md:text-2xl lg:text-3xl">
            Upcoming Jobs
          </h1>
          <div className="flex w-full flex-col items-center space-y-4 md:w-auto md:flex-row md:space-x-5 md:space-y-0">
            {getWasSearchBtnClicked() && (
              <button
                className="cursor-pointer hover:text-primary_yellow hover:underline"
                onClick={onResetFilters}
              >
                See All Jobs
              </button>
            )}
            {isSignedIn && <JobModal />}
            <SearchInput searchType="job" />
          </div>
        </div>

        {/* Filter Card and Jobs container */}
        <div className="flex flex-col md:flex-row">
          {/* Dropdown for small Screen sizes */}
          <div className="mx-auto mb-8 md:hidden">
            <Dropdown
              className="bg-[#1A1E22] text-white"
              label="Filter"
              placement="bottom"
              inline
            >
              <FilterJobsCard
                onFilterChange={setSelectedFilters}
                onResetFilters={onResetFilters}
              />
            </Dropdown>
          </div>

          {/* Normal Screen Sizes */}
          <div className="mr-[5%] hidden md:block">
            <FilterJobsCard
              onFilterChange={setSelectedFilters}
              onResetFilters={onResetFilters}
            />
          </div>

          <div className="w-full">
            {jobPostings && jobPostings.length > 0 ? (
              <JobCard 
              jobPostings={jobPostings} 
              setJobPostings={setJobPostings}
              />
            ) : (
              <p className="flex h-3/6 items-center justify-center">
                No matching job postings.
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
