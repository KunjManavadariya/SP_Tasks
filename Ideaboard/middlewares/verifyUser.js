import jwt from 'jsonwebtoken';
export const verifyUser = function(ctx, next){
    if(!ctx.request.headers.authorization){
      ctx.status = 401;
      ctx.body = 'Unauthorized request!';
      return;
    }
    const token = ctx.request.headers.authorization.split(' ')[1];
    if(!token){
      ctx.status = 401;
      ctx.body = 'Access denied. No token provided.';
      return;
    }
    try{
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      ctx.request.user = decoded.user;
      next();
    }catch(err){
      ctx.status = 400;
      ctx.body = 'Invalid token';
      return;
    }
  }