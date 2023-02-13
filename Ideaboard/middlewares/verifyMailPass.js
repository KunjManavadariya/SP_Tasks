import {users, message} from '../index';

export const verifyMailPass = function(ctx, next){
    const {email, password, username} = ctx.request.body;
    if (!email || !password) {
        ctx.status = 400;
        ctx.body = {success:false, message:'Email and password are required.'};
        return;
    }
    if(!username){
        ctx.status = 400;
        ctx.body = {success:false, message:'Username is required.'};
        return;
    }
    if(users.find((ele)=>{
        return ele.email === email;
      })) {
        ctx.status = 400;
        ctx.body = message(false, 'User with that email already exists. Login with it!');
        return;
    }
    if(users.find((ele)=>{
        return ele.username === username;
      })) {
        ctx.status = 400;
        ctx.body = message(false, 'User with that username already exists. Try a different username!');
        return;
    }
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    const usernameRegex = /^[a-zA-Z0-9._]{4,15}$/;
    if(!usernameRegex.test(username)){
        ctx.status = 400;
        ctx.body = {success:false, message:"Username must be 4 to 15 characters long!"};
        return;
    }
    if(!emailRegex.test(email) || password.length < 8 || password.length > 15){
        ctx.status = 400;
        ctx.body = {success:false, message:"Email or password is in incorrect format. Check email format and password must be at least 8 characters long."};
        return;
    }
    next();
};