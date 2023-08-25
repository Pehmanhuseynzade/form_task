const categoryModel = require("../models/category.model")

const categoryModelController = {
    getAll: async (req, res) => {
        const { companyname } = req.query
        const getcategory = await categoryModel.find()
        if (!companyname) {
            res.status(200).send(getcategory)
        }
        else {
            const searched = get.filter((x) =>
                x.companyname.toLowerCase().trim().includes(companyname.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deletecategory = await categoryModel.findByIdAndDelete(id)
        res.status(200).send(deletecategory)
    },
    post: async (req, res) => {
        const { companyname, companycategory } = req.body
        const postcategory = new categoryModel({
            companyname: companyname,
            companycategory: companycategory
        })
        await postcategory.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postcategory
        })
    }
}

module.exports = categoryModelController;