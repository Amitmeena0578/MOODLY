import { useState, type ImgHTMLAttributes } from "react";

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  fallbackClassName?: string;
}

export function SafeImage({ alt, className, fallbackClassName, onError, src, ...props }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return <div className={fallbackClassName ?? className} role="img" aria-label={alt || "Photo soon"}>Photo soon</div>;
  }

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      className={className}
      onError={(event) => {
        setFailed(true);
        onError?.(event);
      }}
    />
  );
}
