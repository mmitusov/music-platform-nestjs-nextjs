import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Track } from "./schemas/track.schemas";
import { Comment } from "./schemas/comment.schemas";
import { CreateTrackDto } from "./dto/create-track.dto";

@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<Track>,
        @InjectModel(Comment.name) private commentModel: Model<Comment>,
    ) {}

    async create(createTrackDto: CreateTrackDto): Promise<Track> {
        const createdTrack = await this.trackModel.create({createTrackDto, listened: 0});
        return createdTrack;
    }

    async getAll() {

    }

    async getOne() {

    }

    async delete() {

    }
}