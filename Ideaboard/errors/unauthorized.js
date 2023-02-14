export const unauthorized = (ctx, message) => {
  ctx.status = 401;
  ctx.body = { success: false, message };
};
