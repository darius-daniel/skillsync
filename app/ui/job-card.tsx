import Link from 'next/link';
import { Job } from '@/app/lib/definitions';
import { calculateMatchScore, userSkills } from '@/app/lib/jobs';

export default function JobCard({
  id,
  title,
  company,
  location,
  salary,
  description,
  requiredSkills }: Job) {
  const matchScore = calculateMatchScore(userSkills, requiredSkills);

  let badgeType = "badge-error";
  if (matchScore >= 80) {
    badgeType = "badge-success"
  } else if (matchScore >= 50) {
    badgeType = "badge-warning"
  }


  return (

    <li>
      <Link href={`/job/${id}`} className='list-row hover:bg-base-200'>
        <div>
          <div>{title}</div>
          <div className="text-sm uppercase font-semibold opacity-60">
            {company}
            <span className="divider divider-horizontal"></span>
            {location}
          </div>
        </div>
        <p className="list-col-wrap text-sm flex flex-col">
          {
            description
          }
          <br />
          <span className="mt-10">
            {salary}
          </span>
        </p>
        <span className={`badge ${badgeType} text-nowrap`}>
          {matchScore}%
        </span>
      </Link>
    </li>
  )
}