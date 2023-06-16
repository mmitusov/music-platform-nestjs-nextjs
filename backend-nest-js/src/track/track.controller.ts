import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";
import { AddCommentDto } from "./dto/add-comment.dto";

@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() createTrackDto: CreateTrackDto, picture, audio) { //CreateTrackDto - type for TypeScript
        return this.trackService.create(createTrackDto)
    }

    @Get()
    getAll() {
        return this.trackService.getAll()
    }

    @Get(':trackId')
    getOne(@Param('trackId') id: ObjectId) { //ObjectId - type for TypeScript
        return this.trackService.getOne(id)
    }

    @Delete(':trackId')
    delete(@Param('trackId') id: ObjectId) {
        return this.trackService.delete(id)
    }

    @Post('/comment')
    addComment(@Body() addCommentDto: AddCommentDto) {
        return this.trackService.addComment(addCommentDto)
    }
}