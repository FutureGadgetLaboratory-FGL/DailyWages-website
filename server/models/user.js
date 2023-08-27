import mongoose from "mongoose";
import { AddressSchema } from "./address";

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    phone: { type: Num },
    address: AddressSchema,
    photo: { type: String }
})

export default User = mongoose.model('User', UserSchema);