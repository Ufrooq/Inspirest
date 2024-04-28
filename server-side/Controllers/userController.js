import userModel from "../Models/userModel.js";

export const createUser = async () => {
    try {
        const newUser = await userModel.create({});
        res.send(user);
    } catch (error) {
        console.log(error);
    }
}