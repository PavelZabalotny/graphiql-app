interface Translation {
  logout: string
  signup: string
}

const translations: Record<string, Translation> = {
  en: {
    logout: 'Logout',
    signup: 'Sign up',
  },
  ru: {
    logout: 'Выйти',
    signup: 'Зарегистрироватся',
  },
}

export default translations
