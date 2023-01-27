import request from 'supertest';
import Koa from 'koa';
import { router } from '../routes/routes';
import { helper } from '../helpers/helper';

describe('Testing routes', () => {
  let server;
  beforeAll(async () => {
    const app = new Koa();
    app.use(router.routes());
    app.use(router.allowedMethods());
    server = app.listen();
  });

  afterAll(() => {
    server.close();
  });

  test('GET /, returns an object', async () => {
    const response = await request(server).get('/').set('Accept', 'application/json');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: 'Hello World' });
  });

  test('GET /hashtag:tag', async () => {
    const response = await request(server)
      .get('/hashtag/google')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);
    expect(response.body.latest.forEach(ele => ele.url));
  });

  test('Helper Axios testing', async () => {
    const response = [
      await helper('google'),
      await helper('#google'),
      await helper('🔥'),
      await helper('goog  le'),
      await helper('goog@123'),
      await helper('ssjsdfhbakjhsdbakcvsjdhavjhvbdkjhv'),
    ];
    response.slice(1).forEach(ele => {
      expect(ele).toMatchSnapshot();
    });
    expect(response[0].error).not.toBeDefined();
    // expect(response[1].error).toBeDefined();
    // expect(response[2].error).toBeDefined();
    // expect(response[3].meta && response[3].meta.result_count).toBe(0);
    // expect(response[4].meta && response[4].meta.result_count).toBe(0);
    // expect(response[5].meta && response[5].meta.result_count).toBe(0);
  });

  test('Default route', async () => {
    const response = await request(server).get('/dckjsdhvb').set('Accept', 'application/json');
    expect(response.body).toMatchSnapshot();
    // expect(response.body.success).toEqual(false);
    // expect(response.status).toEqual(404);
  });

  test('Error in hashtags', async () => {
    const response = await request(server)
      .get('/hashtag/googl@123')
      .set('Accept', 'application/json');
    expect(response.body).toMatchSnapshot();
    // expect(response.body.success).toEqual(false);
    // expect(response.status).toEqual(404);
  });

  test('Gibrish hashtags', async () => {
    const response = await request(server)
      .get('/hashtag/googlealjhfHSDBCKSDH')
      .set('Accept', 'application/json');
    expect(response.body).toMatchSnapshot();
    // expect(response.body.success).toEqual(false);
    // expect(response.status).toEqual(404);
  });
});
