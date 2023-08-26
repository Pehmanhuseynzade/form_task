const postModel = require("../models/post.model")

const postModelController = {
    getAll: async (req, res) => {
        const { type } = req.query
        const getinfo = await postModel.find()
        if (!type) {
            res.status(200).send(getinfo)
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
        const deleteinfo = await postModel.findByIdAndDelete(id)
        res.status(200).send(deleteinfo)
    },
    post: async (req, res) => {
        const { type, companyname, companycategory,name,surname,age } = req.body
        const postinfo = new postModel({
            type: type,
            companyname: companyname,
            companycategory: companycategory,
            name:name,
            surname:surname,
            age:age
        })
        await postinfo.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postinfo
        })
    }
}

module.exports = postModelController;