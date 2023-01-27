import axios from 'axios';
import env from 'dotenv';
env.config();
export const config = {
  headers: {
    Authorization: `Bearer ${process.env.bearer}`,
  },
};

export const helper = async function (hashtag) {
  try {
    const link = `https://api.twitter.com/2/tweets/search/recent?query=${encodeURIComponent(
      '#' + hashtag
    )}&tweet.fields=created_at,possibly_sensitive&expansions=author_id,attachments.media_keys&media.fields=media_key,preview_image_url,public_metrics,type,url`;
    const { data } = await axios.get(link, config);
    return data;
  } catch (error) {
    return { error };
  }
};
