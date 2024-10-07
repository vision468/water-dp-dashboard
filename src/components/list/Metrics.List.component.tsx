import { HTMLAttributes } from "react";
import ListHeader from "./Header.List.component";
import CustomLinkObjectType from "@/type/LinkItem";
import CustomValueStatusPairType from "@/type/ValueStatus";

type MetricsListProps = {} & HTMLAttributes<HTMLDivElement>;

const MetricsList = ({
  children,
  className,
  title,
  ...props
}: MetricsListProps) => {
  return (
    <div
      {...props}
      className={`my-4 flex flex-col items-center gap-4 ${className}`}
    >
      <ListHeader className="w-full" title={title}></ListHeader>

      {children}
    </div>
  );
};

export default MetricsList;
