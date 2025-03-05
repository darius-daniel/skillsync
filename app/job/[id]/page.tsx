'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import jobs from '@/public/data.json';
import { Job } from '@/app/lib/definitions';
import { calculateMatchScore, userSkills } from "@/app/lib/jobs";
import { useRouter } from "next/navigation";
export default function JobDetailsPage() {
  const { id } = useParams();
  const job: Job | undefined = jobs.find((job) => job.id === Number(id));
  const matchScore = calculateMatchScore(userSkills, job?.requiredSkills || []);
  const router = useRouter();

  const missingSkills = job?.requiredSkills.filter((skill: string) => !userSkills.includes(skill));

  return (
    <div className="max-w-3xl mx-auto p-6 flex flex-col gap-0">
      <h1 className="text-2xl font-bold text-primary">{job?.title}</h1>
      <p className="text-secondary">{job?.company} - {job?.location}</p>
      <span className={`badge ${matchScore >= 80 ? "badge-success" : matchScore >= 50 ? "badge-warning" : "badge-error"} mt-4`}>
        {matchScore}% Match
      </span>
      <p className="mt-4 text-primary-content">{job?.description || "No description available."}</p>

      <h3 className="mt-6 text-base font-semibold text-secondary">Required Skills</h3>
      <div className="flex gap-2 mt-2">
        {job?.requiredSkills.map((skill: string, index: number) => (
          <span key={index} className="badge badge-neutral">{skill}</span>
        ))}
      </div>

      <p className="mt-4 font-medium">Salary: {job?.salary}</p>

      <div className="mt-6 flex gap-4">
        {missingSkills && missingSkills.length > 0
          ? <button popoverTarget="upskill-popover" className="btn btn-primary">Apply Now</button>
          : (<button
            className="btn btn-primary"
            onClick={() => router.push(`/job/${job?.id}/apply`)}>
            Apply Now
          </button>
          )}
        <Link href="/" className="btn">Back to Jobs</Link>
      </div>

      <dialog id="upskill-popover" className="modal" popover="manual">
        <div className="modal-box flex flex-col gap-2">
          <h3 className="font-bold text-lg text-primary">Upskilling Suggestions</h3>
          <div className="flex flex-col gap-2">
            <p className="mt-2 text-sm">
              We recommend you to upskill in the following skills to increase your chances of getting hired:
            </p>
            <div className="flex gap-2 mt-2">
              {missingSkills?.map((skill: string, index: number) => (
                <span key={index} className="badge badge-neutral">{skill}</span>
              ))}
            </div>
          </div>
          <p className="py-4 text-xs text-info">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div >
  );
}