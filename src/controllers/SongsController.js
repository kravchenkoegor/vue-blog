const Pic = require('../models/pic.model')

module.exports = {
  async index (req, res) {
    try {
      const song = await Pic.find({type: 'teen'}).limit(12)
      res.send(song)
    } catch (error) {
      res.status(400).send({
        error: `An error has occured ${error}`
      })
    }
  }
}