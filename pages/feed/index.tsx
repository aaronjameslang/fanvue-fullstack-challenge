import { Box, Stack, Typography } from "@mui/material";
import { InferGetServerSidePropsType } from "next";
import { PostCard } from "./PostCard";
import { getPosts } from "./getPosts";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default  function FeedPage({posts}: Props) {
  // TODO what if there are no posts? What about paging?
  return (
    <>
      <Box textAlign={"center"} my={8}>
        <Typography component="h1" variant="h3">
          Feed
        </Typography>
      </Box>
      <Stack spacing={2} style={{maxWidth: '480px', margin: 'auto'}}>
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </Stack>
    </>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  return { props: {posts} };
}
