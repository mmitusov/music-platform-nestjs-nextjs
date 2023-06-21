import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId, Types } from "mongoose";
import { Track } from "./schemas/track.schemas";
import { Comment } from "./schemas/comment.schemas";
import { CreateTrackDto } from "./dto/create-track.dto";
import { AddCommentDto } from "./dto/add-comment.dto";
import { FileService, FileType } from "../file/file.service";

@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private trackModel: Model<Track>,
        @InjectModel(Comment.name) private commentModel: Model<Comment>,
        private fileService: FileService //Сервис из другого FileModule модуля
    ) {}

    async create(createTrackDto: CreateTrackDto, picture, audio): Promise<Track> { //CreateTrackDto - type for TypeScript
        const audioPath = this.fileService.createFile(FileType.audio, audio);
        const picturePath = this.fileService.createFile(FileType.picture, picture);
        const createdTrack = await this.trackModel.create({...createTrackDto, listened: 0, picture: picturePath, audio: audioPath});
        return createdTrack;
    }

    async getAll(count: number = 10, offset: number = 0): Promise<Track[]> {
        //.skip(offset) - Чтобы пропустить уже просмотренные треки, а подгрузить только нужную партию, в количестве ".limit(count)"
        const getAllTracks = await this.trackModel.find().skip(offset).limit(count); 
        return getAllTracks;
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

    async listen(id: ObjectId) {
        const getOneTrack = await this.trackModel.findById(id);
        getOneTrack.listened += 1;
        await getOneTrack.save();
    }

    async searchTrack(query: string): Promise<Track[]> {
        const findTrack = await this.trackModel.find({
            name: new RegExp(query, 'i') //Добавив 'i', поиск теперь будет выполняться без чувствительности к регистру (большая/маленькая буква)
        });
        return findTrack;
    }
}