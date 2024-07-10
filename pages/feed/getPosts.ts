import { Post } from "./Post";

export async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = (await response.json()) as Post[];
  return posts;
}
