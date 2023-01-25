export const handleError = function (ctx, status, message) {
  ctx.body = { success: false, status: status, message: message };
  ctx.status = status;
};
