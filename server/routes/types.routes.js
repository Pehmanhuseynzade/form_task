const express = require('express');
const types_router = express.Router();
const typesModelController = require("../controllers/types.controller")

types_router.get('/',typesModelController.getAll);

// types_router.get('/:id', typesModelController.getOne);

types_router.delete('/:id',typesModelController.delete);

types_router.post('/',typesModelController.post);

// types_router.put('/:id',typesModelController.edit);


module.exports = types_router;