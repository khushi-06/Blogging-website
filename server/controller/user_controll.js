import user from "../model/user.js";

const singupuser = () => {};

export default singupuser = async (request, response) => {
  try {
    const user = request.body;
    const newuser = new user(user);
    await newuser.save();
    return response.status(200).json({ msg: "Sucessful" });
  } catch (error) {
    return response.status(200).json({ msg: "error" });
  }
};
