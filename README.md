This is a mini project to showcase my technical depth, problem-solving skills, UI/UX understanding, and ability to work with APIs.

# Project Title: AI-Powered Job Match Dashboard

## Objective:
Build a mini job match dashboard that displays job recommendations, job match scores, and allows users to apply for jobs. The project uses Next.js, React, and Tailwind CSS and demonstrates API handling and UI/UX skills.

## Project Requirements
### 1. UI Components to Implement
#### Job List Component
* Display a list of job recommendations
* Each job should include **title, company, location, salary range, and a match score** (AI-generated)

#### Match Score Visualization
* Show how well the user fits each job using a **progress bar or a score badge (0-100%)**
* Color code: **Green (80%+), Yellow (50-79%), Red (<50%)**.

#### Job Details Component
Clicking on a job should open a **modal or a new page** displaying job details and required skills.

#### Apply Now Button
* A button that allows users to **apply (mock action)**
* If the user is missing skills, show **an alert with upskilling suggestions.**

#### ✅ Responsive Design
*  The UI should be **mobile-friendly** and adapt well to different screen sizes.

### 2. API Handling
#### Mock Job Data API (Provided Below)
* Fetch job listings from a mock API (can be a local JSON file or a free online API like MockAPI).
* Display job details dynamically.

#### Dynamic User Data Simulation
* Assume the user has certain skills (mock user profile).
* Compare the job's required skills with the user's skills to calculate the match score.

### Technical Specifications
* **Frontend Framework:** Next.js (React)
* **Styling:** Tailwind CSS
* **State Management:** Context API or Zustand
* **API Handling:** Fetch or Axios
* **Bonus:** if comfortable, implement **TypeScript**

### Mock API for Job Listings
Use this mock JSON API as the job data source:
```
[
    {
        "id": 1,
        "title": "Frontend Developer",
        "company": "Tech Corp",
        "location": "Remote",
        "salary": "$70,000 - $90,000",
        "requiredSkills": ["React", "Next.js", "JavaScript", "Tailwind CSS"],
        "matchScore": 85
    },
    {
        "id": 2,
        "title": "UI Engineer",
        "company": "DesignPro",
        "location": "New York, USA",
        "salary": "$80,000 - $100,000",
        "requiredSkills": ["Figma", "React", "CSS"],
        "matchScore": 70,
    }
]
```

### Evaluation Criteria
* **Code Quality & Best Practices** – Clean, modular, and well-structured code.
* **UI/UX Design & Responsiveness** – Aesthetically pleasing and functional design.
* **API Integration & Data Handling** – Fetching and displaying data dynamically.
* **State Management & Performance** – Efficient component re-renders and clean state handling.
* **Bonus:** TypeScript usage or additional enhancements.

### Submission Guidelines
* **Deadline:** 3-5 days from assignment.
* **Submission Format:** GitHub repository with clear README instructions.
* **Bonus:** Deploy on **Vercel** and share a live demo link.

### How to Run Locally
```
git clone https://github.com/darius-daniel/skillsync.git
cd skillsync
npm install
npm run dev
```

### Repo
[View Repo](https://github.com/darius-daniel/skillsync)

### Live Demo
[View Project](https://skillsync-snow.vercel.app)
