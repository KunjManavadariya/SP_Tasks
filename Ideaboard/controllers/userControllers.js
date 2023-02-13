import jwt from "jsonwebtoken";
import md5 from "md5";
import env from "dotenv";
import { conn, client } from "../db";
let db;
conn().then(async () => {
  db = await client().db("ideaboard");
});

env.config();

export const users = [];
export const message = function (success, text) {
  return { success: success, message: text };
};

export const allUsers = async (ctx) => {
  const res = await users.map((user) => {
    const { username, email, boards, joined_at } = user;
    return { username, email, boards, joined_at };
  });
  ctx.body = res;
};

export const newUser = async (ctx) => {
  const user = ctx.request.body;
  user.joined_at = new Date(new Date().getTime() + 19800000);
  user.boards = [];
  const hash = await md5(user.password);
  user.password = hash;
  await db.insertOne(user);
  ctx.body = message(
    true,
    `Successfully registered a new user with username ${user.username}!`
  );
};

export const loginUser = async (ctx) => {
  const user = ctx.request.body;
  const token = jwt.sign({ user }, process.env.JWT_SECRET, {
    expiresIn: "20m",
  });
  ctx.body = message(true, "Successfully logged you in!");
  ctx.body.token = token;
};

export const updateUser = async (ctx) => {
  const id = ctx.params.id;
  const updUser = ctx.request.body;
  const foundUser = users.find((user) => user.username === id);
  if (!foundUser) {
    ctx.status = 400;
    ctx.body = message(false, "No user found with given ID!");
    return;
  }
  if (foundUser.email === updUser.email) {
  }
  foundUser.username = updUser.username;
  foundUser.email = updUser.email;
  foundUser.password = updUser.password;
  ctx.body = message(true, "Successfully updated user details");
};

export const deleteUser = async (ctx) => {
  const id = ctx.request.params.id;
  const foundUser = users.find((user) => {
    return user.username === id;
  });
  if (!foundUser) {
    ctx.status = 400;
    ctx.body = message(false, "No user found with given ID!");
    return;
  }
  users.splice(users.indexOf(foundUser), 1);
  ctx.body = message(true, `Successfully deleted the user with id ${id}!`);
};
