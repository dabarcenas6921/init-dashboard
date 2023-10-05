export default function Events() {
  return (
    <main className="min-h-screen justify-between">
      <div>
        <h1 className="text-3xl text-white">Upcoming Events</h1>
        <button
          type="button"
          className="bg-primary_yellow mb-2 mr-2 rounded-lg px-5 py-2.5 text-sm font-medium text-black hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 dark:focus:ring-yellow-900"
        >
          Add Event
        </button>
      </div>
    </main>
  );
}
