'Use strict'

async function activate(req, res, next) {
  const {
    verificationCode
  } = req.query;

  if (!verificationCode) {
    return res.status(400)
  }
}

module.export = activate;