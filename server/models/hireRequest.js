import mongoose from 'mongoose';
import { AddressSchema } from './address';

const workDurationSchema = new mongoose.Schema({
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    timings: [
        {
            day: {
                type: String,
                enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            },
            startTime: {
                type: String,
                required: true,
            },
            endTime: {
                type: String,
                required: true,
            },
        },
    ],
});

const HireSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    worker: { type: mongoose.Schema.Types.ObjectId, ref: 'Worker', required: true },
    serviceRequested: { type: Array, required: true, default: [] },
    payment: { type: Number, default: 0},
    location: AddressSchema,
    message: { type: String, default: "" },
    workDuration: workDurationSchema
})