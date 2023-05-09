const Summary = require('../models/summaryModel');
const mongoose = require('mongoose');

const getSummaries = async (req, res) => {
    // find empty object means retrieve all. Sort from latest update.
    const summaries = await Summary.find({}).sort({createdAt: -1})
    res.status(200).json(summaries)
}

const getSummary = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: "No such summary"});
    }

    const summary = await Summary.findById(id);

    if(!summary){
        return res.status(404).json({ error: 'No such summary' })
    } else{
        res.status(200).json(summary);
    }
}

const createSummary = async (req, res) => {
    const { title, summary } = req.body;
    try{
        const newSummary = await Summary.create({ title, summary });
        res.status(200).json(newSummary)
    } catch(error){
        res.status(400).json({ error: error.message })
    }
}

const deleteSummary = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'No such summary' })
    }

    const summary = await Summary.findOneAndDelete({_id: id})

    if(!summary){
        return res.status(404).json({ error: 'No such summary'})
    }
    res.status(200).json(summary);
}

const updateSummary = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No such summary"});
    }

    // Update the summary
    const summary = await Summary.findOneAndUpdate({ _id: id }, {
        ...req.body
    })

    if(!summary){
        return res.status(400).json({ error: 'No such summary'})
    }
    res.status(200).json(summary)
}

module.exports = {
    getSummaries,
    getSummary,
    createSummary,
    deleteSummary,
    updateSummary
}