import { BadgeDelta, Metric, Text, Title, Subtitle } from "@tremor/react";
import type { BadgeDeltaProps } from "@tremor/react";
import { HTMLAttributes } from "react";

type MetricsCardProps = {
  value: string | number;
} & HTMLAttributes<HTMLDivElement> &
  SelectBadgeProps;

const MetricsCard = ({
  children,
  className,
  deltaType,
  isIncreasePositive,
  title,
  value,
  ...props
}: MetricsCardProps) => {
  return (
    <div
      {...props}
      className="box-border h-24 w-64 rounded-tremor-default bg-tremor-background p-4 shadow-tremor-card dark:bg-tremor-brand-subtle md:w-[438px]"
    >
      {/* title */}
      <div>
        <Subtitle>{title}</Subtitle>
        <Text></Text>
      </div>
      {/* value and badge */}
      <div className="flex justify-between">
        <Metric>
          <span className="">{value}</span>
        </Metric>
        {selectBadge({
          deltaType: deltaType || "unchanged",
          isIncreasePositive: isIncreasePositive || true,
        })}
      </div>
    </div>
  );
};

type SelectBadgeProps = {
  deltaType:
    | "increase"
    | "moderateIncrease"
    | "unchanged"
    | "moderateDecrease"
    | "decrease";
  isIncreasePositive?: boolean;
};
const selectBadge = ({
  deltaType,
  isIncreasePositive = true,
}: SelectBadgeProps) => {
  switch (deltaType) {
    case "increase":
      return (
        <BadgeDelta
          deltaType="increase"
          isIncreasePositive={isIncreasePositive}
          dir="ltr"
        >
          {"افزایش" || "Increase"}
        </BadgeDelta>
      );
    case "moderateIncrease":
      return (
        <BadgeDelta
          deltaType="moderateIncrease"
          isIncreasePositive={isIncreasePositive}
          dir="ltr"
        >
          {"افزایش نسبی" || "Moderate Increase"}
        </BadgeDelta>
      );
    case "unchanged":
      return (
        <BadgeDelta
          deltaType="unchanged"
          isIncreasePositive={isIncreasePositive}
          dir="ltr"
        >
          {"بدون تغییر" || "Unchanged"}
        </BadgeDelta>
      );
    case "moderateDecrease":
      return (
        <BadgeDelta
          deltaType="moderateDecrease"
          isIncreasePositive={isIncreasePositive}
          dir="ltr"
        >
          {"کاهش نسبی" || "Moderate Decrease"}
        </BadgeDelta>
      );
    case "decrease":
      return (
        <BadgeDelta
          deltaType="decrease"
          isIncreasePositive={isIncreasePositive}
          dir="ltr"
        >
          {"کاهش" || "Decrease"}
        </BadgeDelta>
      );
  }
};

export default MetricsCard;
