const typesModel = require("../models/types.model")

const typesModelController = {
    getAll: async (req, res) => {
        const { type } = req.query
        const gettypes = await typesModel.find()
        if (!type) {
            res.status(200).send(gettypes)
        }
        else {
            const searched = get.filter((x) =>
                x.type.toLowerCase().trim().includes(type.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletetypes = await typesModel.findByIdAndDelete(id)
        res.status(200).send(deletetypes)
    },
    post: async (req, res) => {
        const { type } = req.body
        const posttypes = new typesModel({
            type: type,
        })
        await posttypes.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: posttypes
        })
    }
}

module.exports = typesModelController;