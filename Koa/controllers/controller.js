import { helper } from '../helpers/helper';
import { handleError } from '../errors/errorHandler';

export const home = ctx => {
  ctx.body = { msg: 'Hello World' };
};

export const searchHashtag = async ctx => {
  //Fetching Hashtag and Validating it
  const hashtag = ctx.params.hashtag || ctx.request.body.hashtag;

  //Getting data
  const data = await helper(hashtag);
  if (!data || data.error) {
    handleError(ctx, ctx.status, 'Error fetching the data, try again later');
    return;
  }

  //Storing data
  if (data.meta && data.meta.result_count === 0) {
    handleError(
      ctx,
      ctx.status,
      'No tweet found with the given hashtag. Try giving a more commonly used hashtag.'
    );
    return;
  }
  const latest = [];

  data &&
    data.data &&
    data.data.forEach(ele => {
      //Get username
      let username = '';
      for (let user of data.includes && data.includes.users) {
        if (user.id === ele.author_id) {
          username = user.username;
          break;
        }
      }

      //Get image URLs
      let URL = [];
      if (ele.attachments && ele.attachments.media_keys) {
        ele.attachments.media_keys.forEach(element => {
          for (let ele of data.includes && data.includes.media) {
            if ((ele.url || ele.preview_image_url) && ele.media_key === element) {
              URL.push(ele.url || ele.preview_image_url);
              break;
            }
          }
        });
      }
      let temp = {
        success: true,
        username,
        caption: ele.text,
        created_at: ele.created_at,
        imgURL: URL,
      };

      ele.possibly_sensitive && (temp['sensitive_content'] = true);
      //Push an object with the collected data
      if (!temp.sensitive_content) latest.push(temp);
    });

  // Output;
  ctx.body = { latest };
};

export const defaultRoute = async ctx => {
  handleError(
    ctx,
    ctx.status,
    'Error in URL, no page found at the given URL. Check hashtag and enter proper URL again!'
  );
  return;
};
