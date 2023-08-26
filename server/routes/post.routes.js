const express = require('express');
const post_router = express.Router();
const postModelController = require("../controllers/post.controller")

post_router.get('/',postModelController.getAll);

// post_router.get('/:id', postModelController.getOne);

post_router.delete('/:id',postModelController.delete);

post_router.post('/',postModelController.post);

// post_router.put('/:id',postModelController.edit);


module.exports = post_router;