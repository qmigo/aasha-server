const router = require('express').Router()
const {
    createSponsor, createScholar, createGig,
    getSponsor, getScholar, getGig,
    contribute
} = require('../controllers/main')

router.route('/sponsor').get(getSponsor).post(createSponsor)

router.route('/scholar').get(getScholar).post(createScholar)

router.route('/gig/:scholarId').post(createGig)

router.route('/gigs').get(getGig)

router.route('/contribute').patch(contribute)

module.exports = router