const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const user = await User.findAll()
    return res.json(user)
});

const create = catchError(async(req, res) => {
    const user = req.body
    const createUser = await User.create(user)
    return res.status(201).json(createUser)

});

const getOneUser = catchError(async(req, res) => {
    const { id } = req.params
    const oneUser = await User.findByPk(id)
    if(!oneUser) return res.status(404).json({message:"User not found"})
    return res.status(201).json(oneUser)

});

const removeUser = catchError(async(req, res) => {
    const { id } = req.params
    const deleteUser = await User.destroy({where: {id} })
    if(!deleteUser) return res.status(404).json({message:"User not found"})
    return res.sendStatus(204)

});

const update = catchError(async(req, res) => {
    const { id } = req.params
    const user = req.body
    const updateUser = await User.update(user, {where: {id}, returning: true });

    if(updateUser[0] == 0) return res.status(404).json({message:"User not found"})

    return res.json(updateUser [1][0])
    
})


module.exports = {
    getAll,
    create,
    getOneUser,
    removeUser,
    update
}