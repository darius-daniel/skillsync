import Job from './job';
import jobs from '@/public/data.json';

export default function JobList() {
  return (
    <ul className="list bg-base-100 rounded-box shadow-md max-w-[400px]">

      <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Top jobs this week</li>

      {jobs.map((job) => {
        return (
          <Job key={job.id} {...job} />
        )
      })}

    </ul>
  )
}