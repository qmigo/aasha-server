const Gig = require('../model/Gig')
const Scholar = require('../model/Scholar')
const Sponsor = require('../model/Sponsor')

const createSponsor = async (req, res)=>{
    const sponsor = await Sponsor.create(req.body)
    res.status(200).json(sponsor)
}
const getSponsor = async(req, res)=>{
    const sponsor = await Sponsor.find({})
    // const sponsor = await Sponsor.findById(req.body.sponsorId)
    res.status(200).json(sponsor)
}

const createScholar = async (req, res)=>{
    const scholar = await Scholar.create(req.body)
    res.status(200).json(scholar)
}

const getScholar = async(req, res)=>{
    const scholar = await Scholar.find({})
    // const scholar = await Scholar.findById(req.body.scholarId)
    res.status(200).json(scholar)
} 

const createGig = async(req, res)=>{
    const details = {...req.body, 'scholar_id': req.params.scholarId }
    const gig = await Gig.create(details)
    res.status(200).json(gig)
}

const getGig = async (req, res)=>{
    const gigs = await Gig.find({})
    res.status(200).json(gigs)
}

const contribute = async(req, res)=>{
    const sponsor = await Sponsor.findByIdAndUpdate(req.body.sponsorId, 
        {
            $push: {
                gigs: {
                    gigId: req.body.gigId,
                    amount: req.body.amount, 
                    date: new Date().getTime()
                }
            },
            $inc: {
                total: req.body.amount
            }

        },
        {runValidators: true, new: true})
    
    const gig = await Gig.findByIdAndUpdate(req.body.gigId,
        {
            $push: {
                sponsors: {
                    id: req.body.sponsorId,
                    amount: req.body.amount,
                    date: new Date().getTime()
                }
            }
            ,
            $inc: {
                currAmount: req.body.amount,
                totalAmount: -1*req.body.amount
            }
        },
        {runValidators: true, new: true})

    res.status(200).json({sponsor, gig})
}

module.exports = {
    createSponsor, createScholar, createGig,
    getSponsor, getScholar, getGig,
    contribute
}
