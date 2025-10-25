const {defineRouting} = require('next-intl/routing')

module.exports = defineRouting({
  locales: ['de', 'en', 'ar'],
  defaultLocale: 'de',
  localePrefix: 'always'
})

