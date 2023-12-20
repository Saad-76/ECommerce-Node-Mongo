const User = require("./userModel");
const GenerateToken = require("../utils/jwt");

const registerUserService = async (user) => {
  try {
    const email = user.email;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return { status: 401, message: "User already Exist" };
    }

    const newUser = await User.create(user);

    if (newUser) {
      return { status: 200, message: "New User Registered" };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error", error: error };
  }
};

const signInUserService = async (email, password) => {
  try {
    const user = await User.findOne({ email });

    if (user) {
      // const matchPass = await user.matchpassword(password);
      // console.log(matchPass, "matchPass");
      // if (matchPass) {

      const token = await GenerateToken(user._id);

      const response = {
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: token,
      };
      return { status: 200, message: "SignIn successfully", user: response };
      // } else {
      //   return { status: 401, message: "Incorrect Password" };
      // }
    } else {
      return { status: 401, message: "User Not found" };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const forgetPasswordService = async (id, password, password_confirmation) => {
  try {
    console.log(id, "id");
    const currentUser = await User.findById(id);
    console.log(currentUser, "currentUser");

    if (!currentUser) {
      return { status: 401, message: `User Not found again ${id}` };
    }

    if (currentUser) {
      const matchPass = await User.matchpassword(password);
      console.log(matchPass, "matchPass");
      // const existingPassword = currentUser.password;
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const updateUserService = async (id, userInput) => {
  try {
    const currentUser = await User.findById(id);

    if (!currentUser) {
      return { status: 401, message: `User Not found again ${id}` };
    }

    if (currentUser) {
      currentUser.name = userInput.name;
      currentUser.email = userInput.email;
      currentUser.password = userInput.password;
      currentUser.isAdmin = userInput.isAdmin;

      const updatedUser = await currentUser.save();
      const token = await GenerateToken(updatedUser._id);

      const response = {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: token,
      };

      return {
        status: 200,
        message: `User Updated Successfully`,
        user: response,
      };
    }
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

const deleteUserService = async (id) => {
  try {
    const deleteUser = await User.findByIdAndDelete(id);
    if (!deleteUser) {
      return { status: 401, message: "User Not found with give Id" };
    }
    return { status: 200, message: "User Deleted Successfully" };
  } catch (error) {
    return { status: 500, message: "Internal Server Error" };
  }
};

module.exports = {
  registerUserService,
  signInUserService,
  forgetPasswordService,
  updateUserService,
  deleteUserService,
};
