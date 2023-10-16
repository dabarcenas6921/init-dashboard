import Link from "next/link";

export default function Footer() {
  return (
    <div className="pb-3">
      <div className="mx-auto flex flex-wrap items-center justify-between rounded bg-primary_yellow p-1.5 text-primary">
        <Link className="order-1 ml-4" href="/">
          <svg
            className="hover:text-light_yellow h-4 cursor-pointer self-center whitespace-nowrap  text-primary"
            fill="currentColor"
            strokeWidth="0"
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 480.12"
          >
            <path d="m499.17,75.78c-79.68,0-131.34,62.17-153.23,108.58-3.5,7.01-7.88,17.51-18.39,13.13-11.38-4.38-2.63-21.89,4.38-35.9,7-14.01,11.38-28.9,11.38-49.91v-21.89h0c-77.37,0-140.1,62.73-140.1,140.1v250.23h140.1l1.02-163.32c0-87.13,37.48-123.43,94.39-123.43,49.91,0,86.72,30.4,86.72,134.6v152.16h140.1v-208.2c0-131.34-66.55-196.14-166.37-196.14Z" />
            <path d="m1140.2,201.87c33.02,0,59.8-26.77,59.8-59.8v-52.28h-126.09V0h-140.1v338.26c0,111.2,43.78,141.85,136.6,141.85h129.59v-112.08h-84.06c-40.28,0-42.03-1.75-42.03-45.53v-120.64h66.29Z" />
            <path d="m800.09,142.42c-27,0-51.55-12.01-69.82-31.6v369.3h138.95V111.55c-18.19,19.17-42.47,30.87-69.13,30.87Z" />
            <path d="m799.86,116.1c31.38,0,56.82-25.49,56.82-56.93s-25.44-56.93-56.82-56.93-56.82,25.49-56.82,56.93,25.44,56.93,56.82,56.93Z" />
            <path d="m69.82,142.42c-27,0-51.55-12.01-69.82-31.6v369.3h138.95V111.55c-18.19,19.17-42.47,30.87-69.13,30.87Z" />
            <ellipse cx="69.59" cy="59.18" rx="56.82" ry="56.93" />
          </svg>
        </Link>
        <div className="order-2 flex cursor-default items-center">
          <span className="mr-4 self-center whitespace-nowrap text-sm text-primary">
            Copyright © 2023 INIT
          </span>
        </div>
        <Link className="order-3 flex cursor-pointer space-x-2 items-center self-center whitespace-nowrap hover:text-light_yellow mr-4" href="mailto:team@weareinit.org">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span className="text-md">
            team@weareinit.org
          </span>
        </Link>
      </div>
    </div>
  );
}
