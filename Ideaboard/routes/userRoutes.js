import koaRouter from "koa-router";
import {
  verifyUser,
  verifyLogin,
  verifyUserDuplicates,
  verifyUserRegex,
} from "../middlewares";
const router = new koaRouter();
import {
  allUsers,
  deleteUser,
  loginUser,
  newUser,
  updateUser,
} from "../controllers/userControllers";

router.get("/users", verifyUser, allUsers);

router.post("/register", verifyUserDuplicates, verifyUserRegex, newUser);

router.post("/login", verifyLogin, loginUser);

router.delete("/user/:id", verifyUser, deleteUser);

router.patch("/:id", verifyUser, verifyUserRegex, updateUser);

export { router };
