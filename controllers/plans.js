const express = require('express')
const router = express.Router()
const plansList = require('../models/plansdb.js')
const Plans = require('../models/plansschema.js')

//SEED
router.get('/seed', (req, res) => {
  Plans.create(plansList, (err, allPlans) => {
    res.redirect('/')
  })
})

//INDEX
router.get('/', (req, res) => {
  Plans.find({}, (err, allPlans) => {
    res.render('index.ejs', {plan: allPlans})
  })
})

//NEW
router.get('/new', (req, res) => {
  res.render('new.ejs')
})

//SHOW
router.get('/:id', (req, res) => {
  Plans.findById(req.params.id, (err, currentPlan) => {
    res.render('show.ejs', {plan: currentPlan})
  })
})

//EDIT
router.get('/:id/edit', (req, res) => {
  Plans.findById(req.params.id, (err, currentPlan) => {
    res.render('edit.ejs', {plan: currentPlan})
  })
})

//CREATE
router.post('/', (req, res) => {
  Plans.create(req.body)
  res.redirect('/')
})

//UPDATE
router.put('/:id', (req, res) => {
  Plans.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedPlan) => {
    res.redirect('/')
  })
})

//DELETE
router.delete('/:id', (req, res) => {
  Plans.findByIdAndDelete(req.params.id, (err, data) => {
    res.redirect('/')
  })
})

module.exports = router
