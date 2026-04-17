// Array in memoria con i post
const posts = [
  {
    id: 1,
    title: 'Benvenuti nel mio blog',
    content: 'Questo è il primo post del mio blog personale.',
    image: '/images/post1.svg',
    tags: ['introduzione', 'blog', 'express']
  },
  {
    id: 2,
    title: 'Un secondo post',
    content: 'Aggiungiamo altro contenuto al nostro blog con Express.',
    image: '/images/post2.svg',
    tags: ['esercizio', 'server', 'javascript']
  },
  {
    id: 3,
    title: 'Come usare le immagini statiche',
    content: 'Ora il blog mostra immagini salvate nella cartella public.',
    image: '/images/post3.svg',
    tags: ['statico', 'assets', 'immagini']
  },
  {
    id: 4,
    title: 'Route JSON',
    content: 'La rotta /posts restituisce tutti i post in formato JSON.',
    image: '/images/post4.svg',
    tags: ['json', 'api', 'post']
  },
  {
    id: 5,
    title: 'Ultimo post di prova',
    content: 'Questo è l’ultimo post del nostro array di prova.',
    image: '/images/post5.svg',
    tags: ['progetto', 'tutorial', 'express']
  }
];

module.exports = posts;