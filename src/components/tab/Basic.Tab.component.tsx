import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@tremor/react";
import { HTMLAttributes, Children, isValidElement } from "react";

type BasicTabProps = {
  tabsLabel: string[];
} & HTMLAttributes<HTMLDivElement>;

const BasicTab = ({ children, className, tabsLabel }: BasicTabProps) => {
  return (
    <div className="z-10">
      <TabGroup>
        <TabList className="z-0 mt-4">
          {tabsLabel.map((t, index) => (
            <Tab key={t + index} className="z-0">
              {t}
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {Children.map(
            children,
            (child, index) =>
              isValidElement(child) && <TabPanel key={index}>{child}</TabPanel>,
          )}
        </TabPanels>
      </TabGroup>
    </div>
  );
};

export default BasicTab;
