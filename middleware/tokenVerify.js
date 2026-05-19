import { ExpressErr } from "../utils/ExpressErr.js";
import { WrapAsync } from "../utils/WrapAsync.js";
import jwt from "jsonwebtoken";

const isToken = WrapAsync((req, res, next) => {
  let authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    throw new ExpressErr(404, "Access Denied!");
  }

  let token = authHeader.split(" ")[1];
  if (!token) {
    throw new ExpressErr(401, "Token Required!");
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) throw new ExpressErr(403, "You must be login!");
    let userId = (req.user = user);
    next();
  });
});
// For Admin
// const  isAdmin = (req, res, next) => {
//     if(req.user.role !== "admin"){
//          throw new ExpressErr(403, "Only Admin Access!")
//     }
//     next()

// }
export { isToken };
