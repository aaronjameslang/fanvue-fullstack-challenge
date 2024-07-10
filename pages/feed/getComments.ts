import { Post } from "./Post";

export async function getComments(postId: Post["id"]) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );
  const comments = (await response.json()) as Comment[];
  return comments;
}
