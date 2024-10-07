"use client";

import AnchoredMenu from "./Anchored.Menu.component";
import CompanyLogo from "../logo/CompanyLogo.component";
import makeItemsList from "@/lib/makeItemsList";
import { Button, Divider } from "@tremor/react";
import {
  RiBaseStationLine,
  RiCloseLine,
  RiFileSearchLine,
  RiFolderChartLine,
  RiHammerLine,
  RiLogoutBoxRLine,
  RiMenu3Line,
  RiQuestionAnswerLine,
  RiSettingsLine,
} from "@remixicon/react";
import { useState } from "react";

const SideMenu = () => {
  return (
    <menu className="relative flex h-full flex-col px-14">
      <div className="flex h-32 items-center justify-center">
        <CompanyLogo size="md" />
      </div>
      <br />
      <div>
        <AnchoredMenu
          className="flex-col"
          items={makeItemsList([
            ["overview", "بررسی اجمالی", "/", <RiFileSearchLine />],
            ["stations", "ایستگاه ها", "/stations", <RiBaseStationLine />],
            ["reports", "گزارشات", "/reports", <RiFolderChartLine />],
            ["operations", "عملیات", "/operations", <RiHammerLine />],
          ])}
        />
      </div>
      <Divider className="*:dark:bg-tremor-brand-inverted"></Divider>
      <div>
        <AnchoredMenu
          className="flex-col"
          items={makeItemsList([
            ["support", "پشتیبانی", "/support", <RiQuestionAnswerLine />],
            ["settings", "تنظیمات", "/settings", <RiSettingsLine />],
          ])}
        />
      </div>
      <br />
      <div className="h-full w-full">
        <AnchoredMenu
          className="h-full flex-col"
          items={makeItemsList([
            ["logout", "خروج", "/auth/logout", <RiLogoutBoxRLine />],
          ])}
        />
      </div>
    </menu>
  );
};

export default SideMenu;
