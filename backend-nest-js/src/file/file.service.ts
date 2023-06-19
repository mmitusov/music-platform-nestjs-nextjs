//Чтобы сохрнить файл, сперва нам нужно сгенерировать путь где он будет храниться: const filePath = ...
//Далее нам нужно задать уникальное имя для файла (что-то типо его id), чтобы мы могли его идентифицировать: const fileName = ...
//Так как расширение файла может быть разным, выцепим его из того параметра, что мы принемаем в функцию: const fileExtention =  ...
//И чтобы сгенерированое имя нашего файла имело расширение, добавим его к имени файла: uuid.v4() + fileExtention;

//Так как мы сохраняем файлы разных типов (картинки, аудио и т.д.), то желательно, чтобы под каждый тип файлов создавались соответствующие папки, а не все хранилось в одной куче
//Для это мы и принимыем параметром "type: FileType". Чтобы в зависимости от входящего типа, мы сохраняли файлы в соответствующею папку - path.resolve(__dirname, '..', 'static', type);
//Поэтому, для удобства, мы и создали "enum FileType", который хранит в себе все типы файлов с которыми мы работаеем
//Сделали мы это для удобста и безопасности 
//Чтобы не вбивать типы данных вручную и чтобы исключить возможность опечатки при указании типов

//Затем мы хотим проверить, существует ли вообще папка по тому пути, куда мы хотим сохранить файл
//Если нет, то мы ее создадим: fs.mkdirSync(filePath, {recursive: true})
//{recursive: true}: Если несколько вложенных папок не существует, то они все по очереди будут создаваться

//После сохранения файла, возвращает строку с его типом и именем

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path"; //Модули из NodeJS для работы с путями. Чтобы они были одинаковы для всех OS
import * as fs from "fs"; //Модули из NodeJS для работы с файловой системой (запись или удаление)
import * as uuid from "uuid"; //Генерит уникальные IDшники

export enum FileType {
    audio = 'audio',
    picture = 'picture'
}

@Injectable()
export class FileService {
    createFile(type: FileType, file): string {
        try { //Так как при записи файлов могут возникнуть ошибки - завернем все в try/catch
            const fileExtention = file.originalname.split('.').pop(); //.originalname - это метод из встроемной библиотеки 'multer'
            const fileName = uuid.v4() + '.' + fileExtention;
            const filePath = path.resolve(__dirname, '..', 'static', type);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            };
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer); //Склеиваем путь к папке и название файла, после чего сохраняем файл; ".buffer" - это метод из 'multer'
            return type + '/' + fileName;
        } catch(e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    
    removeFile(fileName: string) {

    }
}