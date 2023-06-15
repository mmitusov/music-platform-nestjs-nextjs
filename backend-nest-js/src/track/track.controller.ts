import { Controller, Get } from "@nestjs/common";

@Controller('/tracks')
export class TrackController {
    create() {

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