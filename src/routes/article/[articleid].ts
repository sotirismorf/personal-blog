import { getPost } from '$lib/getContent';

export async function GET({ params }: any) {
  const blogPostData = getPost(params.articleid);

  return {
    body: {
      post: blogPostData
    }
  };
}
