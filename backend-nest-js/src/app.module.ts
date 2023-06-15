//После создания файла экспортируем от сюда класс AppModule и помечаем его декоратором @Module, который параметром принимает объект
//Декоратор - это некая обертка которая добавляет на нашу функцию/класс новый функционал. А также наш @Module сообщает о том, что он модуль
//И после создания пустого модуля теперь мы можем эго экспортировать в main.ts как заготовку
//После создания базовой структуры, начнем подвязывать в наш модуль контроллеры и сервисы нашего приложения
//Это нужно для того, чтобы сделать эти контроллеры и сервисы работоспособными
//Для этого в поле controllers, создаем массив, где через запятую перечислим все контроллеры которые будут работать в рамках нашего текущего модуля
//А в поле providers, также создаем массив, где через запятую перечислим все сервисы которые будут работать в рамках нашего текущего модуля
//Имя модулю задаем при его экспорте - export class AppModule {}
//imports: - Служит для того чтобы импортировать и подвязывать внешние модули к текущему модулю

//В MongooseModule указываем ЮРЛ после создания кластера

import { Module } from "@nestjs/common";
import { TrackModule } from "./track/track.module";
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        TrackModule,
        ConfigModule.forRoot(),
        MongooseModule.forRoot(`mongodb+srv://Max:${process.env.MONGO_DB_PASSWORD}@music-platform.cyuu8cm.mongodb.net/?retryWrites=true&w=majority`)
    ]
})
export class AppModule {}