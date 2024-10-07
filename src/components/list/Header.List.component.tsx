"use client";
import { RiMoreLine } from "@remixicon/react";
import { Icon, Title } from "@tremor/react";
import { HTMLAttributes } from "react";

type ListHeaderProps = {} & HTMLAttributes<HTMLDivElement>;

const ListHeader = ({ children, className, ...props }: ListHeaderProps) => {
  return (
    <div {...props} className={`flex justify-between ${className}`}>
      <Title>{props.title}</Title>
      <div className="flex items-center text-tremor-content">
        <span>{" بیشتر "}</span>
        <Icon icon={() => <RiMoreLine />} className="*:fill-tremor-content" />
      </div>
    </div>
  );
};

export default ListHeader;
