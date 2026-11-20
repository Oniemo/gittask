import{
    findAll,findById,create,update,remove,
} from '../repositories/userRepository.js'

const listUsers = async () => {return await findAll();};

const getUsers = async (id) => {const user = await findById(id);
    if (!user) {
        throw new Error("пользователь не найден");
    }
    return user;
};

const addUser = async (data) => {
    if (!data.email || !data.email.includes('@')) {
        throw new Error('неправильный емаил')
    }
    return await create(data);
};

const editUser = async(id,data) => {const existing = await findById(id);
    if (!existing) {throw new Error('Пользователь не найден');}
    return await remove(id);
}

const deleteUser = async(id) => { const existing = await findById(id);
    if (!existing) {
        throw new Error('User not found');
    }
    return await remove(id);
};

export{listUsers,getUsers,addUser,editUser,deleteUser,};