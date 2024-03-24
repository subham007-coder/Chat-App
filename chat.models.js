import mongoose, {Schema} from "mongoose";

const chatSchema = new Schema({
    chatText:{
        type: String,
        required: true
    },
    chatTime:{
        type: Date,
        default: Date.now
    },
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    }
}, {timestamp: true})


export const Chat = mongoose.model('Chat', chatSchema);