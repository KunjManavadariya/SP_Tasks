export const badRequest = (ctx, message) => {
  ctx.status = 400;
  ctx.body = { success: false, message };
};
