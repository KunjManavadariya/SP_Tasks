import { db } from "../db";

export const isUser = async (email, username) =>
  await db.collection("users").findOne({ $and: [{ email }, { username }] });

export const userExists = async (email, username) =>
  await db.collection("users").findOne({ $or: [{ email }, { username }] });

export const findUserById = async (id) =>
  await db.collection("users").findOne({ username: id });

export const getAllUsers = async () =>
  await db
    .collection("users")
    .find({}, { projection: { password: 0 } })
    .toArray();

export const IsUnique = async (userId, updatedUsername, updatedEmail, ctx) => {
  const user = await db.collection("users").findOne({
    $and: [
      { $or: [{ username: updatedUsername }, { email: updatedEmail }] },
      { _id: { $ne: userId } },
    ],
  });
  if (user) {
    ctx.status = 400;
    ctx.body = {
      success: false,
      message: "User with these credentials already exists.",
    };
    return;
  }
  return true;
};

export const updateUserDetails = async (userId, updatedUser) => {
  delete updatedUser._id &&
    (await db
      .collection("users")
      .updateOne({ _id: userId }, { $set: updatedUser }));
  return;
};

export const delUser = async (id) =>
  await db.collection("users").deleteOne({ username: id });
