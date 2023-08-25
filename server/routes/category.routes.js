const express = require('express');
const category_router = express.Router();
const categoryModelController = require("../controllers/category.controller")

category_router.get('/',categoryModelController.getAll);

// category_router.get('/:id', categoryModelController.getOne);

category_router.delete('/:id',categoryModelController.delete);

category_router.post('/',categoryModelController.post);

// category_router.put('/:id',categoryModelController.edit);


module.exports = category_router;