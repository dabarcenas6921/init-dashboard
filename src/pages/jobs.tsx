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
import { Spinner } from "flowbite-react";
import EventModal from "~/components/EventModal";

// Define a type for the selected filters
export type SelectedFilters = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};

export default function Jobs() {
  const [jobPostings, setJobPostings] = useState<JobPostingType[]>([]);
  const router = useRouter();
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery ?? "");
  const input = { q: encodedSearchQuery };

  const [selectedFilters, setSelectedFilters] = useState<FilterInput>({
    jobType: [],
    jobPosition: [],
    jobLocation: [],
  });

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


  useEffect(() => {
    if (filterQuery.data) {
      setJobPostings(filterQuery.data);
    } else if (searchResultsQuery.data) {
      setJobPostings(searchResultsQuery.data);
    } else if (allJobsQuery.data) {
      setJobPostings(allJobsQuery.data);
    }
  }, [filterQuery.data, searchResultsQuery.data, allJobsQuery.data]);

  const resetJobs = () => {
    setWasSearchBtnClicked(false);
    router.push("/jobs");
  };

  function handleResetFilters() {
    setSelectedFilters({
      jobType: [],
      jobPosition: [],
      jobLocation: [],
    });
    console.log("HERE:", jobPostings)

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
                onClick={resetJobs}
              >
                See All Jobs
              </button>
            )}
            <EventModal />
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
                onResetFilters={handleResetFilters}
              />
            </Dropdown>
          </div>

          {/* Normal Screen Sizes */}
          <div className="mr-[5%] hidden md:block">
            <FilterJobsCard
              onFilterChange={setSelectedFilters}
              onResetFilters={handleResetFilters}
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
