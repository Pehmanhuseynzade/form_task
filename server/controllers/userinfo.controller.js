const userinfoModel = require("../models/userinfo.model")

const userinfoModelController = {
    getAll: async (req, res) => {
        const { name } = req.query
        const getinfo = await userinfoModel.find()
        if (!name) {
            res.status(200).send(getinfo)
        }
        else {
            const searched = get.filter((x) =>
                x.name.toLowerCase().trim().includes(name.toLowerCase().trim())
            )
            res.status(200).send(searched)
        }
    },
    delete: async (req, res) => {
        const id = req.params.id
        const deleteinfo = await userinfoModel.findByIdAndDelete(id)
        res.status(200).send(deleteinfo)
    },
    post: async (req, res) => {
        const { name, surname, age } = req.body
        const postinfo = new userinfoModel({
            name: name,
            surname: surname,
            age: age,
        })
        await postinfo.save()
        res.status(200).send({
            message: "Posted succefully!",
            payload: postinfo
        })
    }
}

module.exports = userinfoModelController;