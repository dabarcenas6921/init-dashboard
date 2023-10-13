import FilterJobsDropDown from './components/FilterJobsDropDown'
import JobCard from './components/JobCard';

export default function Jobs() {
  return (
    <main className="min-h-screen">

      {/* Container to keep everything in line */}
      <div className="p-4 max-w-screen-xl mx-auto">
        <h1 className="text-3xl mb-8 text-center md:text-left">Job Board</h1>

        <div className="flex flex-col md:flex-row">

          {/* Filter Jobs container */}
          <div className="max-w-screen-md mx-auto md:mr-[2%]">
            <div className="mr-4 ">
              <FilterJobsDropDown></FilterJobsDropDown>
            </div>
          </div>
          
          {/* Job Cards container */}
          <div className="border-s-orange-600 border-2 w-full flex flex-wrap items-start justify-evenly pl-4">
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
            <JobCard></JobCard>
          </div>
          

        </div>
        

      </div>
      

    </main>
    
    
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
