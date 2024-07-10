import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import { InferGetServerSidePropsType } from "next";
import { getPhotos } from "./getPhotos";

type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

export default  function VaultPage({photos}: Props) {
  return (
    <>
      <Box textAlign={"center"} my={8}>
        <Typography component="h1" variant="h3">
          Vault
        </Typography>
      </Box>
      <ImageList cols={3} style={{maxWidth: '480px', margin: 'auto'}}>
        {photos.map((photo) => (
          <ImageListItem key={photo.id}>
            <a href={photo.url}>
              {/* <Image src={photo.thumbnailUrl} alt={photo.title} width={150} height={150} /> */}
              <img src={photo.thumbnailUrl} alt={photo.title} />
            </a>
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
  // TODO next/image performs badly, investigate
  // This page isn't very performant in general, consider SSR a skeleton,
  //   and populating the images with a client-side fetch
}

export async function getServerSideProps() {
  const photos = await getPhotos();
  return { props: {photos} };
}
