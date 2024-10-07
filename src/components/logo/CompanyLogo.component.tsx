import Image, { ImageProps } from "next/image";

type CompanyLogoProps = {
  size?: "sm" | "md" | "lg" | "xl" | undefined;
  className?: string;
};

const CompanyLogo = ({ className, size }: CompanyLogoProps) => {
  return (
    <div className={`${className} relative ${dcs(size)}`}>
      <Image
        src={"/logo.svg"}
        alt="text about company logo"
        fill
        className={`rounded-tremor-small bg-tremor-background object-contain p-2 ${dcs(size)}`}
      />
    </div>
  );
};

// dcs: Determined Component Size
const dcs = (size: "sm" | "md" | "lg" | "xl" | undefined) => {
  switch (size) {
    case "sm":
      return "h-16 w-16";
    case "md":
      return "h-32 w-32";
    case "lg":
      return "h-64 w-64";
    case "xl":
      return "h-96 w-96";
    default:
      return "h-16 w-16";
  }
};

export default CompanyLogo;
