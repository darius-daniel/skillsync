export function calculateMatchScore(userSkills: string[], jobSkills: string[]) {
  const matchingSkills = userSkills.filter(skill => jobSkills.includes(skill)).length;
  return Math.round((matchingSkills / jobSkills.length) * 100);
}


export const userSkills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "JavaScript",
  "CSS",
  "HTML",
  "Python",
  "Docker",
  "Kubernetes",
  "AWS",
  "CI/CD",
  "Git",
  "GitHub",
  "SQL",
  "NoSQL",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Oracle",
];