"use client";
import { RiLoaderLine, RiRemixiconLine } from "@remixicon/react";
import { Icon, IconProps } from "@tremor/react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { HTMLProps, useEffect, useState } from "react";
type LoadingLinkProps = { iconProps: IconProps } & LinkProps &
  HTMLProps<HTMLAnchorElement>;
const LoadingLink = ({
  className,
  children,
  iconProps,
  ...props
}: LoadingLinkProps) => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const { icon, className: iconClassName, ...otherIconProps } = iconProps;

  useEffect(() => {
    if (pathname === props.href && loading) setLoading(false);
  }, [pathname]);

  return (
    <Link
      {...props}
      className={` ${className} group flex ${children && "min-w-24"} items-center justify-between hover:text-tremor-brand`}
      onClick={() => pathname !== props.href && setLoading(true)}
    >
      {children && <div>{children}</div>}
      {iconProps && (
        <Icon
          className={
            !icon
              ? `*:fill-tremor-brand-inverted group-hover:*:fill-tremor-brand ${iconClassName}`
              : ""
          }
          icon={
            loading && pathname !== props.href
              ? () => <RiLoaderLine className="animate-spin duration-1000" />
              : icon || (() => <RiRemixiconLine />)
          }
          {...otherIconProps}
        />
      )}
    </Link>
  );
};

export default LoadingLink;
