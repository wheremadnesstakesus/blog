const { daysBetween } = require('../helpers')

module.exports = {
  headline: 'Vanlifers e viggiatori a tempo pieno!',
  description: 'Blog di viaggi dove due matti racconteranno le loro piccole avventure in giro per il mondo',
  keywords: ['viaggi', 'vanlife', 'avventure'],
  heading: (days) =>
    `Siamo Federica e José. Viviamo e viaggiamo nel nostro van, la Flowerneta, da ${daysBetween(
      days,
    )} giorni. Qui raccontermo tutte le avventure, pensieri e riflessioni che vivremo.  Ti unisci alla nostra follia?`,
  latestsPosts: 'Ultimi Post!',
  builtWith: (author) => `Fatto da ${author} con tanto `,
  copyright: 'Tutti i diritti riservatti',
}
