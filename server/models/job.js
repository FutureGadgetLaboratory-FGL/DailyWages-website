import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    hireRequest: { type: mongoose.Schema.Types.ObjectId, ref: 'HireRequest', required: true },
    status: { type: String, enum: ['finished', 'ongoing']}
})