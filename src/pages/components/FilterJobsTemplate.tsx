import React, { useState } from 'react';
import JobCard from './JobCard';
import { jobPostings } from './jobPostingsData';

// Define a type for the selected filters
type SelectedFilters = {
  jobType: string[];
  jobPosition: string[];
  jobLocation: string[];
};

export default function FilterForm() {
    // State to store selected filter values
    const [selectedFilters, setSelectedFilters] = useState({
      jobType:     [] as string[],
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

    // Function to log the selected filters when the "Apply Filter" button is clicked
    const handleApplyFilter = () => {
      console.log('Selected Filters:', selectedFilters);
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
      setFilteredJobPostings(jobPostings);
    };

    return (

      <div className="flex">
  
        <div className="border-2 border-[#1A1E22] bg-[#1A1E22] w-56 h-[29rem] p-6 rounded-md mr-[5%] ">
          <h2 className="text-xl mb-4">Filter</h2>
          <form action="submit">

            {/* Job Hours Container */}
            <div className="mb-2">
              <h3 className="text-base mb-2">Job Type</h3>
              {/* Full time box */}
              <div className="mb-1.5 flex">
                <input 
                type="checkbox" 
                name="fulltime" 
                id="fulltime"
                onChange={() => handleFilterChange('jobType', 'Fulltime')}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="fulltime">Fulltime</label>
              </div>
              {/* Part time box */}
              <div className="mb-1.5 flex">
                <input 
                type="checkbox" 
                name="part-time" 
                id="part-time"
                onChange={() => handleFilterChange('jobType', 'Part-time')}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="part-time">Part-time</label>
              </div>
            </div>

            {/* Job Type Container */}
            <div className="mb-2">
              <h3 className="text-base mb-2">Position Type</h3>
              {/* Internship box */}
              <div className="mb-1.5 flex">
                <input 
                type="checkbox" 
                name="internship" 
                id="internship"
                onChange={() => handleFilterChange('jobPosition', 'Internship')}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="internship">Internship</label>
              </div>
              {/* New-grad box */}
              <div className="mb-1.5 flex">
                <input 
                type="checkbox" 
                name="new-grad" 
                id="new-grad"
                onChange={() => handleFilterChange('jobPosition', 'New-grad')}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="new-grad">New-grad</label>
              </div>
            </div>

            {/* Job location Container */}
            <div className="mb-9">
              <h3 className="text-base mb-2">Job location</h3>
              {/* On-site box */}
              <div className="mb-1.5 flex">
                <input 
                type="checkbox" 
                name="on-site" 
                id="on-site"
                onChange={() => handleFilterChange('jobLocation', 'On-site')}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="on-site">On-site</label>
              </div>
              {/* Hybrid box */}
              <div className="mb-1.5 flex">
                <input 
                type="checkbox" 
                name="hybrid" 
                id="hybrid" 
                onChange={() => handleFilterChange('jobLocation', 'Hybrid')}
                className="mr-1.5 rounded-sm cursor-pointer"/>
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="hybrid">Hybrid</label>
              </div>
              {/* New-grad box */}
              <div className="mb-1.5 flex">
                <input 
                type="checkbox" 
                name="remote" 
                id="remote"
                onChange={() => handleFilterChange('jobLocation', 'Remote')}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="remote">Remote</label>
              </div>

            </div>
            
            {/* Apply Filter Button */}
            <button
              type="button"
              onClick={filterJobPostings}
              className="bg-primary_yellow mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm 
                          font-medium text-black hover:bg-yellow-500 focus:outline-none 
                          focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
            >
              Apply Filter
            </button>

          </form>

          


        </div>

        <div className="w-full">
            {filteredJobPostings.length > 0 ? (
              <JobCard jobPostings={filteredJobPostings} />
            ) : (
              <p>No matching job postings.</p>
            )}
        </div>

      </div>
      
      
    );
  }
  