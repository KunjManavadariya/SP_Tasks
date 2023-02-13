import md5 from 'md5';
import {users, message} from '../index';

export const verifyLogin = async function(ctx, next){
const {username, email, password} = ctx.request.body;
const foundUser = users.find(user => {
    return (user.email === email && user.username === username);
  });
  if (!foundUser) {
    ctx.status = 400;
    ctx.body = message(false, 'Invalid username, email or password!');
    return;
  }
const isPasswordValid = (await md5(password)) === foundUser.password;
    if (!isPasswordValid) {
      ctx.status = 400;
      ctx.body = message(false, 'Invalid username, email or password!');
      return;
    }
await next();
};