'use client'

import { useState } from 'react';
import JobCard from './job-card';
import jobs from '@/public/data.json';

export default function JobList() {
  const [page, setPage] = useState(1);
  const jobsPerPage = 5;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);

  return (
    <div>
      <h1>Jobs List</h1>
      <p className="text-right">Page {page} of {totalPages}</p>
      <ul className="list bg-base-100 rounded-box shadow-md max-w-[400px]">
        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide text-xl">Top jobs this week</li>
        {jobs.slice((page - 1) * jobsPerPage, page * jobsPerPage).map((job) => {
          return (
            <JobCard key={job.id} {...job} />
          )
        })}
        <div className="join grid grid-cols-2">
          <button className="join-item btn hover:bg-primary" onClick={() => setPage(page - 1)} disabled={page === 1}>Previous page</button>
          <button className="join-item btn hover:bg-primary" onClick={() => setPage(page + 1)} disabled={page === totalPages}>Next</button>
        </div>
      </ul>
    </div>
  )
}