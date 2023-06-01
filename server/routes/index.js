const router = require('express').Router();

router.use('/todos', require('./todos')); // matches all requests to /api/todos/

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

module.exports = router;