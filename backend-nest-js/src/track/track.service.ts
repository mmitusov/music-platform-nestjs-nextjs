import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { Track } from "./schemas/track.schemas";
import { Comment } from "./schemas/comment.schemas";
import { CreateTrackDto } from "./dto/create-track.dto";

@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<Track>,
        @InjectModel(Comment.name) private commentModel: Model<Comment>,
    ) {}

    async create(createTrackDto: CreateTrackDto): Promise<Track> { //CreateTrackDto - type for TypeScript
        const createdTrack = await this.trackModel.create({...createTrackDto, listened: 0});
        return createdTrack;
    }

    async getAll(): Promise<Track[]> {
        const getAllTrack = await this.trackModel.find();
        return getAllTrack;
    }

    async getOne(id: ObjectId): Promise<Track> { //ObjectId - type for TypeScript
        const getOneTrack = await this.trackModel.findById(id);
        return getOneTrack;
    }

    async delete() {

    }
}