import md5 from "md5";
import jwt from "jsonwebtoken";
import { isUser, userExists } from "./database/userQueries";
import { unauthorized } from "./errors/unauthorized";
import { badRequest } from "./errors/badRequest";

export const verifyUser = (ctx, next) => {
  if (!ctx.request.headers.authorization) {
    unauthorized(ctx, "Unauthorized request");
    return;
  }
  const token = ctx.request.headers.authorization.split(" ")[1];
  if (!token) {
    unauthorized(ctx, "Access denied. No token provided.");
    return;
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    ctx.request.user = decoded.user;
    return next();
  } catch (err) {
    unauthorized(ctx, "Invalid token");
    return;
  }
};

export const verifyLogin = async (ctx, next) => {
  const user = ctx.request.body;
  if (!user.username || !user.email || !user.password) {
    badRequest(ctx, "Provide username, email, and password to login!");
    return;
  }
  const { username, email, password } = user;
  const foundUser = await isUser(email, username);
  if (!foundUser) {
    badRequest(ctx, "Invalid username, email or password!");
    return;
  }
  const isPasswordValid = md5(password) === foundUser.password;
  if (!isPasswordValid) {
    badRequest(ctx, "Invalid username, email or password!");
    return;
  }
  return next();
};

export const verifyUserDuplicates = async (ctx, next) => {
  const { email, password, username } = ctx.request.body;
  if (!email || !password) {
    badRequest(ctx, "Email and password are required.");
    return;
  }
  if (!username) {
    badRequest(ctx, "Username is required.");
    return;
  }
  if (
    (await userExists(email, username)) ||
    badRequest(ctx, "Seomething went wrong. Try again after some time.")
  ) {
    badRequest(
      ctx,
      "User with these credentials already exists. Provide a different username or email!"
    );
    return;
  }
  return next();
};

export const verifyUserRegex = (ctx, next) => {
  const { email, password, username } = ctx.request.body;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  const usernameRegex = /^[a-zA-Z0-9._]{4,15}$/;
  if (!usernameRegex.test(username)) {
    badRequest(
      ctx,
      "Username must be 4 to 15 characters long and should not contain any special characters!"
    );
    return;
  }
  if (!emailRegex.test(email) || password.length < 8 || password.length > 15) {
    badRequest(
      ctx,
      "Email or password is in incorrect format. Check email format and password must be at least 8 characters long."
    );
    return;
  }
  return next();
};
