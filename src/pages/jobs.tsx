"use client";
import React, { useState } from "react";
import { Dropdown } from "flowbite-react";
import SearchInput, { setWasSearchBtnClicked } from "~/components/SearchInput";
import type { FilterInput } from "~/components/FilterJobsCard";
import FilterJobsCard, { setWasApplyFilterClicked } from "~/components/FilterJobsCard";
import JobCard from "~/components/JobCard";
import { useRouter, useSearchParams } from "next/navigation";
import { api } from "~/utils/api";
import { getWasApplyFilterClicked } from "~/components/FilterJobsCard";
import { getWasSearchBtnClicked } from "~/components/SearchInput";
import type { JobPostingType } from "~/server/api/routers/jobRouter";
import { Spinner } from 'flowbite-react';
import EventModal from "~/components/EventModal";

// Define a type for the selected filters
export type SelectedFilters = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};

export default function Jobs() {
  let jobPostingsArr: JobPostingType[] | undefined = [];

  ///////////////////////////////
  //      SEARCHING JOBS       //
  //////////////////////////////

  const router = useRouter();
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery ?? "");
  const input = { q: encodedSearchQuery };

  ///////////////////////////////
  //      FILTERING JOBS      //
  //////////////////////////////

  const [selectedFilters, setSelectedFilters] = useState<FilterInput>({
    jobType: [],
    jobPosition: [],
    jobLocation: [],
  });

  const resetFilters = () => {
    setSelectedFilters({
      jobType: [],
      jobPosition: [],
      jobLocation: [],
    });
  };

  // Returns job postings based on if the user
  // Apply's filters or Searches for jobs
  if (getWasApplyFilterClicked()) {
    const filterQuery = api.jobs.filterBySelectedFilters.useQuery(selectedFilters ?? {});
    jobPostingsArr = filterQuery.data;
    if (filterQuery.isLoading) {
      return (
        <div className="w-full flex justify-center items-center h-[72vh]">
          <Spinner color="warning" size="xl"/>
        </div>
      );
    }
  }
  else if (getWasSearchBtnClicked()) {
    const searchQuery = api.jobs.getByQuery.useQuery(input);
    jobPostingsArr = searchQuery.data;
    if (searchQuery.isLoading) {
      return (
        <div className="w-full flex justify-center items-center h-[72vh]">
          <Spinner color="warning" size="xl"/>
        </div>
      );
    }
  }
  else {
    const allJobsQuery = api.jobs.getAll.useQuery();
    jobPostingsArr = allJobsQuery.data;
    if (allJobsQuery.isLoading) {
      return (
        <div className="w-full flex justify-center items-center h-[72vh]">
          <Spinner color="warning" size="xl"/>
        </div>
      );
    }
  }

  const resetJobs = () => {
    setWasSearchBtnClicked(false);
    router.push("/jobs");
  };

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
                onResetFilters={resetFilters}
              />
            </Dropdown>
          </div>

          {/* Normal Screen Sizes */}
          <div className="mr-[5%] hidden md:block">
            <FilterJobsCard
              onFilterChange={setSelectedFilters}
              onResetFilters={resetFilters}
            />
          </div>

          <div className="w-full">
              {jobPostingsArr && jobPostingsArr.length > 0 ? (
                <JobCard jobPostings={jobPostingsArr} />
              ) : (
                <p className="flex justify-center items-center h-3/6">No matching job postings.</p>
              )}
          </div>
        </div>
      </div>
    </main>
  );
}
