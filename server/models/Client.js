const mongoose = require('mongoose');

const ClientSchema = new mongoose.Schema({
    name : {
        type : String,
    },
    description :{
        type : String,
    },
    status :{
        type : String,
        enum : ['not started','In Progress','Completed']
    },
    Client :{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Client'
    }
});

module.exports = mongoose.model('Client',ClientSchema)