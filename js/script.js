const translations = {
  en: {
    'site-title': 'Attractions of USA',
    'nav-home': 'Home',
    'nav-parks': 'National Parks',
    'nav-cities': 'Famous Cities',
    'nav-landmarks': 'Landmarks',
    'hero-title': 'Discover the United States',
    'hero-subtitle': 'A Journey Through Amazing Attractions',
    'parks-title': 'National Parks of the USA',
    'grand-canyon-title': 'Grand Canyon',
    'grand-canyon-desc': "Arizona's Iconic Natural Wonder",
    'yellowstone-title': 'Yellowstone',
    'yellowstone-desc': "World's First National Park",
    'yosemite-title': 'Yosemite',
    'yosemite-desc': "California's Mountain Paradise",
    'cities-title': 'Famous American Cities',
    'nyc-title': 'New York City',
    'nyc-desc': 'The City That Never Sleeps',
    'vegas-title': 'Las Vegas',
    'vegas-desc': 'Entertainment Capital of the World',
    'sf-title': 'San Francisco',
    'sf-desc': "California's Tech and Culture Hub",
    'landmarks-title': 'Iconic American Landmarks',
    'goldengate-title': 'Golden Gate Bridge',
    'goldengate-desc': "San Francisco's Famous Bridge",
    'liberty-title': 'Statue of Liberty',
    'liberty-desc': 'Symbol of Freedom in New York',
    'rushmore-title': 'Mount Rushmore',
    'rushmore-desc': 'Presidential Memorial in South Dakota',
  },
  ru: {
    'site-title': 'Достопримечательности США',
    'nav-home': 'Главная',
    'nav-parks': 'Национальные Парки',
    'nav-cities': 'Знаменитые Города',
    'nav-landmarks': 'Знаковые Места',
    'hero-title': 'Откройте Соединенные Штаты',
    'hero-subtitle': 'Путешествие по удивительным достопримечательностям',
    'parks-title': 'Национальные Парки США',
    'grand-canyon-title': 'Гранд-Каньон',
    'grand-canyon-desc': 'Знаковое природное чудо Аризоны',
    'yellowstone-title': 'Йеллоустоун',
    'yellowstone-desc': 'Первый национальный парк в мире',
    'yosemite-title': 'Йосемити',
    'yosemite-desc': 'Горный рай Калифорнии',
    'cities-title': 'Знаменитые Американские Города',
    'nyc-title': 'Нью-Йорк',
    'nyc-desc': 'Город, который никогда не спит',
    'vegas-title': 'Лас-Вегас',
    'vegas-desc': 'Столица развлечений мира',
    'sf-title': 'Сан-Франциско',
    'sf-desc': 'Технологический и культурный центр Калифорнии',
    'landmarks-title': 'Знаковые Американские Достопримечательности',
    'goldengate-title': 'Мост Золотые Ворота',
    'goldengate-desc': 'Знаменитый мост Сан-Франциско',
    'liberty-title': 'Статуя Свободы',
    'liberty-desc': 'Символ свободы в Нью-Йорке',
    'rushmore-title': 'Гора Рашмор',
    'rushmore-desc': 'Президентский мемориал в Южной Дакоте',
  },
};

function showPage(pageId) {
  const pages = document.querySelectorAll('.page');
  pages.forEach((page) => page.classList.remove('active-page'));
  document.getElementById(pageId).classList.add('active-page');
}

function changeLanguage(lang) {
  Object.keys(translations[lang]).forEach((id) => {
    document.getElementById(id).textContent = translations[lang][id];
  });
}
