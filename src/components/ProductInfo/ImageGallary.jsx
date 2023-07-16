import { useState } from "react";
import Image from "../shared/Image";

export default function ImageGallary({ images = [] }) {
  const [activeImage, setActiveImage] = useState(images[0]);
  const handleSetActiveImage = (imageSource) => setActiveImage(imageSource);

  return (
    <div className="grid relative min-h-[65vh]">
      {/* Small images container */}
      <div className="absolute left-6 top-4 flex flex-col gap-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-lg ring-1 ring-brand w-32 relative"
            onClick={() => handleSetActiveImage(src)}
          >
            <Image
              src={src}
              alt="fadfas"
              loading="lazy"
              className="max-w-full h-full aspect-square rounded-lg object-cover object-center cursor-pointer"
            />
            {src === activeImage && (
              <Image
                src="/public/assets/image/active-check.png"
                alt="Active Check Icon"
                className="top-0.5 absolute left-0.5 -translate-x-1/2 -translate-y-1/2 object-cover"
              />
            )}
          </div>
        ))}
      </div>
      <div className="rounded-lg ring-1 ring-gray-500 overflow-hidden">
        <Image
          src={activeImage}
          alt="faasdf"
          className="object-cover !h-full object-center"
        />
      </div>
    </div>
  );
}
