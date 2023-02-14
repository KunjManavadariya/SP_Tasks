import jwt from "jsonwebtoken";
import md5 from "md5";
import env from "dotenv";
import { db } from "../db";
import { ObjectID } from "bson";
import {
  getAllUsers,
  delUser,
  findUserById,
  IsUnique,
  updateUserDetails,
} from "../database/userQueries";
import { badRequest } from "../errors/badRequest";
import { genError } from "../errors/generalError";
env.config();

export const message = (success, text) => ({ success, message: text });

export const newUser = async (ctx) => {
  const user = ctx.request.body;
  user.joined_at = new Date(new Date().getTime() + 19800000);
  user.boards = [];
  const hash = md5(user.password);
  hash && (user.password = hash);
  (await db.collection("users").insertOne(user)) &&
    (ctx.body = {
      success: true,
      message: "Successfully inserted user.",
    });
};

export const loginUser = async (ctx) => {
  const user = ctx.request.body;
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "20m",
  });
  ctx.body = message(true, "Successfully logged you in!");
  token && (ctx.body.token = token);
};

export const allUsers = async (ctx) => {
  const data = await getAllUsers();
  data
    ? (ctx.body = data)
    : genError(ctx, "Can't fetch users. Try again later.");
};

export const updateUser = async (ctx) => {
  const id = ctx.request.params.id;
  const updUser = ctx.request.body;
  const foundUser = await findUserById(id);
  if (!foundUser) {
    ctx.status = 400;
    ctx.body = message(false, "No user found with given ID!");
    return;
  }
  (await IsUnique(
    new ObjectID(updUser._id),
    updUser.username,
    updUser.email,
    ctx
  )) &&
    updateUserDetails(new ObjectID(updUser._id), updUser) &&
    (ctx.body = message(true, "Successfully updated user details"));
};

export const deleteUser = async (ctx) => {
  const id = ctx.request.params.id;
  const foundUser = await findUserById(id);
  if (!foundUser) {
    badRequest(ctx, "No user found with given ID!");
    return;
  }
  (await delUser(id)) &&
    (ctx.body = message(true, `Successfully deleted the user with id ${id}!`));
};
