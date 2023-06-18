import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId, Types } from "mongoose";
import { Track } from "./schemas/track.schemas";
import { Comment } from "./schemas/comment.schemas";
import { CreateTrackDto } from "./dto/create-track.dto";
import { AddCommentDto } from "./dto/add-comment.dto";

@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<Track>,
        @InjectModel(Comment.name) private commentModel: Model<Comment>,
    ) {}

    async create(createTrackDto: CreateTrackDto, picture, audio): Promise<Track> { //CreateTrackDto - type for TypeScript
        const createdTrack = await this.trackModel.create({...createTrackDto, listened: 0});
        return createdTrack;
    }

    async getAll(): Promise<Track[]> {
        const getAllTrack = await this.trackModel.find();
        return getAllTrack;
    }

    async getOne(id: ObjectId): Promise<Track> { //ObjectId - type for TypeScript
        const getOneTrack = await this.trackModel.findById(id).populate('comments');
        return getOneTrack;
    }

    async delete(id: ObjectId): Promise<Types.ObjectId> {
        const trackBeforeDelete = await this.trackModel.findByIdAndDelete(id);
        return trackBeforeDelete?._id;
    }

    async addComment(addCommentDto: AddCommentDto): Promise<Comment> {
        const getOneTrack = await this.trackModel.findById(addCommentDto.trackId);
        const createdComment = await this.commentModel.create({...addCommentDto});
        getOneTrack.comments.push(createdComment?._id as any);
        await getOneTrack.save();
        return createdComment;
    }
}