const router = require('express').Router();

// matches GET requests to /api/todos/
router.get('/', function (req, res, next) { /* etc */});

// matches POST requests to /api/todos/
router.post('/', function (req, res, next) { /* etc */});

// matches PUT requests to /api/todos/:todoId
router.put('/:todoId', function (req, res, next) { /* etc */});

// matches DELETE requests to /api/todos/:todoId
router.delete('/:todoId', function (req, res, next) { /* etc */});

module.exports = router;