import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userDataSchema = new Schema ({
    name: String,
    eMail: String,
    steamAccount: String,
  });

const UserData = mongoose.model('UserData', userDataSchema);

export default UserData;