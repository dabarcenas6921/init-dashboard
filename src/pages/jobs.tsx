import FilterJobPostings from './components/FilterJobPostings'

export default function Jobs() {
  return (
    <main className="min-h-screen">

      {/* Container to keep everything in line */}
      <div className="p-4 max-w-screen-xl mx-auto">

        {/* Title and Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8">
          <h1 className="text-3xl max-[766px]:mb-4 text-center md:text-left">Job Board</h1>
          <Search></Search>
        </div>
        

        {/* Filter Card and Jobs container */}
        <FilterJobPostings></FilterJobPostings>    
        
      </div>
      
    </main>
    
    
  );
}


function Search() {
  return (
    <form className="flex items-center">
      <label
        htmlFor="default-search"
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
          id="default-search"
          className="border-yellow_primary block w-full rounded-md border bg-white p-2 pl-10 text-sm text-gray-900 focus:border-yellow-500 focus:ring-yellow-500"
          placeholder="Search jobs..."
          required
        />
        <button
          type="submit"
          className="bg-primary_yellow absolute inset-y-0 right-0 flex items-center justify-center rounded-r-lg px-4 py-2 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300"
        >
          Search
        </button>
      </div>
    </form>
  );
}

/*
  
jobPost = {
	image: "img URL"
	title: ""
	company: ""
	location: "On/site, Remote, Hybrid"
	type: "internship, new grad"
	hours: "Fulltime, part-time"
	datePosted: ""
	link: "job posting URL"
}

*/
