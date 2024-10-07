import CustomLinkObjectType from "@/type/LinkItem";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import type { MenuProps } from "@headlessui/react";
import LoadingLink from "../link/LoadingLink.component";
import { RiArrowDownSLine, RiFileSearchLine } from "@remixicon/react";
import AnchoredMenu from "./Anchored.Menu.component";
import makeItemsList from "@/lib/makeItemsList";

type DropdownMenuProps = {
  className?: string;
  items?: CustomLinkObjectType[];
} & MenuProps;

const DropdownMenu = ({
  children,
  className,
  items,
  ...props
}: DropdownMenuProps) => {
  return (
    <Menu {...props}>
      <MenuButton className={"text-tremor-brand"}>
        <div className="flex gap-2">
          My account
          <RiArrowDownSLine />
        </div>
      </MenuButton>
      <MenuItems anchor="bottom" className={"text-tremor-content"}>
        {items &&
          items.map(({ name, label, path, iconProps }) => (
            <MenuItem key={name}>
              <AnchoredMenu
                items={makeItemsList([[name, label, path, iconProps.icon]])}
              ></AnchoredMenu>
            </MenuItem>
          ))}
      </MenuItems>
    </Menu>
  );
};
export default DropdownMenu;
