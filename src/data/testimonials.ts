export interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
  initials: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "Bagus Subagja is a Flutter Developer with strong capabilities in mobile app development. His expertise in optimizing Flutter to create effective solutions and intuitive interfaces is truly impressive.",
    name: "Faishol Muzakky",
    role: "Mobile Developer",
    initials: "FM",
  },
  {
    id: 2,
    content:
      "Bagus has a great personality and attitude, is agile, and has strong knowledge in mobile development, especially Flutter. He is used to working under pressure, yet still manages to complete tasks quickly with outstanding results. Keep up the great work, Bagus!",
    name: "Muhammad Giri Sundava",
    role: "Mobile Developer",
    initials: "MG",
  },
  {
    id: 3,
    content:
      "Throughout our projects together, Bagus consistently demonstrated strong dedication and solid technical skills. He effectively translates business requirements into functional mobile features delivered on time. A truly reliable engineer to have on the team.",
    name: "Muhammad Khoirul Umam",
    role: "Project Manager",
    initials: "MK",
  },
  {
    id: 4,
    content:
      "Bagus is an incredibly cooperative developer during the QA process. Every reported bug is handled quickly and thoroughly. His code is consistently clean with minimal defects, which significantly speeds up our testing cycles.",
    name: "Taufan Artha",
    role: "Quality Assurance",
    initials: "TA",
  },
  {
    id: 5,
    content:
      "Bagus is one of the standout students in mobile development. His ability to understand application architecture and apply it practically shows remarkable technical maturity for his age.",
    name: "Mochamad Iqbal Ardimansyah",
    role: "Head of Software Engineering Department, UPI Cibiru",
    initials: "MI",
  },
  {
    id: 6,
    content:
      "From a QA perspective, working with Bagus is a great experience. He is always open to feedback and proactive in resolving issues. His work is well-structured and well-documented, which greatly supports the testing process.",
    name: "Yayan Permana",
    role: "Quality Assurance",
    initials: "YP",
  },
  {
    id: 7,
    content:
      "Bagus has a strong passion for learning and great problem-solving skills. During his studies, he actively explored the latest mobile technologies and successfully applied them in real-world projects with impressive results.",
    name: "Dian Anggraini",
    role: "Lecturer of Software Engineering, UPI Cibiru",
    initials: "DA",
  },
];
