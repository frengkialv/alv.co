import React from "react";
import Image from "next/image";
import { getImage } from "@/hooks/getImage";

interface DynamicImageProps {
  url: string;
  alt: string;
  width: number;
  height: number;
}

async function DynamicImage({
  url,
  alt,
  width,
  height,
  ...delegated
}: DynamicImageProps) {
  const base64 = await getImage(`http://localhost:3000${url}`);

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <Image
        alt={alt || ""}
        src={url}
        placeholder="blur"
        width={300}
        height={300}
        blurDataURL={base64}
        unoptimized
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
        {...delegated}
      />
    </div>
  );
}

export default DynamicImage;
