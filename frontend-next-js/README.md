npm install --save-dev sass
npm install react-stepper-horizontal
npm install @reduxjs/toolkit react-redux
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
    tracks/[id] - Динамический роутинг на конкретный трек. При нажатии на конкретный трек, нас будет переводить на эту страницу. Здесь будет отображена детальная информация о треке, а также будет возможность оставить коментарий под треком
    tracks/create/ - логика по загрузке новых треков, будет находиться сдесь

Также создадим папку typings, где мы будем хранить TypeScript типы.

в компоненте tracks/, при нажатии в любую точку карточки трека, нас будет переводить на соответствующий трека. Но внутри карточки у нас есть такие елементы как кнопка плей/пауза. И как сделать так, чтобы только пр нажатии на етот вложенный елемент, нас не переводило на новую страницу, а все остальные вложенные елементы продолжали отрабатывать как следует? Для этого воспользуемся методом синтетического ивента, как - preventDefault() или stopPropagation():
```
<div onClick={(e) => e.preventDefault()}> - предотвращает опрокидывание внешних событий на текущий компонент
<div onClick={(e) => e.stopPropagation()}> - альтернативный вариант
```

При начале работы с tracks/create/ - сперва создадим компонент который будет отвечать за отображение и подсвечивание текущего шага по загрузке трека. Для этого создадим новый компонент: StepWrapper. В веб разработке, компонет, который отвечает за функционал отображения пошагового прогресса, называют - Stepper. Мы не будем тратить время на то, чтобы создавать его вручную с нуля. А вместо этого воспользуемся библиотекой - react-stepper-horizontal. Однако react-stepper-horizontal не был создан под typescript, поэтому при его установки, вместе с установкой библиотеки не установились типы для нее. Скачть типы отдельно также не получиться, так как не сущействует отдельных типов под эту библиотеку. Поэтому `npm install @types/react-stepper-horizontal` не сработает. Единственнй выход, это либо воспользоваться другой библиотекой, либо модифицировать tsconfig.json. If you would like to disable it site wide you can instead edit tsconfig.json and add `"noImplicitAny": false`.

This Stepper library lets you attach click handlers to each step. For example, the following setup helps you navigate between steps by clicking the completed steps:
```
const steps = [
    { title: 'Track info', onClick: () => setActiveStep(0) },
    { title: 'Add track picture', onClick: () => setActiveStep(1) },
    { title: 'Add audio track', onClick: () => setActiveStep(2) },
];
```

При желании в Stepper, мы можем указать кнопки "Next step" и "Previous step" приям под Stepper.
```
{activeStep !== 0 && <button onClick={() => setActiveStep(activeStep-1)}>Previous step</button>}
{activeStep < steps.length-1 && <button onClick={() => setActiveStep(activeStep+1)}>Next step</button>}
```

Сам Stepper мы создали в StepWrapper.tsx компоненте. Внутри Stepper создадим компоненты как под ввод текста, так и под ввод картинок и аудио. При чем создавая ввод картинки/аудио, можно было воспользоваться 1-й из 2-х хитростей создания кастомного input:
```
const imgInput = useRef<HTMLInputElement>()
<button onClick={() => imgInput.current?.click()}>
    <input type='file' accept={'image/*'} ref={imgInput} hidden/>
    Upload image
</button>
```
Или
```
<button className={`${buttonAddFileStyle.addButton}`} type="button">
    <input type="file" id="add-file-btn" onChange={handleFileChange} hidden />
    <label htmlFor="add-file-btn">{fileName || 'Add file'}</label>
</button>
```

Далее создадим плеер, который будет отображаться в нижней части екрана. Компонент Player создадим в папке layout.

Закончив с основной частью верстки, приступим к функциональной части приложения. И начнем с установки глабального стейет менеджера - Redux.

!!!!!!!!!!!!!!!!!!
activeTrack: (state, action: PayloadAction<Track>) => {
      state.activeTrack = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    },

Затем создадим пару кастомных хуков, которые нам пригодяться в будущем. Для этого сперва создадим папку hooks. А внутри нее добавим следующие хуки:
