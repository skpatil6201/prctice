import { model, Document, Schema } from "mongoose"

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: "user" | "admin";
    chaeAt: Date;
}

const userSchema = new Schema<IUser>({
    name: {
        require: true,
        type: String,
    },
    email: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum:["user","admin"],
        default:"user",
        required:true
    }

})

export const User = model<IUser>("User",userSchema)