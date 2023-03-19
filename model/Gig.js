const mongoose = require('mongoose')

const GigSchema = new mongoose.Schema({
    
    sponsors: [{
        sponsorId: mongoose.Types.ObjectId,
        amount: Number,
        date: Date
    }],
    scholar_id : {
        type: mongoose.Types.ObjectId,
        required: true
    },
    totalAmount: { 
        type: Number,
        required: true
    },
    currAmount: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Gig', GigSchema)