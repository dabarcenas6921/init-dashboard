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
import type {
  CompanyCardType,
  JobPostingType,
} from "~/server/api/routers/jobRouter";
import JobModal from "~/components/JobModal";
import CompanyCard, { getWasViewJobsClicked } from "~/components/CompanyCard";
import {
  type GetServerSideProps,
  type InferGetServerSidePropsType,
} from "next";
import { createServerSideHelpers } from "@trpc/react-query/server";
import { appRouter } from "~/server/api/root";
import superjson from "superjson";
import { db } from "~/server/db";
import { getAuth } from "@clerk/nextjs/server";
import { useUser } from "@clerk/nextjs";

// Define a type for the selected filters
export type SelectedFilters = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};

let companyDataArr: CompanyCardType[] | undefined = [];

// getServerSideProps implementation
export const getServerSideProps: GetServerSideProps = async (context) => {
  // Get the authentication context
  const auth = getAuth(context.req);

  // Create the context for server-side helpers
  const trpcContext = {
    auth, // Auth context
    db, // Database connection
  };

  const helpers = createServerSideHelpers({
    router: appRouter,
    ctx: trpcContext,
    transformer: superjson,
  });

  await helpers.jobs.getAll.prefetch();

  const jobPostings = await helpers.jobs.getAll.fetch();

  return {
    props: {
      trpcState: helpers.dehydrate(),
    },
  };
};

export default function Jobs(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const { isSignedIn } = useUser();
  const [jobPostings, setJobPostings] = useState<JobPostingType[]>([]);
  const router = useRouter();
  const search = useSearchParams();
  const searchQuery = search ? search.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery ?? "");
  const input = { q: encodedSearchQuery };

  const [companyNameForQuery, setCompanyNameForQuery] = useState<string>("");
  const [selectedFilters, setSelectedFilters] = useState<FilterInput>({
    jobType: [],
    jobPosition: [],
    jobLocation: [],
  });
  const [groupByCompany, setGroupByCompany] = useState(false);

  const allJobsQuery = api.jobs.getAll.useQuery();
  const filterQuery = api.jobs.filterBySelectedFilters.useQuery(
    selectedFilters,
    {
      enabled: getWasApplyFilterClicked(),
    },
  );
  const searchResultsQuery = api.jobs.getByQuery.useQuery(input, {
    enabled: getWasSearchBtnClicked(),
  });

  let searchData = searchResultsQuery.data;
  let queryData = filterQuery.data;
  if (getWasApplyFilterClicked()) {
    searchData = undefined;
  }
  if (getWasSearchBtnClicked()) {
    queryData = undefined;
  }
  const companyData = api.jobs.getByCompany.useQuery();
  if (groupByCompany) {
    companyDataArr = companyData.data;
  } else {
    companyDataArr = undefined;
  }

  // Trigger the query only if companyNameForQuery has a value
  const companyJobsQuery = api.jobs.getByCompanyCard.useQuery(
    { companyName: companyNameForQuery },
    {
      enabled: !!companyNameForQuery, // This query will only run if companyNameForQuery is not null
    },
  );

  const fetchJobsByCompany = (companyName: string) => {
    setCompanyNameForQuery(companyName);
  };

  useEffect(() => {
    if (companyJobsQuery.status === "success" && companyJobsQuery.data) {
      setJobPostings(companyJobsQuery.data);
    }
  }, [companyJobsQuery.status, companyJobsQuery.data]);

  useEffect(() => {
    if (searchData) {
      console.log("IN SEARCH DATA");
      setJobPostings(searchData);
    } else if (queryData) {
      console.log("IN FILTER DATA");
      setJobPostings(queryData);
    } else if (allJobsQuery.data) {
      setJobPostings(allJobsQuery.data);
    }
  }, [queryData, searchData, allJobsQuery.data]);

  const resetJobs = () => {
    setWasSearchBtnClicked(false);
    router.push("/jobs");

    if (isSignedIn) {
      router.refresh();
    }
  };

  function handleResetFilters() {
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
                onClick={handleResetFilters}
              >
                See All Jobs
              </button>
            )}
            {!groupByCompany && <SearchInput searchType="job" />}
            <button
              className="hover:bg-light-yellow inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary_yellow px-3 py-2 text-sm font-semibold text-black transition-all hover:bg-light_yellow focus:outline-none focus:ring-2 focus:ring-light_yellow md:w-auto lg:px-4 lg:py-3"
              type="button"
              onClick={() => setGroupByCompany(!groupByCompany)}
            >
              {groupByCompany ? "Group By Postings" : "Group By Company"}
            </button>
            {isSignedIn && <JobModal setPostings={setJobPostings} />}
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
            {groupByCompany && jobPostings.length > 0 ? (
              <CompanyCard
                company={
                  companyDataArr
                    ? companyDataArr.map((company) => ({
                        name: company.company,
                        image: company.image,
                        id: company.id,
                      }))
                    : []
                }
                setJobPostings={setJobPostings}
                setGroupByCompany={setGroupByCompany}
                fetchJobsByCompany={fetchJobsByCompany}
              />
            ) : jobPostings && jobPostings.length > 0 ? (
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
