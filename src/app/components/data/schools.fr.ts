interface SchoolarCareer {
  id: number
  grade: string
  date: string
  schoolName: string
  description: string
}

export const schoolsFR: SchoolarCareer[] = [
  {
    id: 1,
    grade: 'Échange académique',
    date: 'Sep 2025 - Déc 2025',
    schoolName: 'NEOMA Business School',
    description:
      "Dans le cadre de mon cursus à l’ISCAE, j’ai intégré NEOMA Business School pour un semestre d’échange. Cette immersion en France enrichit ma formation par une approche internationale des enjeux financiers et renforce ma capacité d’adaptation dans un environnement multiculturel.",
  },
  {
    id: 2,
    grade: 'Master 2',
    date: '2023 - 2026',
    schoolName: 'ISCAE Casablanca',
    description:
      "Admise à l’ISCAE après un concours sélectif, j’y poursuis actuellement ma formation en Corporate Finance. Cette étape m’a permis de consolider mes compétences analytiques et de m’orienter vers les métiers de la finance stratégique.",
  },
  {
    id: 3,
    grade: 'Programme Grande École',
    date: '2021 - 2023',
    schoolName: 'ENCG Casablanca',
    description:
      "Grâce à une bourse de coopération internationale, j’ai rejoint l’ENCG Casablanca, où j’ai validé deux années de formation en management. Cette étape a confirmé mon intérêt pour la gestion et m’a permis de m’intégrer pleinement dans le système académique marocain.",
  },
  {
    id: 4,
    grade: 'Management des PME',
    date: '2019 - 2021',
    schoolName: 'IST Madagascar',
    description:
      "Première immersion dans le monde du management, cette formation m’a permis d’acquérir les bases de la gestion d’entreprise et de découvrir l’univers de l’enseignement supérieur.",
  },
  {
    id: 5,
    grade: 'Baccalauréat scientifique',
    date: '2018 - 2019',
    schoolName: 'S.J.A, Majunga',
    description:
      "Diplômée avec mention, cette étape a posé les fondations de mon parcours académique, marqué par la rigueur, la curiosité et l’envie de progresser avec l’espoir sincère de réaliser de grandes choses et de construire un avenir à la hauteur de mes aspirations.",
  },
]