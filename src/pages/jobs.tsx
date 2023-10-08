import FilterJobs from './components/FilterJobs';

export default function Jobs() {
  return (
    <main className="min-h-screen">

      {/* Container to keep everything in line */}
      <div className="p-4 max-w-screen-xl mx-auto">
        <h1 className="text-3xl mb-8">Job Board</h1>
        <FilterJobs></FilterJobs>

      </div>
      

    </main>
    
    
  );
}
