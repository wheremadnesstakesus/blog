const { daysBetween } = require('../helpers')

module.exports = {
  headline: 'Vanlifers y viajeros a tiempo completo!',
  description: 'Blog de viajes donde dos locos contaran sus pequeñas aventuras alrededor del mundo',
  keywords: ['viajes', 'vanlife', 'aventuras'],
  heading: (days) =>
    `Somos Federica y José y llevamos <b>{${daysBetween(
      days,
    )}} días viviendo y viajando en nuestra furgoneta</b> , a la que llamamos Flowerneta y aquí te iremos contando todas nuestras aventuras, pensamientos y demás locuras que se nos vayan ocurriendo. Te unes a nuestra locura!`,
  latestsPosts: 'Últimas publicaciones!',
  builtWith: (author) => `Hecho por ${author} con muchísimo `,
  copyright: 'Todos los derechos reservados',
}
