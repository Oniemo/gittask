import { User } from "../models/user";

const findAll = async () => { return await User.findAll();};

const findById = async (id) => { return await User.findByPk(id);};

const create = async (data) => {return await User.create(data);};

const update = async (id,data) => {return await User.update(data, { where: {id}});};

const remove = async (id) => { return await User.destroy({ where: { id }});};

export{
    findAll,findById,create,update,remove,
};