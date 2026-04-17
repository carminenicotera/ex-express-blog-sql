function notFound(req, res, next){
  res.status(404).json({
    error: {
      message: 'Resource not found'
    }
  })
}

module.exports = notFound