//Создаем асинхронную функция start. И создаем новую app при помощи встроенного NestFactory. Куда далее параметром передаем модулю, который мы сейчас создадим
//Создаем папку нашего модуля - app.module.ts. Nest часто диктует то как должны называться файлы, поэтому созданную папку мы создали с таким именем, так как это имя зарезервировано на Nest
//Экспортируем нашу пустую заготовку класса - AppModule и вставляем ее параметром в NestFactory
//Далее указажем какой порт мы будем слушать и колбеком будем выводить текущий порт в консоль. Причем функция прослушки порта в Несте должна быть асинхронной
//И на данном этапе базовая конфигурайия сервера готова

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

const start = async () => {
    try {
        const PORT = process.env.PORT || 3000;
        const app = await NestFactory.create(AppModule);
        await app.listen(PORT, () => console.log(`App is currently working on port ${PORT}`));
    } catch (e) {
        console.log(e)
    } 
}
start()