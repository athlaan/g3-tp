import UserData from "../models/Usuario.js";

const postUserData = (req, res) => {
    const { name, eMail, steamAccount} = req.body;
    const user = new UserData({ name, eMail, steamAccount });
  user.save((err, user) => {
    res.status(201).json(user);
  });
};

const userController = {
    postUserData
};

export default userController;