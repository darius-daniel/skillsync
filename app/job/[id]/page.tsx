'use client'

import { useParams } from "next/navigation";
import Link from "next/link";
import jobs from '@/public/data.json';
import { Job } from '@/app/lib/definitions';
import { calculateMatchScore, userSkills } from "@/app/lib/jobs";

export default function JobDetailsPage() {
  const { id } = useParams();
  const job: Job | undefined = jobs.find((job) => job.id === Number(id));
  const matchScore = calculateMatchScore(userSkills, job?.requiredSkills || []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">{job?.title}</h1>
      <p className="text-gray-600">{job?.company} - {job?.location}</p>
      <span className={`badge ${matchScore >= 80 ? "badge-success" : matchScore >= 50 ? "badge-warning" : "badge-error"}`}>
        {matchScore}% Match
      </span>
      <p className="mt-4 text-gray-700">{job?.description || "No description available."}</p>

      <h3 className="mt-6 text-lg font-semibold">Required Skills</h3>
      <div className="flex gap-2 mt-2">
        {job?.requiredSkills.map((skill: string, index: number) => (
          <span key={index} className="badge badge-neutral">{skill}</span>
        ))}
      </div>

      <p className="mt-4 font-medium">Salary: {job?.salary}</p>

      <div className="mt-6 flex gap-4">
        <button className="btn btn-primary">Apply Now</button>
        <Link href="/" className="btn">Back to Jobs</Link>
      </div>
    </div>
  );
}