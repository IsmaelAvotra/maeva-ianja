interface SchoolarCareer {
  id: number
  grade: string
  date: string
  schoolName: string
  description: string
}

export const schools: SchoolarCareer[] = [
  {
    id: 1,
    grade: 'Pré-master',
    date: 'Sep 2023 - Now',
    schoolName: 'ISCAE Casablanca',
    description:
      "I built Coach Labib's website using Next.js, featuring a services page and an articles page with detailed content. The site was deployed online to ensure accessibility to users. The deployment process involved leveraging the latest route management capabilities of Next.js 13.",
  },
  {
    id: 2,
    grade: 'Full stack web developer',
    date: 'Fev 2023 - Mai 2023',
    schoolName: 'ENCG Casablanca',
    description:
      'During this internship, I developed the Express.js backend for user management, including signin and signup functionalities. I also assisted the team with the frontend development of the Grandioses app using Flutter, and worked on the frontend of others website.',
  },
  {
    id: 3,
    grade: 'Intern in Finance ',
    date: 'July 2021',
    schoolName: 'IST Madagascar',
    description:
      "I collaborated in creating a financial forecast plan and contributed to the elaboration of a comprehensive business plan. This involved analyzing various financial ratios to gain insights into the schoolName's financial health and performance.",
  },
  {
    id: 4,
    grade: 'Initiation internship',
    date: 'Jun 2020 - Jul 2020',
    schoolName: 'MC Audit',
    description:
      'During this internship, I gained experience in various aspects of financial and accounting tasks. I successfully handled tasks related to calculating VAT and making declarations on the DGI website.I was involved in preparing employee payrolls.',
  },
]
