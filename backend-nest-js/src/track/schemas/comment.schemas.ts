import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Track } from './track.schemas';

export type CommentDocument = HydratedDocument<Comment>;

@Schema()
export class Comment {
  @Prop()
  username: string;

  @Prop()
  text: string;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Track'})
  track: Track;
}

//В треках мы указали список коментариев, а теперь в коментарии укажем, к какому треку он пренадлежит
//Тут нам достаточно хранить ссылку на сам трек: {type: mongoose...

export const CommentSchema = SchemaFactory.createForClass(Comment);