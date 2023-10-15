import FilterJobPostings from './components/FilterJobPostings'

export default function Jobs() {
  return (
    <main className="min-h-screen">

      {/* Container to keep everything in line */}
      <div className="p-4 max-w-screen-xl mx-auto">
        <h1 className="text-3xl mb-8 max-[766px]:mb-4 text-center md:text-left">Job Board</h1>

        {/* Filter Card and Jobs container */}
        <FilterJobPostings></FilterJobPostings>    
        
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
