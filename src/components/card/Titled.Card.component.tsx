"use client";
import { RiPinDistanceLine } from "@remixicon/react";
import { Button, Card, CardProps, Subtitle, Title } from "@tremor/react";
import { ElementType, HTMLAttributes, ReactNode } from "react";

type TitledCardProps = {
  desc?: string | undefined | null;
  icon?: ReactNode;
} & CardProps;

const TitledCard = (props: TitledCardProps) => {
  return (
    <Card {...props} decoration="right">
      <Title className="text-right">{props.title}</Title>
      <div className="flex justify-between">
        <Subtitle>{props.desc}</Subtitle>
        <Button
          variant="light"
          icon={() => (props.icon ? props.icon : <RiPinDistanceLine />)}
        ></Button>
      </div>
    </Card>
  );
};

export default TitledCard;
