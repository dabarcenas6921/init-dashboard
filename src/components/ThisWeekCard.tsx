export default function ThisWeekCard() {
  return (
    <div className="mb-20 mt-20 w-full max-w-6xl gap-4 px-4 md:grid md:grid-cols-2 md:px-0">
      <div className="flex items-center justify-center">
        <div>
          <h5 className="text-white-900 text-center text-5xl font-bold tracking-tight dark:text-white md:text-left md:text-6xl">
            This Week
          </h5>
          <div className="mt-7 flex justify-center">
            <a
              href="/events"
              className="rounded-lg bg-yellow-300 px-6 py-3.5 text-center text-base font-medium text-black focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Register Now!
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <div>
          <h6 className="text-white-900 text-3xl dark:text-white">
            Interview Prep: LeetCode Prep Session
          </h6>
          <p className="font-medium text-white dark:text-gray-400">
            Wed, October 11th | 4 - 6pm | CBC 155
          </p>
        </div>
        <div>
          <h6 className="text-white-900 mt-7 text-3xl dark:text-white">
            Artificial Intelligence: Intro to Machine Learning
          </h6>
          <p className="font-medium text-white dark:text-gray-400">
            Wed, October 11th | 6 - 8pm | CBC 155
          </p>
        </div>
        <div>
          <h6 className="text-white-900 mt-7 text-3xl dark:text-white">
            Industry Info Session
          </h6>
          <p className="font-medium text-white dark:text-gray-400">
            Fri, October 13th | 1:00 - 3pm | PG6 116
          </p>
        </div>
      </div>
    </div>
  );
}
