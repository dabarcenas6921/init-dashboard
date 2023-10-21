import React from 'react'
import { SelectedFilters } from './FilterJobPostings';

interface FilterCardProps {
    handleFilterChange: (category: keyof SelectedFilters, value: string) => void;
    filterJobPostings: () => void;
    resetFilters: () => void;
    selectedFilters: SelectedFilters;
  }


const FilterCard: React.FC<FilterCardProps> = ({ handleFilterChange, filterJobPostings, resetFilters, selectedFilters }) => {
    // Job Type
    const isFulltimeChecked = selectedFilters?.jobType?.includes('Fulltime') ?? false;
    const isPartTimeChecked = selectedFilters?.jobType?.includes('Part-time') ?? false;
    // Job Position
    const isInternshipChecked = selectedFilters?.jobPosition?.includes('Internship') ?? false;
    const isNewGradChecked = selectedFilters?.jobPosition?.includes('New-grad') ?? false;
    // Job Location
    const isOnSiteChecked = selectedFilters?.jobLocation?.includes('On-site') ?? false;
    const isHybridChecked = selectedFilters?.jobLocation?.includes('Hybrid') ?? false;
    const isRemoteChecked = selectedFilters?.jobLocation?.includes('Remote') ?? false;
  
    return (
        <div className="border-2 border-[#121415] bg-[#121415] w-48 h-[485px] p-6 rounded-md">

          <div className="flex justify-between items-baseline">
            <h2 className="text-xl mb-4">Filter</h2>
            {/* Reset Filters Button */}
            <p onClick={resetFilters}
               className="text-xs text-primary_yellow cursor-pointer "
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
                onChange={() => handleFilterChange('jobType', 'Fulltime')}
                checked={isFulltimeChecked}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="fulltime">Fulltime</label>
              </div>
              {/* Part time box */}
              <div className="mb-1.5 flex items-center">
                <input 
                type="checkbox" 
                name="part-time" 
                id="part-time"
                onChange={() => handleFilterChange('jobType', 'Part-time')}
                checked={isPartTimeChecked}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="part-time">Part-time</label>
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
                onChange={() => handleFilterChange('jobPosition', 'Internship')}
                checked={isInternshipChecked}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="internship">Internship</label>
              </div>
              {/* New-grad box */}
              <div className="mb-1.5 flex items-center">
                <input 
                type="checkbox" 
                name="new-grad" 
                id="new-grad"
                onChange={() => handleFilterChange('jobPosition', 'New-grad')}
                checked={isNewGradChecked}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="new-grad">New-grad</label>
              </div>
            </div>

            {/* Job location Container */}
            <div className="mb-9">
              <h3 className="text-base mb-2">Job location</h3>
              {/* On-site box */}
              <div className="mb-1.5 flex items-center">
                <input 
                type="checkbox" 
                name="on-site" 
                id="on-site"
                onChange={() => handleFilterChange('jobLocation', 'On-site')}
                checked={isOnSiteChecked}
                className="mr-1.5 rounded-sm cursor-pointer" />
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="on-site">On-site</label>
              </div>
              {/* Hybrid box */}
              <div className="mb-1.5 flex items-center">
                <input 
                type="checkbox" 
                name="hybrid" 
                id="hybrid" 
                onChange={() => handleFilterChange('jobLocation', 'Hybrid')}
                checked={isHybridChecked}
                className="mr-1.5 rounded-sm cursor-pointer"/>
                <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="hybrid">Hybrid</label>
              </div>
              {/* New-grad box */}
              <div className="mb-1.5 flex items-center">
                <input 
                type="checkbox" 
                name="remote" 
                id="remote"
                onChange={() => handleFilterChange('jobLocation', 'Remote')}
                checked={isRemoteChecked}
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
    )
};

export default FilterCard