module.exports = { message: function(PORT) { return process.env.MESSAGE ?
  `I am a ${process.env.MESSAGE} developer and my deployed app is running on port ${PORT}` :
  "I HAVE NOT SET MY MESSAGE ENVIRONMENT VARIABLE" }
}
