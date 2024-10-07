"use client";
import { Ri24HoursLine, Ri4kLine } from "@remixicon/react";
import { Button, Icon } from "@tremor/react";
import Link from "next/link";

const items = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "User",
    path: "/user",
  },
  {
    name: "Support",
    path: "/support",
  },
];
const AnchoredList = () => {
  return (
    <ul>
      {items.map((value, index) => (
        <Link href={value.path} className="w-full" key={value.name}>
          <button className="group flex w-full items-center justify-between hover:text-tremor-brand">
            <span>{value.name}</span>

            <Icon
              color="stone"
              className="group-hover:fill-tremor-brand"
              icon={() => <Ri4kLine />}
            />
          </button>
        </Link>
      ))}
    </ul>
  );
};

export default AnchoredList;
