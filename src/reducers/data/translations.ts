interface Translation {
  home: string
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
  name: string
  email: string
  password: string
  confirmPassword: string
  googleReg: string
  googleLog: string
  accountY: string
  accountN: string
  now: string
  welcomeH11: string
  welcomeH12: string
  description: string
  learnMore: string
  team: string
  project: string
  course: string
  courseP1: string
  courseP2: string
  courseP3: string
  developerN0: string
  developerN1: string
  developerN2: string
  developerL0: string
  developerL1: string
  developerL2: string
}

const translations: Record<string, Translation> = {
  en: {
    home: 'Home',
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
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    googleReg: 'Register with Google',
    googleLog: 'Login with Google',
    accountY: 'Already have an account?',
    accountN: "Don't have account?",
    now: 'now.',
    welcomeH11: 'GraphiQL - Your Online Assistant ',
    welcomeH12: 'for Learning and Testing GraphQL APIs',
    description:
      'Explore, build, and test your GraphQL queries in a user-friendly environment. Enhance your API development experience with our powerful and interactive GraphiQL tool.',
    learnMore: 'Learn more',
    team: 'Our team',
    project: 'About the project',
    course: 'About the Course',
    courseP1:
      'The React Course is a free, online educational program conducted in English, designed to help learners acquire essential web development skills.',
    courseP2:
      'The curriculum covers a wide range of topics, including React, JavaScript, TypeScript, Git, GitHub, NPM, Webpack, CSS3, HTML5, Chrome DevTools, Figma, and understanding REST.',
    courseP3:
      'Open to everyone with a sufficient base knowledge, the course offers a supportive learning environment through The RS School operates on the "Pay it forward" principle, fostering a community of knowledge-sharing and mentorship.',
    developerN0: 'Evgeniia Mokhova',
    developerN1: 'Pavel Zabalotny',
    developerN2: 'Viyaleta Haponava',
    developerL0: 'Moscow, Russia',
    developerL1: 'Minsk, Belarus',
    developerL2: 'Gdansk, Poland',
  },
  ru: {
    home: 'Главная',
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
    name: 'Имя',
    email: 'Майл',
    password: 'Пароль',
    confirmPassword: 'Подтвердите пароль',
    googleReg: 'Зарегистрироваться через Google аккаунт',
    googleLog: 'Войти через Google аккаунт',
    accountY: 'Уже зарегистрированы?',
    accountN: 'Еще не зарегистрированы?',
    now: 'сейчас.',
    welcomeH11: 'GraphiQL - ваш инструмент ',
    welcomeH12: 'для проверки и изучения GraphQL API',
    description:
      'Изучайте, создавайте и тестируйте запросы GraphQL в удобной для себя среде. Расширьте свой опыт разработки API с помощью нашего мощного интерактивного инструмента GraphiQL.',
    learnMore: 'Узнать больше',
    team: 'Наша команда',
    project: 'О проекте',
    course: 'Об обучающем курсе',
    courseP1:
      'React Course — это бесплатная образовательная онлайн-программа, проводимая на английском языке и предназначенная для того, чтобы помочь учащимся приобрести необходимые навыки веб-разработки.',
    courseP2:
      'Учебная программа охватывает широкий спектр тем, включая React, JavaScript, TypeScript, Git, GitHub, NPM, Webpack, CSS3, HTML5, Chrome DevTools, Figma и понимание REST.',
    courseP3:
      'Курс, открытый для всех, обладающих достаточными базовыми знаниями, предлагает благоприятную учебную среду благодаря системе RS School, основанной на принципе "Pay it forward", подразумевающем создание сообщества для обмена знаниями и наставничество выпускников.',
    developerN0: 'Евгения Мокхова',
    developerN1: 'Павел Заболотный',
    developerN2: 'Виолетта Гапонова',
    developerL0: 'Москва, Россия',
    developerL1: 'Минск, Беларусь',
    developerL2: 'Гданьск, Польша',
  },
}

export default translations
