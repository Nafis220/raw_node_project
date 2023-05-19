const fs = require("fs");
const data = fs.readFileSync("src/config/Database.json");

function getAllUsers(req, res) {
  res.send(data);
}
function getOneUser(req, res) {
  const { id } = req.query;

  try {
    const parseData = JSON.parse(data);

    const user = parseData.find((user) => user.id === parseInt(id));

    if (!user) {
      return res.status(404).json("User not found.ID only exist till 1 - 7");
    }
    return res.send({ user });
  } catch (e) {
    console.log(e);
    res.status(500).json("Internal Server Error");
  }
}
module.exports = {
  getAllUsers,
  getOneUser,
};
