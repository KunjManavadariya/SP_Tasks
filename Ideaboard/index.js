import Koa from 'koa';
import Router from 'koa-router';
import env from 'dotenv';
import jwt from 'jsonwebtoken';
import md5 from 'md5';
import { verifyUser } from './middlewares/verifyUser';
import { verifyMailPass } from './middlewares/verifyMailPass';
import  {verifyLogin}  from './middlewares/verifyLogin';
import bodyParser from 'koa-bodyparser';
env.config();

const app = new Koa();
const router = new Router();
export const users = [];
export const message = function(success, text){
  return {"success":success, "message":text};
}

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.get('/users', verifyUser, async ctx => {
    const res = await users.map(user => {
        const {username, email, boards, joined_at} = user;
      return { username, email, boards, joined_at};
    });
    ctx.body = res;
});

router.post('/register', verifyMailPass, async ctx=>{
    const user = ctx.request.body;
    user.joined_at = new Date(new Date().getTime() + 19800000);
    user.boards = [];
    const hash = await md5(user.password);
    user.password = hash;
    users.push(user);
    ctx.body = message(true, 'Successfully registered a new user!');
})
  
router.post('/login', verifyLogin, async ctx => {
    const user = ctx.request.body;
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: '20m',
    });
    ctx.body = message(true, 'Successfully logged you in!');
    ctx.body.token = token;
});

router.delete('/user/:id', async ctx => {
    const id = ctx.request.params.id;
    const foundUser = users.find(user => {
        return user.username === id;
      });
      if (!foundUser) {
        ctx.status = 400;
        ctx.body = message(false, 'No user found with given ID!');
        return;
      }
    users.splice(users.indexOf(foundUser),1);
    ctx.body = message(true, `Successfully deleted the user with id ${id}!`);
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
  });
