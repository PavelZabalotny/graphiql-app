interface Translation {
  logout: string
  signup: string
  locales: string
  signin: string
  menu: string
  gohome: string
  nomatch: string
  request: string
  vars: string
  header: string
  headerError: string
  response: string
}

const translations: Record<string, Translation> = {
  en: {
    logout: 'Logout',
    signup: 'Sign up',
    locales: 'Locales',
    signin: 'Sign in',
    menu: 'Menu',
    gohome: 'Go to Home',
    nomatch:
      "Oh no! It looks like you've stumbled upon the infamous Page 404 - the land of lost pages and digital tumbleweeds.",
    request: 'Request section',
    vars: 'Variables',
    header: 'Header',
    headerError: 'Sorry, the Header section is not working!',
    response: 'Response section',
  },
  ru: {
    logout: 'Выйти',
    signup: 'Зарегистрироватся',
    locales: 'Язык',
    signin: 'Войти',
    menu: 'Меню',
    gohome: 'Вернуться',
    nomatch: 'Вас постигла неудача номер 404. Не волнуйтесь, это поправимо и не фатально.',
    request: 'Поле запросов',
    vars: 'Переменные',
    header: 'Хэдер',
    headerError: 'Хэдер отвалился. :с Такая лайф.',
    response: 'Поле ответов',
  },
}

export default translations
