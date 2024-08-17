import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import React, { ReactNode } from "react";

interface Props {
  image: string;
  component?: () => ReactNode;
  imageProps?: ImageProps;
  className? : string
}

const DynamicImageOverlay = ({
  image,
  imageProps,
  component,
  className
}: Props) => {
  return (
    <div
      className={classNames(
        `relative flex flex-col justify-end items-center pb-3 min-h-screen`,
        className
      )}
    >
      <Image
        src={image}
        fill
        className="w-full h-full -z-10"
        alt="dynamic-image-overlay"
        {...imageProps}
      />
      {component && component()}
    </div>
  );
};

export default DynamicImageOverlay;
