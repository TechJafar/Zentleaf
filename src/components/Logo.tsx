import logoImg from "@/assets/svglogo.svg";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  imgClassName?: string;
  inverted?: boolean;
  showWordmark?: boolean;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
  sm: "h-8 md:h-9 max-w-[160px]",
  md: "h-10 md:h-11 lg:h-12 max-w-[220px]",
  lg: "h-12 md:h-14 lg:h-16 max-w-[280px]",
  xl: "h-16 md:h-20 lg:h-24 max-w-[360px]",
};

export function Logo({
  className = "",
  imgClassName = "",
  alt = "Zentleaf",
  size = "md",
}: Props) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={logoImg}
        alt={alt}
        className={cn(
          "w-auto object-contain transition-transform duration-200 hover:opacity-95",
          sizeClasses[size] || sizeClasses.md,
          imgClassName,
        )}
        loading="eager"
      />
    </span>
  );
}

