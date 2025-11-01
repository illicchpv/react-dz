# read

## фигма
  [🔗figma](https://www.figma.com/design/rsIcOuTUrqSuC0Ry1QAPDk/React-3--Copy-?node-id=0-1&p=f&t=b0dqBKXv9HYfFDUR-0)
  

## задания:

### 1-start
---

### 2-events

#### Добавляем:
  - Обработка нажатия на кнопку поиска
  - Компонент search
  - Компонент меню (Layout)

#### Цели домашнего задания:
  - Применить знания работы с событиями на практике.
  - Добавить новые компоненты в приложение с фильмами.
  - Реализовать обработку нажатия на кнопку.
#### Задачи:
  1. Обработка нажатия на кнопку.  
      - Использовать кнопку, созданную в предыдущем         задании, которая может называться «искать» или «войти в профиль».
      - Необходимо реализовать обработку нажатия на эту кнопку и передать событие выше.
  2. Создание интерактивного компонента поиска.
      - Разработать компонент поиска с использованием поля ввода (input).
      - Возможные варианты выполнения:
        - Создание двух отдельных компонентов: поле ввода и поисковая строка.
        - Создание универсального компонента с возможностью отображения иконки в поле ввода.
      - Предоставление возможности настройки плейсхолдера и отображения иконки.
  3. Верстка шапки меню.
      - Разработать базовую верстку шапки меню приложения.
      - Включить минимально необходимые элементы для дальнейшей разработки.
      - Использовать простые ссылки для демонстрации структуры меню.
      - Добавить фоновое оформление если не выполнено ранее

---

### 5-show-data. Отображение данных

https://app.purpleschool.ru/courses/15/sections/213/lessons/1610


- [Домашнее задание - Отображение данных](https://app.purpleschool.ru/courses/15/sections/213/lessons/1618)
    - Компонент карточки фильма
    - Список фильмов

    bodyCard {
      img: '',
      name: '',
      rating: 324,
    }

---

6. [Стилизация](https://app.purpleschool.ru/courses/15/sections/214/lessons/1619)
    - Изменение стилей
    - Динамические классы
    - CSS модули
    - Библиотека classnames
        - > npm i classnames
    - Упражнение - стилизация формы
    - Тест - Стилизация
    - Занятие - Стилизация
    - Домашнее задание - Стилизация
        - в git создать ветку 2-style
        - + lib classnames
        - переделать всё на module

---

7. [Другие hooks](https://app.purpleschool.ru/courses/15/sections/215/lessons/1626)
    - Side Effects
    - useEffect
    - Зависимости эффекта
    - Очистка эффекта
    - useReducer
    - Использование useReducer
                                                                      👇 ф-я для установки начального состояния
        const [state, dispatchFn] = useReducer(reduceFn, INIT_STATE, initFn) 
                      ☝️ф-я изменения  👉            ☝️ф-я изменения по action    
    - Упражнение - Очистка формы
        - у меня вопрос
    - Exhaustive-deps
    - useRef
    - forwardRef
    - Создание своего hook
    - 👉Правила hooks
        - можно использовать только в компонентах и custom hooks
        - нельзя вызывать во вложенных ф-ях, в блоках if 
        - названия начинаются с use 
    - Тест - Другие hooks
    - Занятие - Другие hooks
    - Домашнее задание - [задание Другие hooks](https://app.purpleschool.ru/courses/15/sections/215/lessons/1639)
        - в той-же ветке
        - Изменения
          - добавляем forwardRef на кнопку и input
          - делаем форму входа, сохраняя данные в localStorage
            - профили [{ name: 'Вася', isLogged: true}]
            - при выходе сбрасываем isLogged на false
          - показываем имя в меню
      - Алекс:  Что можно улучшить:
        - Можно добавить очистку поля ввода после успешного входа для лучшего UX
        - Можно добавить визуальную индикацию текущего залогиненного пользователя в списке профилей

---

8. [Контекст](https://app.purpleschool.ru/courses/15/sections/216/lessons/1640?v=2)
    - Зачем нужен Context API
    - Создание контекста
    - Создание контекста
    - Методы в контексте
    - Custom context
    - Упражнение - работа контекста
        - Причина, почему при добавлении нескольких записей в журнал от одного пользователя поле userId не сохраняется, заключается в том, что обновление userId в форме происходит через useEffect,  
        который срабатывает только один раз — когда юзер выбран или страница обновляется.  
        После добавления записи форма сбрасывается (dispatch('CLEAR')) и значения формы очищаются,
        а userId остаётся пустым, потому что useEffect не триггерится повторно. Поэтому последующие записи добавляются без userId.
    - Ограничения контекста
    - Тест - Контекст
    - Занятие - Контекст
    - Домашнее задание - Контекст
        - Переносим хранение имени текущего пользователя в глобальный контекст и его сохранение и подгрузку при обновление страницы
```    
// Master React Hooks in easy way | useContext
///https://www.youtube.com/watch?v=n7xQVRpYHYY


const itemPortal = React.createContext()


function App() {
  const items = {food: 'pza', drink: 'sold'}

  return(
    <itemPortal.Provider value={items}>
      <Kitchen />
      <DiningRoom />
    </itemPortal.Provider>
  )
}

```

### 10 Домашнее задание - Переход на TypeScript
  - Мигрируем наше приложение на TypeScript, создав новый проект или мигрировав существующий: 
    - [обсуждения](https://github.com/vitejs/vite/discussions/6799)
      1. install typescript, @types/react and @types/react-dom.
      2. in packages.json, replace vite build with tsc && vite build.
      3. configure your TS:
      ```json 
      tsconfig.json

      {
        "compilerOptions": {
          "target": "ESNext",
          "useDefineForClassFields": true,
          "lib": ["DOM", "DOM.Iterable", "ESNext"],
          "allowJs": false,
          "skipLibCheck": true,
          "esModuleInterop": false,
          "allowSyntheticDefaultImports": true,
          "strict": true,
          "forceConsistentCasingInFileNames": true,
          "module": "ESNext",
          "moduleResolution": "Node",
          "resolveJsonModule": true,
          "isolatedModules": true,
          "noEmit": true,
          "jsx": "react-jsx"
        },
        "include": ["src"],
        "references": [{ "path": "./tsconfig.node.json" }]
      }

      ```

      ```json
      tsconfig.node.json
      {
        "compilerOptions": {
          "composite": true,
          "module": "ESNext",
          "moduleResolution": "Node",
          "allowSyntheticDefaultImports": true
        },
        "include": ["vite.config.ts"]
      }
      ```
          - Install dev dependencies
          ``` npm install -D typescript @types/react @types/react-dom ```
          - In packages.json, replace:
          ``` "build": "vite build" => "build": "tsc && vite build" ```
          - Rename vite.config.js and main.jsx to vite.config.ts and main.tsx
          - Configure TypeScript by creating these two files in the root of your project: 
          tsconfig.json
          ```json
            {
              "compilerOptions": {
                "target": "ESNext",
                "useDefineForClassFields": true,
                "lib": ["DOM", "DOM.Iterable", "ESNext"],
                "allowJs": false,
                "skipLibCheck": true,
                "esModuleInterop": false,
                "allowSyntheticDefaultImports": true,
                "strict": true,
                "forceConsistentCasingInFileNames": true,
                "module": "ESNext",
                "moduleResolution": "Node",
                "resolveJsonModule": true,
                "isolatedModules": true,
                "noEmit": true,
                "jsx": "react-jsx"
              },
              "include": ["src"],
              "references": [{ "path": "./tsconfig.node.json" }]
            }          
          ```
          tsconfig.node.json
          ```json
            {
              "compilerOptions": {
                "composite": true,
                "module": "ESNext",
                "moduleResolution": "Node",
                "allowSyntheticDefaultImports": true
              },
              "include": ["vite.config.ts"]
            }          
          ```
          - n your index.html you should change the name of your script from the old main.jsx to main.tsx like this:
          ``` <script type="module" src="/src/main.tsx"></script> ```
          
