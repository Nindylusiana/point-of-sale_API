const UsersModel = require("../model/users");

module.exports = {
  getUsersData: async (request, response) => {
    try {
      let data = await UsersModel.findAll();
      return response.status(200).send(data);
    } catch (error) {
      console.log(error);
      return response.status(500).send(error);
    }
  },
};
