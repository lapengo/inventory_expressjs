import UsersModel from "../models/UsersModel.js"; 
// import UserRoleModel from "../models/UserRoleModel";

const Users = UsersModel.Users; 
const Roles = UsersModel.Roles; 

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll({
      include: {
        model: Roles,
        attributes: ['role_name', 'description']
      }
    }); 
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}