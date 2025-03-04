export interface JobProps {
  title: string
  company: string,
  location: string,
  salary: string,
  description: string,
  requiredSkills: Array<string>,
}

export interface Job {
  id: number,
  title: string,
  company: string,
  location: string,
  salary: string,
  requiredSkills: Array<string>,
  description: string,
}
