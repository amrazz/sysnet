import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes: string;
};

export function Photo({ src, alt, className = "", priority = false, sizes }: PhotoProps) {
  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
    </div>
  );
}
