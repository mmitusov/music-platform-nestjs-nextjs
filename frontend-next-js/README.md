npm install --save-dev sass
npm install @mui/icons-material
npm install @emotion/react
npm install @emotion/core
npm install @emotion/styled

Почистим сперва сгенерированый макет. Будем начинать с нуля. Удалим все из папки src и создадим там 2 пустые папки pages и styles. styles - все наши стили. pages - будет хранить роутинг на все наши страница. Также в pages создадим и _app.jsx. Но не нужно путать _app.jsx и index.jsx.

In Next.js, both index.jsx and _app.jsx serve different purposes.

index.jsx: This file represents the main page or the default page of a specific route. It is typically located in the pages directory as index.jsx or index.js. This file is responsible for rendering the content of the specific route it represents. For example, if you have a route like /home, the index.jsx file in the pages/home directory will be responsible for rendering the content of the /home route.

_app.jsx: This file represents the custom App component in Next.js. It is a special file that allows you to override the default App component provided by Next.js. The App component is a top-level component that wraps all other components in your application. It is useful for implementing global styles, setting up context providers, or initializing global state. By creating an _app.jsx file in the pages directory, you can extend the default App component and customize it according to your needs.

To summarize, index.jsx represents the main content of a specific route, while _app.jsx represents the custom App component that wraps all pages and allows you to customize the global behavior of your Next.js application.

В _app.jsx мы будем применять глобальные стили и глобальный лейаут нашего приложения.

Лейоут будет включать в себя хедер. Храниться лейаут будет в папке components/layout.

Далее начнем создавать остальные страница приложения:
    tracks/ - будет отображать список треков доступныхх к прослушиванию, а также ссылку на страницу для загрузки новых треков
    tracks/create/ - для загрузки новых треков, будем переходить на эту страницу
    tracks/[id] - Динамический роутинг на конкретный трек. При нажатии на конкретный трек, нас будет переводить на эту страницу. Здесь будет отображена детальная информация о треке, а также будет возможность оставить коментарий под треком

Также создадим папку typings, где мы будем хранить TypeScript типы.

в компоненте tracks/, при нажатии в любую точку карточки трека, нас будет переводить на соответствующий трека. Но внутри карточки у нас есть такие елементы как кнопка плей/пауза. И как сделать так, чтобы только пр нажатии на етот вложенный елемент, нас не переводило на новую страницу, а все остальные вложенные елементы продолжали отрабатывать как следует? Для этого воспользуемся методом синтетического ивента, как - preventDefault() или stopPropagation():
```
<div onClick={(e) => e.preventDefault()}> - предотвращает опрокидывание внешних событий на текущий компонент
<div onClick={(e) => e.stopPropagation()}> - альтернативный вариант
```