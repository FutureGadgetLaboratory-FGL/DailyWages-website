import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const WorkerSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    servicesOffered: { type: Array, required: true, default: [] },
    ratings: { 
        type: Number,
        required: true,
        default: 1,
        min: 1,
        max: 5
    },
    reviews: [reviewSchema],
    availability: { type: Boolean, required: true, default: true },
    hireRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'HireRequest', }]
})

export default Worker = mongoose.model('Worker', WorkerSchema);