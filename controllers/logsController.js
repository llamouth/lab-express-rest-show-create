const express = require("express")
const logs = express.Router()
const log = require("../models/log")
const { sortOrder, filterMistakes, filterLastCrisis } = require("../queryHelpers/logHelpers")

logs.get("/", (req, res) => {
    const { order, mistakes, lastCrisis} = req.query
    let finalresult = log 
    if(order) {
        finalresult = sortOrder(log, order)
    }else if (mistakes){
        finalresult = filterMistakes(log, mistakes)
    }else if(lastCrisis){
        finalresult = filterLastCrisis(log, lastCrisis)
    }
    res.json(finalresult)
})

// Creating A new log
logs.post("/", (req, res) => {
    log.push(req.body)
    res.json(log[log.length - 1])
})

// Delete a log that already exist
logs.delete("/:index", (req, res) => {
    const {index} = req.params
    if(log[index]){
        log.splice(index, 1)
        res.json({message: "Log successfully deleted"})
    }else {
        res.json({error: "log not found"})
    }
})

// show one log
logs.get("/:index", (req, res) => {
    const { index } = req.params
    if(log[index]){
        res.json(log[index])
    }else {
        res.redirect("/logs")
    }
})

// Update a log
logs.put("/:index", (req, res) => {
    const {index} = req.params
    log[index] = req.body
    res.status(200).json(log[index])
})

module.exports = logs;