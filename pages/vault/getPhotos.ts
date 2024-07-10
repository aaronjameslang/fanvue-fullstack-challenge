import { Photo } from "./Photo";

export async function getPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = (await response.json()) as Photo[];
  return photos;
}
