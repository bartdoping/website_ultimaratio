import {defineRouting} from 'next-intl/routing'

export default defineRouting({
  locales: ['de', 'en', 'ar'],
  defaultLocale: 'de',
  localePrefix: 'always'
})

