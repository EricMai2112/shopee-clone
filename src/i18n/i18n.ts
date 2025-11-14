import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    //namespace
    translation: {
      'all categories': 'All Categories'
    }
  },
  vi: {
    translation: {
      'all categories': 'Tất cả danh mục'
    }
  }
}

i18next.use(initReactI18next).init({
  resources,
  lng: 'vi',
  fallBackLng: 'vi',
  interpolation: {
    escapeValue: false
  }
})
