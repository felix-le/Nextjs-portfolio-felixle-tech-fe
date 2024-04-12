import Image from "next/image";
import clsx from "clsx";
interface IHeroBannerProps {
  image: any;
  size?: "small" | "medium" | "large" | "full";
}
type ThumbnailProps = {
  images?: any[] | null;
  size?: "small" | "medium" | "large" | "full";
};

const HeroBanner: React.FC<ThumbnailProps> = ({images, size = "large"}) => {
  return (
    <div className="relative w-full flex justify-center items-center">
      {images && images.length > 0 && images[0] && images[0].ext === ".mp4" && (
        <video
          autoPlay
          muted
          controls
          className="w-full max-w-[1300px] h-auto max-h-[400px]"
        >
          <source src={images[0].url} type="video/mp4" />
        </video>
      )}
      {images && images.length > 0 && images[0] && images[0].ext !== ".mp4" && (
        <ImageOrPlaceholder size={size} image={images[0]} />
      )}
      {/*   */}
    </div>
  );
};
function ImageOrPlaceholder({image}: IHeroBannerProps) {
  return (
    <Image
      src={image.url}
      alt="Hero Banner"
      className="w-full h-auto max-h-[762px] max-w-[1300px]"
      draggable={false}
      width={image.width}
      height={image.height}
      priority={true}
    />
  );
}
export default HeroBanner;
