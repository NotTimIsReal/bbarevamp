'use strict';

import mongoose from 'mongoose';
const chatBot=new mongoose.Schema({
    guildID: {
        type: String,
        required: true
    },
    channelID: {
        type: String,
        required: true
    }
}) 


export default mongoose.model('chatBot', chatBot)