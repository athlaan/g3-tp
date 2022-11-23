import UserData from "../models/Usuario.js";

const postUserData = (req, res) => {
    const { name, eMail, steamAccount} = req.body;
    const user = new UserData({ name, eMail, steamAccount });
  user.save((err, user) => {
    res.status(201).json(user);
  });
};

const getUserData = (req, res) => {
  UserData.find((err, users) => {
    res.status(200).json(users);
  });
};

const userController = {
    postUserData,
    getUserData
};

export default userController;