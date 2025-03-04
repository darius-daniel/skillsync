import { JobProps } from '../lib/definitions';

export default function Job({
  title,
  company,
  location,
  salary,
  matchScore }: JobProps) {
  let badgeType = "badge-error";
  if (matchScore >= 80) {
    badgeType = "badge-success"
  } else if (matchScore >= 50) {
    badgeType = "badge-warning"
  }

  return (

    <li className="list-row hover:bg-base-200">
      <div>
        <div>{title}</div>
        <div className="text-xs uppercase font-semibold opacity-60">
          {company}
          <span className="divider divider-horizontal"></span>
          {location}
        </div>
      </div>
      <p className="list-col-wrap text-xs flex flex-col">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Architecto saepe iure veritatis repudiandae aliquid eius aut alias quae, vel eligendi aliquam.
        Quis id iste, enim ducimus itaque eius beatae explicabo!
        <br />
        <span className="mt-10">
          {salary}
        </span>
      </p>
      <span className={`badge ${badgeType} text-nowrap`}>
        {matchScore}
      </span>
    </li>


  )
}