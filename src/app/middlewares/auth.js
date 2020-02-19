const jwt = require('jsonwebtoken')
const authConfig = require('../../config/auth')

modules.exports = (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({ error: 'Token not provided' })
  }
  const [, token] = authHeader.split('')

  try {

    jwt.verify(token, authConfig.secret)

  } catch (err) {

  }
} 