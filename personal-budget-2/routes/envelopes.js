const express = require('express')
const router = express.Router()

const {
    createEnvelope,
    getAllEnvelopeByUserId,
    getEnvelopeById,
    deleteEnvelopeById,
    updateEnvelopeById
} = require('../controller/envelopes')


router.post('/', createEnvelope)
router.get('/', getAllEnvelopeByUserId)
router.get('/:id', getEnvelopeById)
router.delete('/:id', deleteEnvelopeById)
router.put('/:id', updateEnvelopeById)

module.exports = router;