import { twMerge } from "tailwind-merge";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Image({ src, alt, className, ...props }) {
  return (
    <LazyLoadImage
      {...props}
      loading="lazy"
      src={src}
      alt={alt}
      className={twMerge(className)}
    />
  );
}
