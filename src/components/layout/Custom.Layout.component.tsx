import { ReactNode } from "react";
import SearchForm from "../form/Search.Form.component";
import AnchoredProfile from "../profile/Anchored.Profile.component";
import React from "react";
import { Metric } from "@tremor/react";
import { Button } from "react-day-picker";

const CustomLayout = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => {
  const childrenArray = React.Children.toArray(children);

  const summaryContent = childrenArray[0];
  const descriptorContent = childrenArray.slice(1);

  return (
    <section className="col-span-5 row-span-1 flex flex-col bg-tremor-background-subtle *:px-3 *:py-10 md:flex-row">
      {/* Summary section */}
      <div className="w-full bg-tremor-background-subtle md:w-2/5">
        <div className="my-4 flex items-stretch md:hidden">
          <AnchoredProfile className="place-self-end" />
          <SearchForm />
        </div>
        {/* Page title */}
        <div className="">
          <Metric className="" data-name="title">
            <span className="">{title || "عنوان"}</span>
          </Metric>
        </div>
        <div className="my-10">{summaryContent}</div>
      </div>

      {/* Descriptor section */}
      <div className="w-full bg-tremor-background md:w-3/5">
        <div className="hidden flex-row justify-between md:flex">
          <SearchForm />
          <AnchoredProfile />
        </div>
        <div className="my-10">{descriptorContent}</div>
      </div>
    </section>
  );
};

export default CustomLayout;
