const express = require('express');
const userinfo_router = express.Router();
const userinfoModelController = require("../controllers/userinfo.controller")

userinfo_router.get('/',userinfoModelController.getAll);

// userinfo_router.get('/:id', userinfoModelController.getOne);

userinfo_router.delete('/:id',userinfoModelController.delete);

userinfo_router.post('/',userinfoModelController.post);

// userinfo_router.put('/:id',userinfoModelController.edit);


module.exports = userinfo_router;