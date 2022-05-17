const mongoose = require('mongoose')

const plansSchema = new mongoose.Schema ({
  name: String,
  description: String,
  importance: String,
  deadline: String,
  progress: String
})

const planCollection = mongoose.model('Plan', plansSchema)

module.exports = planCollection
