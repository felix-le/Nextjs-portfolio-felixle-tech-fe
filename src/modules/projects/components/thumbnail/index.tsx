import PlaceholderImage from "@modules/common/icons/placeholder-image";
import clsx from "clsx";
import Image from "next/image";
import React from "react";
type ThumbnailProps = {
  thumbnail?: any;
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
      className={clsx(
        "relative aspect-[29/34] flex justify-center items-center bg-neutral-300",
        {
          "w-[180px]": size === "small",
          "w-[290px]": size === "medium",
          "w-[440px]": size === "large",
          "w-full": size === "full",
        },
      )}
    >
      <ImageOrPlaceholder size={size} img={initialImage} />
    </div>
  );
};

const ImageOrPlaceholder: React.FC<{
  img?: any;
  size: "small" | "medium" | "large" | "full";
}> = ({img, size}, i) => {
  return img ? (
    <Image
      key={i}
      src={img.url}
      alt="Thumbnail"
      className=" inset-0 w-full "
      style={{
        maxHeight: "100%",
        maxWidth: "100%",
      }}
      draggable={false}
      sizes={size}
      width={img.width}
      height={img.height}
      priority={true}
    />
  ) : (
    <div
      key={i}
      className="w-full h-full absolute inset-0 bg-gray-100 flex items-center justify-center"
    >
      <PlaceholderImage size={size === "small" ? 16 : 24} />
    </div>
  );
};

export default Thumbnail;
