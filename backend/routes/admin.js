const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/")

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/dashboard', (req, res) => {
    res.send("Página de posts")
})

module.exports = router