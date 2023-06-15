import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Comment } from './comment.schemas';

export type TrackDocument = HydratedDocument<Track>;

@Schema()
export class Track {
  @Prop()
  name: string;

  @Prop()
  artist: string;

  @Prop()
  track: string;

  @Prop()
  listened: number;

  @Prop()
  picture: string;

  @Prop()
  audio: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }] })
  comments: Comment[];
}

//Для коментариев, мы указываем что данные у нас будут храниться как массив объектов - comments: Comment[]
//А так как коменты будут храниться в другой таблице - также укажем как 2 сущности Track и Comment между собой связаны - @Prop({ type: [{...
//То есть тут мы не будем хранить сами коментарии, а будем лишь хранить ссылки на эти коментарии

export const TrackSchema = SchemaFactory.createForClass(Track);