import mongoose from 'mongoose';

export const AddressSchema = new mongoose.Schema({
    country: { type: String },
    state: { type: String },
    city: { type: String },
    area: { type: String },
    street: { type: String },
    houseNo: { type: String },
    pincode: { type: Number }
})