"use client";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";
import { Button } from "@tremor/react";
import { HTMLAttributes, useEffect, useState } from "react";
import SideMenu from "./SideMenu.component";
import { usePathname } from "next/navigation";

type MobileMenuProps = {} & HTMLAttributes<HTMLDivElement>;

const MobileMenu = ({ children }: MobileMenuProps) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  return (
    <>
      <Button
        className="absolute right-3 top-3 z-30 md:hidden"
        variant="secondary"
        onClick={() => setIsOpen(!isOpen)}
        icon={() => (isOpen ? <RiCloseLine /> : <RiMenu3Line />)}
      ></Button>

      {isOpen && <>{children}</>}
    </>
  );
};

export default MobileMenu;
