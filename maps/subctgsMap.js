const getSubcategoryId = () => {
  const SubcategoryMap = {
'Футболки для промо':'604a1c0b3d798e3a735c405d',
'Джемперы и кардиганы':'604a1c0b3d798e3a735c405e',
'Аксессуары':'604a1c0b3d798e3a735c405f',
'Ветровки':'604a1c0b3d798e3a735c4062',
'Шарфы':'604a1c0b3d798e3a735c4060',
'Офисные рубашки':'604a1c0b3d798e3a735c4061',
'Жилеты':'604a1c0b3d798e3a735c4064',
'Халаты с логотипом':'604a1c0b3d798e3a735c4063',
'Толстовки':'604a1c0b3d798e3a735c4065',
'Трикотажные шапки':'604a1c0b3d798e3a735c4066',
'Детская одежда':'604a1c0b3d798e3a735c4067',
'Футболки поло':'604a1c0b3d798e3a735c4068',
'Спортивная одежда':'604a1c0b3d798e3a735c4069',
'Вязаные комплекты':'604a1c0b3d798e3a735c406a',
'Кепки и бейсболки':'604a1c0b3d798e3a735c406b',
'Панамы':'604a1c0b3d798e3a735c406c',
'Куртки':'604a1c0b3d798e3a735c406d',
'Дождевики':'604a1c0b3d798e3a735c406e',
'Фартуки с логотипом':'604a1c0b3d798e3a735c406f',
'Футболки':'604a1c0b3d798e3a735c4070',
'Скатерти с логотипом':'604a1c0b3d798e3a735c4072',
'Статуэтки и скульптуры':'604a1c0b3d798e3a735c4073',
'Вазы':'604a1c0b3d798e3a735c4074',
'Прихватки с логотипом':'604a1c0b3d798e3a735c4075',
'Салфетки с логотипом':'604a1c0b3d798e3a735c4076',
'Пледы':'604a1c0b3d798e3a735c4077',
'Домашний текстиль':'604a1c0b3d798e3a735c4078',
'Часы и метеостанции':'604a1c0b3d798e3a735c4079',
'Игрушки':'604a1c0b3d798e3a735c407a',
'Декоративные свечи и подсвечники':'604a1c0b3d798e3a735c407b',
'Интерьерные подарки':'604a1c0b3d798e3a735c407c',
'Шкатулки':'604a1c0b3d798e3a735c407d',
'Фоторамки и фотоальбомы':'604a1c0b3d798e3a735c407e',
'Предметы коллекционирования':'604a1c0b3d798e3a735c407f',
'Полотенца с логотипом':'604a1c0b3d798e3a735c4080',
'Аксессуары и средства для ухода':'604a1c0b3d798e3a735c4081',
'Подарки для дачи':'604a1c0b3d798e3a735c4083',
'Автомобильные аксессуары':'604a1c0b3d798e3a735c4084',
'Товары для путешествий':'604a1c0b3d798e3a735c4085',
'Туристические принадлежности':'604a1c0b3d798e3a735c4086',
'Пляжный отдых':'604a1c0b3d798e3a735c4087',
'Инструменты':'604a1c0b3d798e3a735c4088',
'Наборы для пикника':'604a1c0b3d798e3a735c4089',
'Банные наборы':'604a1c0b3d798e3a735c408a',
'Мячи с логотипом':'604a1c0b3d798e3a735c408b',
'Подушки под шею':'604a1c0b3d798e3a735c408c',
'Спортивные товары':'604a1c0b3d798e3a735c408d',
'Складные ножи и мультитулы':'604a1c0b3d798e3a735c408e',
'Игры и головоломки':'604a1c0b3d798e3a735c408f',
'Кружки':'604a1c0b3d798e3a735c4091',
'Термокружки с логотипом':'604a1c0b3d798e3a735c4092',
'Барные аксессуары':'604a1c0b3d798e3a735c4093',
'Заварочные чайники':'604a1c0b3d798e3a735c4094',
'Кофейные наборы':'604a1c0b3d798e3a735c4095',
'Разделочные доски':'604a1c0b3d798e3a735c4096',
'Бутылки для воды':'604a1c0b3d798e3a735c4097',
'Ланчбоксы':'604a1c0b3d798e3a735c4098',
'Бокалы':'604a1c0b3d798e3a735c4099',
'Термосы с логотипом':'604a1c0b3d798e3a735c409a',
'Кувшины и графины':'604a1c0b3d798e3a735c409b',
'Фляжки с логотипом':'604a1c0b3d798e3a735c409c',
'Столовые тарелки':'604a1c0b3d798e3a735c409d',
'Кухонные принадлежности':'604a1c0b3d798e3a735c409e',
'Чайные наборы':'604a1c0b3d798e3a735c409f',
'Предметы сервировки':'604a1c0b3d798e3a735c40a0',
'Текстовыделители':'604a1c0b3d798e3a735c40a2',
'Футляры для ручек':'604a1c0b3d798e3a735c40a3',
'Карандаши':'604a1c0b3d798e3a735c40a4',
'Деревянные ручки':'604a1c0b3d798e3a735c40a5',
'Металлические ручки':'604a1c0b3d798e3a735c40a6',
'Наборы с ручками':'604a1c0b3d798e3a735c40a7',
'Пластиковые ручки':'604a1c0b3d798e3a735c40a8',
'Чемоданы':'604a1c0b3d798e3a735c40aa',
'Дорожные сумки':'604a1c0b3d798e3a735c40ab',
'Сумки для пикника':'604a1c0b3d798e3a735c40ac',
'Рюкзаки':'604a1c0b3d798e3a735c40ad',
'Сумки для документов':'604a1c0b3d798e3a735c40ae',
'Сумки для покупок':'604a1c0b3d798e3a735c40af',
'Несессеры':'604a1c0b3d798e3a735c40b0',
'Спортивные сумки':'604a1c0b3d798e3a735c40b1',
'Сумки для ноутбука':'604a1c0b3d798e3a735c40b2',
'Складные зонты':'604a1c0b3d798e3a735c40b4',
'Зонты трости':'604a1c0b3d798e3a735c40b5',
'Необычные и оригинальные зонты':'604a1c0b3d798e3a735c40b6',
'Наушники':'604a1c0b3d798e3a735c40b8',
'Внешние жесткие диски':'604a1c0b3d798e3a735c40b9',
'Лампы и светильники':'604a1c0b3d798e3a735c40ba',
'Бытовая техника':'604a1c0b3d798e3a735c40bb',
'Портативные колонки':'604a1c0b3d798e3a735c40bc',
'Внешние аккумуляторы':'604a1c0b3d798e3a735c40bd',
'Флешки':'604a1c0b3d798e3a735c40be',
'Компьютерные и мобильные аксессуары':'604a1c0b3d798e3a735c40bf',
'Зажигалки':'604a1c0b3d798e3a735c40c1',
'Светодиодные фонарики':'604a1c0b3d798e3a735c40c2',
'Чехлы для карт':'604a1c0b3d798e3a735c40c3',
'Канцелярские принадлежности':'604a1c0b3d798e3a735c40c4',
'Визитницы':'604a1c0b3d798e3a735c40c5',
'Средства индивидуальной защиты':'604a1c0b3d798e3a735c40c6',
'Кошельки':'604a1c0b3d798e3a735c40c7',
'Антистрессы':'604a1c0b3d798e3a735c40c8',
'Ключницы с логотипом':'604a1c0b3d798e3a735c40c9',
'Брелки с логотипом':'604a1c0b3d798e3a735c40ca',
'Настольные аксессуары':'604a1c0b3d798e3a735c40cb',
'Обложки для документов':'604a1c0b3d798e3a735c40cc',
'Подарочные книги':'604a1c0b3d798e3a735c40cd',
'Светоотражатели':'604a1c0b3d798e3a735c40ce',
'Сладкие подарки с логотипом':'604a1c0b3d798e3a735c40cf',
'Папки, портфели':'604a1c0b3d798e3a735c40d0',
'Дорожные органайзеры':'604a1c0b3d798e3a735c40d1',
'Наборы с ежедневниками':'604a1c0b3d798e3a735c40d3',
'Ежедневники':'604a1c0b3d798e3a735c40d4',
'Упаковка для ежедневников':'604a1c0b3d798e3a735c40d5',
'Оригинальные ежедневники':'604a1c0b3d798e3a735c40d6',
'Блокноты с логотипом':'604a1c0b3d798e3a735c40d7',
'Наградные стелы':'604a1c0b3d798e3a735c40d9',
'Кубки и медали':'604a1c0b3d798e3a735c40da',
'Наградные плакетки и панно':'604a1c0b3d798e3a735c40db',
'Аксессуары и украшения для офиса к новому году':'604a1c0b3d798e3a735c40dd',
'Зимние подарки':'604a1c0b3d798e3a735c40de',
'Подарки с символом 2022 года':'604a1c0b3d798e3a735c40df',
'Новогодняя упаковка для подарков':'604a1c0b3d798e3a735c40e0',
'Новогодние подушки':'604a1c0b3d798e3a735c40e1',
'Новогодние наборы':'604a1c0b3d798e3a735c40e2',
'Новогодние свечи и подсвечники':'604a1c0b3d798e3a735c40e3',
'Новогодний стол':'604a1c0b3d798e3a735c40e4',
'Новогодние елочные игрушки':'604a1c0b3d798e3a735c40e5',
'Новогодние елочные шары':'604a1c0b3d798e3a735c40e6',
'Сувениры к 8 марта':'604a1c0b3d798e3a735c40e8',
'Подарки ко Дню электросвязи':'604a1c0b3d798e3a735c40e9',
'Подарки на День юриста':'604a1c0b3d798e3a735c40ea',
'Сувениры к 23 февраля':'604a1c0b3d798e3a735c40eb',
'Подарки детям':'604a1c0b3d798e3a735c40ec',
'Подарки на День геолога':'604a1c0b3d798e3a735c40ed',
'Подарки на День химика':'604a1c0b3d798e3a735c40ee',
'Подарки на День медицинского работника':'604a1c0b3d798e3a735c40ef',
'Подарки на День авиации':'604a1c0b3d798e3a735c40f0',
'Подарок коллеге':'604a1c0b3d798e3a735c40f1',
'Подарки системным администраторам':'604a1c0b3d798e3a735c40f2',
'Подарки на День полиции':'604a1c0b3d798e3a735c40f3',
'Подарки на День учителя':'604a1c0b3d798e3a735c40f4',
'Подарки на День строителя':'604a1c0b3d798e3a735c40f5',
'Подарки автомобилисту':'604a1c0b3d798e3a735c40f6',
'Подарки на 14 февраля':'604a1c0b3d798e3a735c40f7',
'Подарки программистам':'604a1c0b3d798e3a735c40f8',
'Подарки на День железнодорожника':'604a1c0b3d798e3a735c40f9',
'Подарки на День металлурга':'604a1c0b3d798e3a735c40fa',
'Подарки начальнику':'604a1c0b3d798e3a735c40fb',
'Подарки ко Дню шахтера':'604a1c0b3d798e3a735c40fc',
'Подарки на юбилей компании':'604a1c0b3d798e3a735c40fd',
'Подарки ко Дню нефтяника':'604a1c0b3d798e3a735c40fe',
'Подарки военным':'604a1c0b3d798e3a735c40ff',
'Подарки банковскому работнику':'604a1c0b3d798e3a735c4100',
'Подарки на День России':'604a1c0b3d798e3a735c4101',
'Подарки на День знаний':'604a1c0b3d798e3a735c4102',
'Подарки ко Дню энергетика':'604a1c0b3d798e3a735c4103',
'Подарки морякам':'604a1c0b3d798e3a735c4104',
'Подарки на День Победы':'604a1c0b3d798e3a735c4105',
'Подарочная упаковка':'604a1c0b3d798e3a735c4107',
'Подарочные пакеты':'604a1c0b3d798e3a735c4108',
'Подарочные коробки':'604a1c0b3d798e3a735c4109',
'Жестяная упаковка':'604a1c0b3d798e3a735c410a',
'Подарочные наборы с вареньем':'604a1c0b3d798e3a735c410c',
'Наборы для сыра':'604a1c0b3d798e3a735c410d',
'Наборы для выращивания':'604a1c0b3d798e3a735c410e',
'Подарочные наборы с пледами':'604a1c0b3d798e3a735c410f',
'Винные наборы':'604a1c0b3d798e3a735c4110',
'Подарочные наборы с книгами':'604a1c0b3d798e3a735c4111',
'Подарочные наборы для дома':'604a1c0b3d798e3a735c4112',
'Дорожные наборы для путешествий':'604a1c0b3d798e3a735c4113',
'Подарочные наборы с аккумуляторами':'604a1c0b3d798e3a735c4114',
'Бизнес наборы':'604a1c0b3d798e3a735c4115',
'Подарочные наборы для женщин':'604a1c0b3d798e3a735c4116',
'Подарочные наборы с медом':'604a1c0b3d798e3a735c4117',
'Подарочные наборы с колонками':'604a1c0b3d798e3a735c4118',
'Подарочные наборы с термокружками':'604a1c0b3d798e3a735c4119',
'Спортивные наборы':'604a1c0b3d798e3a735c411a',
'Подарочные наборы с кофе':'604a1c0b3d798e3a735c411b',
'Подарочные наборы с флешками':'604a1c0b3d798e3a735c411c',
'Подарочные наборы с чаем':'604a1c0b3d798e3a735c411d',
'Наборы стаканов для виски':'604a1c0b3d798e3a735c411e',
'Подарочные продуктовые наборы':'604a1c0b3d798e3a735c411f',
'Подарочные наборы с мультитулами':'604a1c0b3d798e3a735c4120',
'Подарочные наборы для мужчин':'604a1c0b3d798e3a735c4121',
'Плащи-дождевики с принтом':'604a1c0b3d798e3a735c4123',
'Бейсболки и панамы с принтом':'604a1c0b3d798e3a735c4124',
'Мерч на 8 марта':'604a1c0b3d798e3a735c4125',
'Шарфы с принтом':'604a1c0b3d798e3a735c4126',
'Футболки с принтом':'604a1c0b3d798e3a735c4127',
'Мерч для детей':'604a1c0b3d798e3a735c4128',
'Сумки с принтом':'604a1c0b3d798e3a735c4129',
'Кружки с принтом':'604a1c0b3d798e3a735c412a',
'Детские футболки с принтом':'604a1c0b3d798e3a735c412b',
'Джемперы с принтом':'604a1c0b3d798e3a735c412c',
'Шапки с принтом':'604a1c0b3d798e3a735c412d',
'Фартуки с принтом':'604a1c0b3d798e3a735c412e',
'Тематические подарочные наборы':'604a1c0b3d798e3a735c412f',
'Зонты с принтом':'604a1c0b3d798e3a735c4130',
'Оригинальные подарки с принтом':'604a1c0b3d798e3a735c4131',
'Вязаные пледы с оригинальным рисунком':'604a1c0b3d798e3a735c4132',
'Термокружки с принтом':'604a1c0b3d798e3a735c4133',
'Ежедневники с принтом':'604a1c0b3d798e3a735c4134',
'Рюкзаки с принтом':'604a1c0b3d798e3a735c4135',
'Аккумуляторы с принтом':'604a1c0b3d798e3a735c4136',
'Толстовки с принтом':'604a1c0b3d798e3a735c4137',
}
  return function (subcategoryName) {
    return SubcategoryMap[subcategoryName]
  }
}

export default getSubcategoryId