import FilterJobs from './components/FilterJobs';
import JobCard from './components/JobCard';

export default function Jobs() {
  return (
    <main className="min-h-screen">

      {/* Container to keep everything in line */}
      <div className="p-4 max-w-screen-xl mx-auto">
        <h1 className="text-3xl mb-8">Job Board</h1>
        <div className="flex">

          {/* Filter Jobs container */}
          <div className="mr-4 md:mr-24">
            <FilterJobs></FilterJobs>
          </div>
          
          {/* Job Cards container */}
          <div className="border-s-orange-600 border-2 w-full">
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
