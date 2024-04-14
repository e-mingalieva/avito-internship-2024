# Баг-репорты

Список найденных багов для задания №1

### Баг №1

- **ID**: BUG-001
- **Название**: Производитель товара не соответствует критериям поиска
- **Описание**: В результатах поиска присутствуют телефоны, которые противоречат установленному фильтру.
- **Шаги для воспроизведения**:
  - Перейти на страницу Авито https://www.avito.ru
  - Выбрать город Москва
  - Перейти в категорию «Электроника»
  - Перейти в категорию «Телефоны»
  - Задать следующие параметры поиска:
    + Производитель Samsung
    + Память 512 Гб
    + Цвет синий
    + Цена до 50000 р
  - Нажать кнопку "Показать объявления"
- **Ожидаемый результат**: Все телефоны в результатах поиска относятся к бренду Samsung.
- **Фактический результат**: В списке присутствуют телефоны бренда Apple.
- **Приоритет**: High
- **Скриншоты**:

![BUG-1-attachment](https://i.ibb.co/ySd2kTB/BUG-1.png)

### Баг №2

- **ID**: BUG-002
- **Название**: Населенный пункт не соответствует критериям поиска
- **Описание**: Некоторые телефоны в результатах поиска находятся в других регионах, несмотря на установленный фильтр.
- **Шаги для воспроизведения**:
  - Перейти на страницу Авито https://www.avito.ru
  - Выбрать город Москва
  - Перейти в категорию «Электроника»
  - Перейти в категорию «Телефоны»
  - Задать следующие параметры поиска:
    + Производитель Samsung
    + Память 512 Гб
    + Цвет синий
    + Цена до 50000 р
  - Нажать кнопку "Показать объявления"
- **Ожидаемый результат**: Все телефоны должны быть расположены в Москве.
- **Фактический результат**: В поисковой выдаче присутствует телефон в населенном пункте Соколдо.
- **Приоритет**: High
- **Скриншоты**:

![BUG-2-attachment](https://i.ibb.co/rc6g4TJ/BUG-2.png)

### Баг №3

- **ID**: BUG-003
- **Название**: : Несоответствие фильтру цены
- **Описание**: Некоторые телефоны имеют цену выше установленного фильтра в 50000 рублей.
- **Шаги для воспроизведения**:
  - Перейти на страницу Авито https://www.avito.ru
  - Выбрать город Москва
  - Перейти в категорию «Электроника»
  - Перейти в категорию «Телефоны»
  - Задать следующие параметры поиска:
    + Производитель Samsung
    + Память 512 Гб
    + Цвет синий
    + Цена до 50000 р
  - Нажать кнопку "Показать объявления"
- **Ожидаемый результат**: Цена товара должна быть меньше или равна 50000 рублей.
- **Фактический результат**: Цена найденного товара составляет 59999 рублей.
- **Приоритет**: Medium
- **Скриншоты**:

![BUG-3-attachment](https://i.ibb.co/Jn5cTFg/BUG-3.png)

### Баг №4

- **ID**: BUG-004
- **Название**: Цвет товара не соответствует критериям поиска
- **Описание**: В результатах поиска присутствуют телефоны, цвет которых не соответствует установленному фильтру "синий".
- **Шаги для воспроизведения**:
  - Перейти на страницу Авито https://www.avito.ru
  - Выбрать город Москва
  - Перейти в категорию «Электроника»
  - Перейти в категорию «Телефоны»
  - Задать следующие параметры поиска:
    + Производитель Samsung
    + Память 512 Гб
    + Цвет синий
    + Цена до 50000 р
  - Нажать кнопку "Показать объявления"
- **Ожидаемый результат**: Все телефоны в результатах поиска должны быть синего цвета.
- **Фактический результат**: В списке присутствует телефон серого цвета.
- **Приоритет**: High
- **Скриншоты**:

![BUG-4-attachment](https://i.ibb.co/rxz2GM7/BUG-5.png)

### Баг №5

- **ID**: BUG-005
- **Название**: Память товара не соответствует критериям поиска
- **Описание**: В результатах поиска присутствуют телефоны с внутренней памятью 256 ГБ, что не соответствует установленному фильтру памяти 512 ГБ.
- **Шаги для воспроизведения**:
  - Перейти на страницу Авито https://www.avito.ru
  - Выбрать город Москва
  - Перейти в категорию «Электроника»
  - Перейти в категорию «Телефоны»
  - Задать следующие параметры поиска:
    + Производитель Samsung
    + Память 512 Гб
    + Цвет синий
    + Цена до 50000 р
  - Нажать кнопку "Показать объявления"
- **Ожидаемый результат**: Все телефоны в результатах поиска должны иметь память равную 512 ГБ.
- **Фактический результат**: В списке присутствует телефон с памятью 256 ГБ.
- **Приоритет**: High
- **Скриншоты**:

![BUG-5-attachment](https://i.ibb.co/rxz2GM7/BUG-5.png)

### Баг №6

- **ID**: BUG-006
- **Название**: Ошибка в логотипе Avito на главной странице
- **Описание**: На странице поиска в логотипе вместо корректного названия "Avito" используется "Awito".
- **Шаги для воспроизведения**:
  1. Открыть https://www.avito.ru/.
- **Ожидаемый результат**: Название платформы должно быть написано как "Avito".
- **Фактический результат**: Название платформы написано как "Awito".
- **Приоритет**: Low
- **Скриншоты**:

![BUG-6-attachment](https://i.ibb.co/zPWzbv5/BUG-1.png)

### Баг №7

- **ID**: BUG-007
- **Название**: Фотография товара не соответствует его описанию
- **Описание**: В одной из карточек товара фотография iPhone отображается для товара, описанного как Samsung.
- **Шаги для воспроизведения**:
  - Перейти на страницу Авито https://www.avito.ru
  - Выбрать город Москва
  - Перейти в категорию «Электроника»
  - Перейти в категорию «Телефоны»
  - Задать следующие параметры поиска:
    + Производитель Samsung
    + Память 512 Гб
    + Цвет синий
    + Цена до 50000 р
  - Нажать кнопку "Показать объявления"
- **Ожидаемый результат**: Фотографии товаров должны соответствовать их названиям и описаниям.
- **Фактический результат**: На фотографии изображён iPhone, в то время как товар описан как Samsung.
- **Приоритет**: Low
- **Скриншоты**:

![BUG-7-attachment](https://i.ibb.co/JRrk9kf/BUG-7.png)

### Баг №8

- **ID**: BUG-008
- **Название**: Отсутствие пагинации на странице результатов поиска
- **Описание**: Найдено 77 товаров по условиям поиска, при этом на странице результатов поиска отсутствуют элементы пагинации, что не позволяет пользователю переходить между страницами результатов.
- **Шаги для воспроизведения**:
  - Перейти на страницу Авито https://www.avito.ru
  - Выбрать город Москва
  - Перейти в категорию «Электроника»
  - Перейти в категорию «Телефоны»
  - Задать следующие параметры поиска:
    + Производитель Samsung
    + Память 512 Гб
    + Цвет синий
    + Цена до 50000 р
  - Нажать кнопку "Показать объявления"
- **Ожидаемый результат**: На странице должны быть элементы пагинации для загрузки большего количества результатов.
- **Фактический результат**: Элементы пагинации (скроллбар или список страниц) отсутствуют.
- **Приоритет**: Medium
- **Скриншоты**:

![BUG-8-attachment-1](https://i.ibb.co/4JVMt1T/BUG-8-1.png)

![BUG-8-attachment-1](https://i.ibb.co/YNLRTNs/BUG-8-2.png)