

export default function FilterForm() {

    return (
  
      <div className="sm border-2 border-[#1A1E22] bg-[#1A1E22] md:w-48 mx: h-[27rem] p-6 rounded-md">
        <h2 className="text-xl mb-4">Filter</h2>
        <form action="submit">

          {/* Job Type Container */}
          <div className="mb-2">
            <h3 className="text-base mb-2">Job Type</h3>
            {/* Full time box */}
            <div className="mb-1.5 flex">
              <input 
              type="checkbox" 
              name="fulltime" 
              id="fulltime"
              className="mr-1.5 rounded-sm cursor-pointer" />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="fulltime">Fulltime</label>
            </div>
            {/* Internship box */}
            <div className="mb-1.5 flex">
              <input 
              type="checkbox" 
              name="internship" 
              id="internship"
              className="mr-1.5 rounded-sm cursor-pointer" />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="internship">Internship</label>
            </div>
            {/* New-grad box */}
            <div className="mb-1.5 flex">
              <input 
              type="checkbox" 
              name="new-grad" 
              id="new-grad"
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
              className="mr-1.5 rounded-sm cursor-pointer" />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="on-site">On-site</label>
            </div>
            {/* Hybrid box */}
            <div className="mb-1.5 flex">
              <input 
              type="checkbox" 
              name="hybrid" 
              id="hybrid" 
              className="mr-1.5 rounded-sm cursor-pointer"/>
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="hybrid">Hybrid</label>
            </div>
            {/* New-grad box */}
            <div className="mb-1.5 flex">
              <input 
              type="checkbox" 
              name="remote" 
              id="remote"
              className="mr-1.5 rounded-sm cursor-pointer" />
              <label className="text-sm font-normal cursor-pointer pt-[0.1rem]" htmlFor="remote">Remote</label>
            </div>

          </div>
          
          {/* Apply Filter Button */}
          <button
            type="submit"
            className="bg-primary_yellow mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm 
                        font-medium text-black hover:bg-yellow-500 focus:outline-none 
                        focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
          >
            Apply Filter
          </button>

        </form>
      </div>
      
    );
  }
  