import { getPlaiceholder } from "plaiceholder";

export async function getImage(src: string) {
  try {
    const res = await fetch(src);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();

    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.stack} when rendering an image`);
    }
  }
}
