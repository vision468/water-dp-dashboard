"use client";
import { HTMLAttributes } from "react";
import LoadingLink from "../link/LoadingLink.component";
import {
  RiArrowDownLine,
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiBellLine,
  RiEditBoxLine,
  RiLogoutBoxLine,
  RiUserLine,
} from "@remixicon/react";
import { Icon } from "@tremor/react";
import DropdownMenu from "../menu/Dropdown.Menu.component";
import makeItemsList from "@/lib/makeItemsList";

type AnchoredProfileProps = {} & HTMLAttributes<HTMLDivElement>;

const AnchoredProfile = ({
  children,
  className,
  ...props
}: AnchoredProfileProps) => {
  return (
    <div className={`${className} flex max-w-48 flex-row-reverse`}>
      <LoadingLink
        className="text-tremor-content"
        iconProps={{
          icon: () => <RiArrowLeftSLine />,
          className: "*:fill-tremor-content",
        }}
        href={"/"}
      >
        {"نام کاربر" || "Profile"}
      </LoadingLink>
      <LoadingLink
        className="flex-row text-tremor-content"
        iconProps={{
          icon: () => <RiUserLine />,
          className: "*:fill-tremor-content",
        }}
        href={"/"}
      />
      <LoadingLink
        className="relative flex-row text-tremor-content"
        iconProps={{
          icon: () => <RiBellLine />,
          className: "*:fill-tremor-content",
        }}
        href={"/"}
      />
    </div>
  );
};

export default AnchoredProfile;
