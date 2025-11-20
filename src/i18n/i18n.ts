import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HOME_EN from '../locales/en/home.json'
import PRODUCT_EN from '../locales/en/product.json'
import PRODUCT_VI from '../locales/vi/product.json'
import HOME_VI from '../locales/vi/home.json'

export const resources = {
  en: {
    home: HOME_EN,
    product: PRODUCT_EN
  },
  vi: {
    home: HOME_VI,
    product: PRODUCT_VI
  }
}

export const defaultNS = 'home'

i18next.use(initReactI18next).init({
  resources,
  lng: 'vi',
  ns: ['home', 'product'],
  fallBackLng: 'vi',
  defaultNS,
  interpolation: {
    escapeValue: false
  }
})
