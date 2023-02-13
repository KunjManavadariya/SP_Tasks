import md5 from "md5";
import { users, message } from "./controllers/userControllers";
import jwt from "jsonwebtoken";

export const verifyLogin = async function (ctx, next) {
  const user = ctx.request.body;
  if (!user.username || !user.email || !user.password) {
    ctx.status = 400;
    ctx.body = message(
      false,
      "Provide username, email, and password to login!"
    );
    return;
  }
  const { username, email, password } = user;
  const foundUser = users.find((user) => {
    return user.email === email && user.username === username;
  });
  if (!foundUser) {
    ctx.status = 400;
    ctx.body = message(false, "Invalid username, email or password!");
    return;
  }
  const isPasswordValid = (await md5(password)) === foundUser.password;
  if (!isPasswordValid) {
    ctx.status = 400;
    ctx.body = message(false, "Invalid username, email or password!");
    return;
  }
  await next();
};

export const verifyUserDuplicates = function (ctx, next) {
  const { email, password, username } = ctx.request.body;
  if (!email || !password) {
    ctx.status = 400;
    ctx.body = { success: false, message: "Email and password are required." };
    return;
  }
  if (!username) {
    ctx.status = 400;
    ctx.body = { success: false, message: "Username is required." };
    return;
  }
  if (
    users.find((ele) => {
      return ele.email === email || ele.username === username;
    })
  ) {
    ctx.status = 400;
    ctx.body = message(
      false,
      "User with these credentials already exists. Provide a different username or email!"
    );
    return;
  }
  next();
};

export const verifyUserRegex = (ctx, next) => {
  const { email, password, username } = ctx.request.body;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const usernameRegex = /^[a-zA-Z0-9._]{4,15}$/;
  if (!usernameRegex.test(username)) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message:
        "Username must be 4 to 15 characters long and should not contain any special characters!",
    };
    return;
  }
  if (!emailRegex.test(email) || password.length < 8 || password.length > 15) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message:
        "Email or password is in incorrect format. Check email format and password must be at least 8 characters long.",
    };
    return;
  }
  next();
};

export const verifyUser = function (ctx, next) {
  if (!ctx.request.headers.authorization) {
    ctx.status = 401;
    ctx.body = "Unauthorized request!";
    return;
  }
  const token = ctx.request.headers.authorization.split(" ")[1];
  if (!token) {
    ctx.status = 401;
    ctx.body = "Access denied. No token provided.";
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.request.user = decoded.user;
    next();
  } catch (err) {
    ctx.status = 400;
    ctx.body = "Invalid token";
    return;
  }
};
