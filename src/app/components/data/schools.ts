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
    grade: 'Pre-master',
    date: 'Sep 2023 - Now',
    schoolName: 'ISCAE Casablanca',
    description:
      'With a strong motivation to forge my profile and thanks to the best training at the ENCG in Casablanca, I was able to pass the exam to join the first major business school in Morocco, the ISCAE in Casablanca, which I hope will allow me to have the excellence and endurance to enter the professional world.',
  },
  {
    id: 2,
    grade: '2 years of Management',
    date: '2021-2023',
    schoolName: 'ENCG Casablanca',
    description:
      'Thanks to a scholarship awarded by the Moroccan Agency for International Cooperation (AMCI), I arrived in Morocco to continue my studies at the ENCG in Casablanca. My two years in this institution allowed me to confirm my choice of management path and my results testify to my integration into the education system in Morocco.',
  },
  {
    id: 3,
    grade: 'PME Management',
    date: '2019-2021',
    schoolName: 'IST Madagascar',
    description:
      'Wishing to evolve in the field of management, I chose to join the Higher Institute of Technology in the "Management of Small and Medium Enterprises" course where I learned the first notions of management as well as the world of higher education.',
  },
  {
    id: 4,
    grade: 'Baccalaureate in science',
    date: '2018-2019',
    schoolName: 'S.J.A Majunga',
    description:
      "My first steps in learning, my first successes were thanks to serious, dedicated and experienced teachers in Sainte Jeanne d'Arc private high school(S.J.A). I won the end-of-year bonuses awarded to the first 3 in each class and by winning the winner of the Brevet d'études du premier cycle I passed my baccalaureate with honors.",
  },
]
