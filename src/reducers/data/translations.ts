interface Translation {
  logout: string
  signup: string
  locales: string
  signin: string
  menu: string
}

const translations: Record<string, Translation> = {
  en: {
    logout: 'Logout',
    signup: 'Sign up',
    locales: 'Locales',
    signin: 'Sign in',
    menu: 'Menu',
  },
  ru: {
    logout: 'Выйти',
    signup: 'Зарегистрироватся',
    locales: 'Язык',
    signin: 'Войти',
    menu: 'Меню',
  },
}

export default translations
