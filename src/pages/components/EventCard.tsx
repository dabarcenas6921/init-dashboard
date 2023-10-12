export default function EventCard() {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-slate-900 dark:shadow-slate-700/[.7]">
      <div className="relative h-52 overflow-hidden rounded-t-xl sm:h-56">
        <img
          src="https://via.placeholder.com/500x300"
          alt="Event Image"
          className="absolute h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-grow flex-col justify-between p-4 md:p-6">
        <div>
          <span className="mb-1 block text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
            INIT Explore
          </span>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-300 dark:hover:text-white sm:text-xl">
            Web Development: Intro to Express
          </h3>
          <p className="sm:text-md mt-2 text-sm text-gray-500">
            Learn to develop an API with Express.js and gain back-end
            experience!
          </p>
          <div className="mt-2 text-sm sm:mt-4">
            <p className="text-gray-400">Wed. September 18</p>
            <p className="text-gray-400">6-8 PM | PG6 Room 123</p>
          </div>
        </div>

        <div className="mt-4 flex divide-x divide-gray-200 border-t border-gray-200 dark:divide-gray-700 dark:border-gray-700">
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-bl-xl bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
            href="#"
          >
            RSVP Now
          </a>
          <a
            className="inline-flex w-full items-center justify-center gap-2 rounded-br-xl bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
            href="#"
          >
            View More Details
          </a>
        </div>
      </div>
    </div>
  );
}
