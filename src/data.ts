export const profile = {
  name: "Panth Patel",
  fullName: "Panth Patel",
  title: "AI Master's Student & Software Engineer",
  tagline:
    "Building intelligent systems with data, machine learning, and clean code.",
  location: "Cottbus, Germany",
  email: "panthcb@gmail.com",
  phone: "+49 15510423514",
  github: "Panth19",
  githubUrl: "https://github.com/Panth19",
  linkedin: "https://linkedin.com/in/panthpatel1322",
  about:
    "I'm a Master of Science student in Artificial Intelligence at Brandenburgische Technische Universität Cottbus-Senftenberg in Germany. With a background in Computer Science and hands-on experience as a Data Analyst, I love turning raw data into meaningful insights and building software that solves real problems. I'm passionate about machine learning, data engineering, and creating elegant, modern applications.",
};

export type EducationItem = {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    school: "Brandenburgische Technische Universität Cottbus-Senftenberg",
    degree: "Master of Science (M.Sc.)",
    field: "Artificial Intelligence",
    period: "Apr 2024 – Present",
    location: "Cottbus, Germany",
  },
  {
    school: "Acharya Institute of Technology (VTU)",
    degree: "Bachelor of Engineering (B.E.)",
    field: "Computer Science and Engineering",
    period: "Jul 2018 – Jun 2023",
    location: "Bangalore, India",
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  location: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Data Analyst Intern",
    company: "YBI Foundation",
    period: "Feb 2023 – Aug 2023",
    location: "Remote",
    points: [
      "Performed exploratory data analysis (EDA) on structured datasets to identify trends and patterns.",
      "Used Python and Informatica for data cleaning, transformation, and basic visualization.",
      "Collaborated with team members to ensure data accuracy and consistency.",
    ],
  },
];

export const skills: { name: string; icon: string }[] = [
  { name: "Python", icon: "🐍" },
  { name: "Machine Learning", icon: "🤖" },
  { name: "Data Analysis", icon: "📊" },
  { name: "Artificial Intelligence", icon: "🧠" },
  { name: "JavaScript", icon: "⚡" },
  { name: "React", icon: "⚛️" },
  { name: "SQL", icon: "🗄️" },
  { name: "Informatica", icon: "🔗" },
  { name: "Pandas / NumPy", icon: "📈" },
  { name: "Git & GitHub", icon: "🐙" },
  { name: "Data Visualization", icon: "📉" },
  { name: "Deep Learning", icon: "🕸️" },
];
