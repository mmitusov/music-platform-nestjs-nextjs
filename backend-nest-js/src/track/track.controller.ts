import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";
import { ObjectId } from "mongoose";

@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() createTrackDto: CreateTrackDto) { //CreateTrackDto - type for TypeScript
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

    delete() {

    }
}