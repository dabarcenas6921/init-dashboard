import FilterJobPostings from '../components/FilterJobPostings'
import React, { useEffect } from "react";
import { jobPostings  } from '../Data/jobPostingsData'


function isSubstringContained(fullString: string, subString: string): boolean {
  return fullString.includes(subString);
}

export default function Jobs() {

  useEffect(() => {
    const searchSubmitBtn = document.getElementById("search-submit-btn");
    const searchJobsInputField = document.getElementById("search-jobs-input-field") as HTMLInputElement;
    if (searchSubmitBtn) {
      const handleClick = (e: MouseEvent) => {
        e.preventDefault();
        const searchValue = searchJobsInputField?.value.toLowerCase();
        console.log(searchValue)
        searchJobsInputField.value = ""; // Clears the input field

        const filteredJobs = jobPostings.filter((job) => {
          if(isSubstringContained(job.company.toLocaleLowerCase(), searchValue)) {
            return job.company
          }
        })

        console.log(filteredJobs)
        return filteredJobs

      };

      searchSubmitBtn.addEventListener("click", handleClick);

      // Return a cleanup function to remove the event listener when the component unmounts
      return () => {
        searchSubmitBtn.removeEventListener("click", handleClick);
      };
    }
  }, []);

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
            <Search/>
          </div>
        </div>
        
        {/* Filter Card and Jobs container */}
        <FilterJobPostings></FilterJobPostings>    
        
      </div>
      
    </main>
    
    
  );
}


function Search() {
  return (
    <form className="flex items-center" id="search-jobs">
      <label
        htmlFor="search-jobs-input-field"
        className="sr-only text-sm font-medium text-gray-900"
      >
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <svg
            className="h-4 w-4 text-gray-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="search-jobs-input-field"
          className="border-yellow_primary block w-full rounded-md border bg-white p-2 pl-10 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500 md:w-[400px]"
          placeholder="Search jobs..."
          required
        />
        <button
          id="search-submit-btn"
          className="bg-primary_yellow absolute inset-y-0 right-0 flex items-center justify-center rounded-r-lg px-4 py-2 text-sm font-medium text-black hover-bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
          // onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </form>
  );
}