const { Page } = require('../models/models')
const ApiError = require('../error/ApiError')

class PageController {
  async create(req, res) {
    const { text } = req.body
    const page = await Page.create({ text })
    return res.json(page)
  }

  async getAll(req, res) {
    
  }
}

module.exports = new PageController()
