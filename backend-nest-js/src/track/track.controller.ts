//@Query() - http://localhost:3000/tracks?count=2&offset=2

import { Body, Controller, Delete, Get, Param, Post, Query, UploadedFiles, UseInterceptors } from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { AddCommentDto } from "./dto/add-comment.dto";
import { FileFieldsInterceptor } from "@nestjs/platform-express";

@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {}

    @Post()
    @UseInterceptors(FileFieldsInterceptor([ //Для работы с файлаии
        { name: 'picture', maxCount: 1 }, //Задаем, что ждем 1 файл "picture"
        { name: 'audio', maxCount: 1 }, //Задаем, что ждем 1 файл "audio"
    ]))
    create(@UploadedFiles() files, @Body() createTrackDto: CreateTrackDto) { //CreateTrackDto - type for TypeScript, @UploadedFiles() - для работы с файлами
        const {picture, audio} = files;
        return this.trackService.create(createTrackDto, picture[0], audio[0]) //picture, audio - приходят в форме массивов, поэтому берем по первому индексу
    }

    @Get()
    getAll(@Query('count') count: number, @Query('offset') offset: number) {
        return this.trackService.getAll(count, offset)
    }

    //http://localhost:3000/tracks/search/?query=trackName
    @Get('/search') //!!!Если опустить этот запрос хоть немного ниже других запросов, то он не будет работать!!! Почему так - не знаю
    searchTrack(@Query('query') query: string) {
        return this.trackService.searchTrack(query)
    }

    @Get(':trackId')
    getOne(@Param('trackId') id: ObjectId) { //ObjectId - type for TypeScript
        return this.trackService.getOne(id)
    }
    
    //http://localhost:3000/tracks/removeFile/:?trackId=6493f441dc5d3158a835484b
    //Удаляет медиа файлы на сервере и из выбранного трека. Напрмер если мы хотим их заменить на что-то другое 
    @Delete('/removeMedia/:trackId')
    removeFile(@Query('trackId') trackId: string) {
        return this.trackService.removeFile(trackId)
    }

    //http://localhost:3000/tracks/deleteTrack/?trackId=6493f441dc5d3158a835484b
    //Удаляет трек целиком и связанные с ним коментарии
    @Delete('/deleteTrack')
    deleteTrack(@Query('trackId') trackId: string) {
        return this.trackService.deleteTrack(trackId)
    }

    // //http://localhost:3000/tracks/6493f441dc5d3158a835484b
    // @Delete(':trackId')
    // delete(@Param('trackId') id: ObjectId) {
    //     return this.trackService.delete(id)
    // }

    @Post('/comment')
    addComment(@Body() addCommentDto: AddCommentDto) {
        return this.trackService.addComment(addCommentDto)
    }

    @Post('/listen/:trackId')
    addListened(@Param('trackId') id: ObjectId) {
        return this.trackService.listen(id)
    }
}