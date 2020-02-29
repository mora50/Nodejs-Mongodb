const Ad = require('../models/Ad')
const User = require('../models/User')
const Mail = require('../service/Mail')

class PurchaseController {

  async store(req, res) {

    const { ad, content } = req.body

    const purchaseAd = await Ad.findById(ad).populate('author')

    const user = await User.findById(req.userId)

    await Mail.sendMail({
      from: '"César Augusto josé" <cesaraugusto9700@gmail.com>',
      to: purchaseAd.author.email,
      subject: `Solicitação de compra: ${purchaseAd.title}`,
      html: `<p>${content}</p>`
    })

    return res.send()

  }
}

module.exports = new PurchaseController()