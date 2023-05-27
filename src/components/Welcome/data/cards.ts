import translations from '@/reducers/data/translations'

export interface Card {
  id: number
  photo: string
  name: string
  location: string
  technologies: string
  github: string
}

export const cards: (lang: string) => Card[] = (lang) => [
  {
    id: 0,
    photo: 'https://avatars.githubusercontent.com/u/100534408?v=4',
    name: translations[lang].developerN0,
    location: translations[lang].developerL0,
    technologies:
      'JavaScript, TypeScript, GIT, HTML5, CSS3, SASS, React.js, Vite, Next.js, Node.js, Express.js, MongoDB, Figma',
    github: 'https://github.com/emoxowa',
  },
  {
    id: 1,
    photo: 'https://avatars.githubusercontent.com/u/41519166?v=4',
    name: translations[lang].developerN1,
    location: translations[lang].developerL1,
    technologies: 'Angular, React.js, JavaScript, TypeScript, Node.js, HTML5, CSS3, Figma, Vite, Webpack, Webstorm',
    github: 'https://github.com/PavelZabalotny',
  },
  {
    id: 2,
    photo: 'https://avatars.githubusercontent.com/u/93344846?v=4',
    name: translations[lang].developerN2,
    location: translations[lang].developerL2,
    technologies: 'React.js, TypeScript, JavaScript, HTML5, CSS3, SASS, GIT, Webpack, Figma',
    github: 'https://github.com/ViyaletaH',
  },
]
