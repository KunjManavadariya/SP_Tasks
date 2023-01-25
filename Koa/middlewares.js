import { handleError } from './errors/errorHandler';
export const validateHashtag = async function (ctx, next) {
  const hashtag = ctx.request.params.hashtag;
  const hashtagValidator = /^[a-zA-Z0-9_]{1,280}$/;
  if (!hashtagValidator.test(hashtag)) {
    handleError(
      ctx,
      ctx.status,
      'Error in Hashtag. Enter a valid hashtag without spaces, hashtag or punctuation'
    );
    return;
  }
  await next();
};
