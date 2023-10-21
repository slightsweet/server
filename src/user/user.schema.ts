import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
    @Prop()
    name: string;
    
    @Prop({ required: true })
    weChatAccount: string

    @Prop()
    age: number;

   
}

export const UserSchema = SchemaFactory.createForClass(User);