import fs from 'fs';
import matter from 'gray-matter';
import type { GrayMatterFile } from 'gray-matter';

function grayMatterAdapter(
  parsed: GrayMatterFile<Buffer>,
  slug: string
): App.blogPost {
  return {
    body: parsed.content,
    title: parsed.data.title,
    slug: slug,
  };
}

export const getMultiplePosts = () => {
  const data: App.blogPost[] = [];

  const filenames = fs.readdirSync('content/blog');

  for (let filename of filenames) {
    const buffer = fs.readFileSync(`content/blog/${filename}`);
    const parsed = matter(buffer);
    const blogPost = grayMatterAdapter(parsed, filename.split('.')[0]);
    data.push(blogPost);
  }

  return data;
};

export const getPost = (slug: string) => {
  const buffer = fs.readFileSync(`content/blog/${slug}.md`);
  const parsed = matter(buffer);
  const blogPost = grayMatterAdapter(parsed, slug);

  return blogPost;
};
