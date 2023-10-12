import React from 'react';
import { Dropdown } from 'flowbite-react';
import FilterJobs from './FilterJobsTemplate';


export default function FilterFormDropDown() {
  return (
    <div>
        {/* Drop down for small screen sizes */}
        <div className="md:hidden">
            <Dropdown className="text-white" label="Filter" placement="bottom" inline>
                <FilterJobs/>
            </Dropdown>
        </div>

        <div className="hidden md:block">
            <FilterJobs />
        </div>
    </div>
  );
}
