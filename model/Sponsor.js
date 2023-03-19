const mongoose = require('mongoose')

const SponsorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    total:{
        type: Number,
        default: 0
    },
    gigs:[{
        gigId: mongoose.Types.ObjectId,
        amount: Number,
        date: Date
    }]
})

module.exports = mongoose.model('Sponsor', SponsorSchema)