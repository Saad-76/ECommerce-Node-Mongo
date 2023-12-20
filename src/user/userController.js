const {
  registerUserService,
  signInUserService,
  updateUserService,
  deleteUserService,
  forgetPasswordService,
} = require("./userService");

const registerUser = async (req, res) => {
  const { name, email, password, isAdmin } = req.body;

  const user = {
    name: name,
    email: email,
    password: password,
    isAdmin: isAdmin,
  };

  const newUser = await registerUserService(user);
  res.status(newUser.status).send(newUser);
};

const signInUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await signInUserService(email, password);
  res.status(user.status).send(user).end();
};

const forgetPassword = async (req, res) => {
  const id = req.params.id;
  const { password, password_confirmation } = req.body;
  const userId = id?.split(":");
  const newId = userId[1];

  const response = await forgetPasswordService(
    newId,
    password,
    password_confirmation
  );
  res.status(response.status).send(response);
};

const updateUser = async (req, res) => {
  const id = req.query.id;
  const { name, email, password, isAdmin } = req.body;

  const user = {
    name,
    email,
    password,
    isAdmin,
  };

  const updatedUser = await updateUserService(id, user);
  res.status(updatedUser.status).send(updatedUser);
};

const deleteUser = async (req, res) => {
  const id = req.query.id;

  const deleteUser = await deleteUserService(id);
  res.status(deleteUser.status).send(deleteUser);
};

module.exports = {
  registerUser,
  signInUser,
  updateUser,
  deleteUser,
  forgetPassword,
};
