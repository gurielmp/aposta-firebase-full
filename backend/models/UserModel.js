import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    birthday:{
        type: String,
        required: false
    }
});

export default mongoose.model('Users', User);