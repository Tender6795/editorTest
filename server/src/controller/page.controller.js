const { Page } = require('../models/models')
const ApiError = require('../error/ApiError')

class PageController {
  async create(req, res, next) {
    const { text } = req.body
    if (!text) {
      return next(ApiError.badRequest('No text'))
    }
    const page = await Page.create({ text })
    return res.json(page)
  }

  async getAll(req, res) {
    const pages = await Page.findAll()
    return res.json(pages)
  }
}

module.exports = new PageController()
