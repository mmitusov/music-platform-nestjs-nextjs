//Чтобы сохрнить файл, сперва нам нужно сгенерировать путь к этому файлу
//

import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path"; //Модули из NodeJS для работы с путями. Чтобы они были одинаковы для всех OS
import * as fs from "fs"; //Модули из NodeJS для работы с файловой системой (запись или удаление)
import * as uuid from "uuid"; //Генерит уникальные IDшники

export enum FileType {
    audio = 'audio',
    image = 'image'
}

@Injectable()
export class FileService {
    createFile(type: FileType, file): string {
        try { //Так как при записи файлов могут возникнуть ошибки - завернем все в try/catch
            const fileExtention = file.originalname.split('.').pop();
            const fileName = uuid.v4() + fileExtention;
            const filePath = path.resolve(__dirname, '..', 'static', fileName);
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            };
            fs.writeFileSync(path.resolve(filePath, fileName), file.buffer);
            return type + '/' + fileName;
        } catch(e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    
    removeFile(fileName: string) {

    }
}