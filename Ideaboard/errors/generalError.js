export const genError = async () => (ctx, message) => {
  ctx.status = 408;
  ctx.body = { success: false, message };
};
