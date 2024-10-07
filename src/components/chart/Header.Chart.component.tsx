"use client";
import { RiMoreLine } from "@remixicon/react";
import { Icon, Title } from "@tremor/react";
import { HTMLAttributes } from "react";

type ChartHeaderProps = {} & HTMLAttributes<HTMLDivElement>;

const ChartHeader = ({
  children,
  className,
  title,
  ...props
}: ChartHeaderProps) => {
  return (
    <div {...props} className={`flex justify-between ${className}`}>
      <Title>{title}</Title>
      <div className="flex items-center text-tremor-content">{children}</div>
    </div>
  );
};

export default ChartHeader;
