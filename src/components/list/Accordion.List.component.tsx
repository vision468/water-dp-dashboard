"use client";
import { Button, Card, Subtitle, Title } from "@tremor/react";
import { HTMLAttributes, useState } from "react";
import ListHeader from "./Header.List.component";
import {
  RiArrowDownSLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
  RiCloseLine,
} from "@remixicon/react";

type AccordionItemProps = {
  itemCount: number;
} & HTMLAttributes<HTMLDivElement>;

const AccordionItem = ({ title, children, itemCount }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const selectItemAndToggleAccordion = () => {
    setIsSelected(!isSelected);
    if (!isSelected) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  };

  return (
    <div className="my-2">
      <Card
        className={`flex cursor-pointer justify-between border-r-4 p-2 text-tremor-content ${isSelected ? "border-r-0 bg-tremor-content-strong text-tremor-brand-emphasis" : isOpen ? "bg-tremor-background" : "bg-tremor-background-muted"}`}
        onClick={() => {
          if (isSelected) return selectItemAndToggleAccordion();

          children && setIsOpen(!isOpen);
        }}
      >
        <div
          className={`flex flex-col text-right ${isSelected ? "text-tremor-brand" : "text-tremor-content"}`}
        >
          <Title
            className={`${isSelected ? "text-tremor-brand" : "text-tremor-content"}`}
          >
            {title} {isSelected && "(انتخاب شده)"}{" "}
          </Title>
          <Subtitle>
            {"تعداد زیرمجموعه:"} ({itemCount})
          </Subtitle>
        </div>
        <Button
          variant="secondary"
          icon={isSelected ? () => <RiCloseLine /> : () => <RiArrowDownSLine />}
          iconPosition="right"
          className="p-2"
          onClick={(e) => {
            // e.stopPropagation();
            children
              ? selectItemAndToggleAccordion()
              : setIsSelected(!isSelected);
          }}
        >
          {isSelected ? "لغو" : "انتخاب"}
        </Button>
      </Card>
      {isOpen && (
        <div className="my-1 mb-2 rounded-tremor-default border-tremor-brand pr-4">
          {children}
        </div>
      )}
    </div>
  );
};

type AccordionListProps = {} & HTMLAttributes<HTMLDivElement>;
const AccordionList = ({ title }: AccordionListProps) => {
  return (
    <div>
      <ListHeader title={title}></ListHeader>
      <AccordionItem title="Item 1" itemCount={2}>
        <AccordionItem title="Sub Item 1.1" itemCount={2}>
          <AccordionItem title="Sub Sub Item 1.1.1" itemCount={0} />
          <AccordionItem title="Sub Sub Item 1.1.2" itemCount={0} />
        </AccordionItem>
        <AccordionItem title="Sub Item 1.2" itemCount={0} />
      </AccordionItem>
      <AccordionItem title="Item 2" itemCount={1}>
        <AccordionItem title="Sub Item 2.1" itemCount={0} />
      </AccordionItem>
    </div>
  );
};

export { AccordionList, AccordionItem };
