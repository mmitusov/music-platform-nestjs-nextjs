import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Track } from "./schemas/track.schemas";

@Injectable()
export class TrackService {
    constructor(@InjectModel(Track.name) private trackModel: Model<Track>) {}

    async create() {

    }
    async getAll() {

    }
    async getOne() {

    }
    async delete() {

    }
}