import React from 'react';
import { Dropdown } from 'flowbite-react';
import FilterJobs from './FilterJobsTemplate';


export default function FilterFormDropDown() {
  return (
    <div>
        {/* Drop down for small screen sizes */}
        <div className="md:hidden">
            <Dropdown className="text-white bg-[#1A1E22]" label="Filter" placement="bottom" inline>
                <FilterJobs></FilterJobs>
            </Dropdown>
        </div>

        <div className="hidden md:block">
            <FilterJobs></FilterJobs>
        </div>
    </div>
  );
}
