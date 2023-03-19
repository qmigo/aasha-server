const mongoose = require('mongoose')

const ScholarSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    details:{
        type: String,
        required: true
    },
    gigs: [{
        gigId: mongoose.Types.ObjectId
    }]
})

module.exports = mongoose.model('Scholar', ScholarSchema) 