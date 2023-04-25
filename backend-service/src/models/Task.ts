import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {},
    status: {
        type: String,
        enum: ['NOT_STARTED', 'STARTED', 'COMPLETED'],
        default: 'NOT_STARTED',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

const Task = mongoose.model('Task', taskSchema);
export default Task;
