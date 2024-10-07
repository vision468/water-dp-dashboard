"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ElementType, HTMLAttributes, useEffect, useState } from "react";
import { Icon } from "@tremor/react";
import { RiLoaderLine } from "@remixicon/react";
import CustomLinkObjectType from "@/type/LinkItem";
type AnchoredMenuProps = {
  items?: CustomLinkObjectType[];
} & HTMLAttributes<HTMLMenuElement>;

const AnchoredMenu = ({
  children,
  className,
  items,
  ...props
}: AnchoredMenuProps) => {
  const [loading, setLoading] = useState(["", false]);
  const pathname = usePathname();
  useEffect(() => {
    setLoading(["", false]);
  }, [pathname]);

  return (
    <menu
      {...props}
      className={`flex w-full flex-row content-center items-center justify-end gap-2 text-tremor-brand-subtle ${className} `}
    >
      {items &&
        items.map(({ name, label, path, iconProps: ICON }, index) => (
          <Link
            href={path}
            className="m-0 w-full"
            key={name}
            onClick={() =>
              pathname !== path && setLoading((prevState) => [path, true])
            }
          >
            <button
              className={`group flex w-full items-center justify-between hover:text-tremor-brand ${pathname === path ? "text-tremor-brand-emphasis" : "text-tremor-brand-inverted"}`}
            >
              <span>{label}</span>

              {ICON && (
                <Icon
                  className={`*:fill-tremor-brand-inverted group-hover:*:fill-tremor-brand ${pathname === path && "*:fill-tremor-brand-emphasis"}`}
                  icon={
                    loading[0] === path && loading[1]
                      ? () => <RiLoaderLine className="animate-spin" />
                      : ICON.icon
                  }
                />
              )}
            </button>
          </Link>
        ))}
    </menu>
  );
};

export default AnchoredMenu;
