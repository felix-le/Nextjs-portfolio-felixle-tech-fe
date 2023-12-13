import PlaceholderImage from "@modules/common/icons/placeholder-image";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
import {StaticImageData} from "next/image";
type ThumbnailProps = {
  thumbnail?: string | StaticImageData | null;
  images?: {url: string}[] | null;
  size?: "small" | "medium" | "large" | "full";
};

const Thumbnail: React.FC<ThumbnailProps> = ({
  thumbnail,
  images,
  size = "small",
}) => {
  const initialImage =
    thumbnail || (images && images.length > 0 ? images[0]?.url : undefined);

  return (
    <div
      className={clsx("relative aspect-[29/34]", {
        "w-[180px]": size === "small",
        "w-[290px]": size === "medium",
        "w-[440px]": size === "large",
        "w-full": size === "full",
      })}
    >
      <ImageOrPlaceholder image={initialImage} size={size} />
    </div>
  );
};

const ImageOrPlaceholder: React.FC<{
  image?: string | StaticImageData | null;
  size: "small" | "medium" | "large" | "full";
}> = ({image, size}) => {
  return image ? (
    <Image
      src={image}
      alt="Thumbnail"
      className=" inset-0"
      draggable={false}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      style={{
        objectFit: "cover",
        objectPosition: "center",
      }}
      priority={true}
    />
  ) : (
    <div className="w-full h-full absolute inset-0 bg-gray-100 flex items-center justify-center">
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  );
};

export default Thumbnail;
