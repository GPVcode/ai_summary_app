const express = require('express');

const router = express.Router();

const{
    getSummaries,
    getSummary,
    createSummary,
    deleteSummary,
    updateSummary
} = require('../controllers/summaryController')

router.get('/', getSummaries)

router.get('/:id', getSummary)

router.post('/', createSummary)

router.delete('/:id', deleteSummary)

router.patch('/:id', updateSummary)

module.exports = router;