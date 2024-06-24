const express = require("express")
const logs = express.Router()
const log = require("../models/log")

logs.get("/", (req, res) => {
    res.json(log)
})

logs.get("/:index", (req, res) => {
    const { index } = req.params
    if(log[index]){
        res.json(log[index])
    }else {
        res.status(404).json({error: "You have encountered an error"})
    }
})

logs.post("/", (req, res) => {
    log.push(req.body)
    res.json(log[log.length - 1])
})

module.exports = logs;