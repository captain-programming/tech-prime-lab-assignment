const UserModel = require("../models/user.model");

const userLogin = async(req, res) => {
  const { email, password } = req.body;

  try{
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password!==password) {
      return res.status(401).json({ message: 'Invalid User', Success: false});
    }

    res.json({ message: 'Valid User', Success: true });

  }catch(err){
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {userLogin};