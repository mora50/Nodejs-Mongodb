const Mail = require('../service/Mail')

class PurchaseMail {

  get key() {
    return 'PurchaseMail'
  }

  async handle(job, done) {

    const { ad, user, content } = job.data

    await Mail.sendMail({
      from: '"César Augusto josé" <cesaraugusto9700@gmail.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      html: `<p> o usuário ${user.name} tem interesse em seu produto ${ad.title} o e-mail dele é ${user.email} 
        <br>${content} 
        
      </p>`

    })

    return done()
  }
}

module.exports = new PurchaseMail()