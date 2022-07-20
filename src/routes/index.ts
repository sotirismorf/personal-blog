import { getMultiplePosts } from '$lib/getContent';

export async function GET() {
  const blogPostData = getMultiplePosts();

  return {
    body: {
      posts: blogPostData
    }
  };
}
