import { Body, Controller, Get, Post } from "@nestjs/common";
import { TrackService } from "./track.service";
import { CreateTrackDto } from "./dto/create-track.dto";

@Controller('/tracks')
export class TrackController {
    constructor(private trackService: TrackService) {}

    @Post()
    create(@Body() createTrackDto: CreateTrackDto) {
        return this.trackService.create(createTrackDto)
    }

    @Get()
    getAll() {
        return 'Test track message'
    }

    getOne() {

    }

    delete() {

    }
}