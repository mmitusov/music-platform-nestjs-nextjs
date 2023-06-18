import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import * as path from "path";
import * as fs from "fs";


export enum FileType {
    audio = 'audio',
    image = 'image'
}

@Injectable()
export class FileService {
    createFile(type: FileType, file) {
        try { //Так как при записи файлов могут возникнуть ошибки - завернем все в try/catch

        } catch(e) {
            throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
    removeFile(fileName: string) {

    }
}