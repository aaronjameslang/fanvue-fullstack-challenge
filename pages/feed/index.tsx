import { Stack, Typography } from "@mui/material";
import { InferGetServerSidePropsType } from "next";
import { PostCard } from "./PostCard";
import { getPosts } from "./getPosts";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default  function FeedPage({posts}: Props) {
  // TODO what if there are no posts? What about paging?
  return (
    <>
      <Typography variant="h1">Feed</Typography>
      <Stack spacing={2}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
          // <pre key={post.id} {...post} >{JSON.stringify(post, null, 2)}</pre>
        ))}
      </Stack>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  return { props: {posts} };
}
