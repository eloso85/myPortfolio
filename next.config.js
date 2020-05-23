require('dotenv').config()
const withImages = require('next-images')

module.exports = {
    env: {
      SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
    }
  }


module.exports = withImages({})

