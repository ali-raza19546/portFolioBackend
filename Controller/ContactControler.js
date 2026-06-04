import { contactModel } from "../models/ContactModel.js";
import { ExpressErr } from "../utils/ExpressErr.js";
import { WrapAsync } from "../utils/WrapAsync.js";

const contactController = WrapAsync(async (req, res) => {
  let { username, email, message } = req.body;
  const existingEmail = await contactModel.findOne({ email });
  if (existingEmail) {
    throw new ExpressErr("Email already exists!", 409);
  } else if (!email) {
    throw new ExpressErr("Email Required!", 400);
  }

  let newContact = await contactModel.create({
    username,
    email,
    message,
  });

  res.json({
    success: true,
    message: `Thanks ${username} we'r glad😊`,
    newContact,
  });
});

export default contactController;
