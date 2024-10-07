"use client";

import { Card, ProgressCircle } from "@tremor/react";
import { HTMLAttributes } from "react";

type ProgressCircleChartProps = {
  desc?: string | undefined | null;
  value: number | string;
} & HTMLAttributes<HTMLDivElement>;

const ProgressCircleChart = ({
  children,
  className,
  desc,
  title,
  value,
  ...props
}: ProgressCircleChartProps) => {
  return (
    <div {...props} className={`${className}`}>
      {/* <Card className="mx-auto max-w-sm"> */}
      <div className="my-2 flex flex-col items-center justify-center gap-2">
        <ProgressCircle {...props} value={Number(value)} size="lg">
          <span className="text-tremor-title font-bold text-slate-700">
            {Number(value)}%
          </span>
        </ProgressCircle>
        <div className="*:text-center">
          <p className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong">
            {title} ({Number(value)}%)
          </p>
          <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
            {desc}
          </p>
        </div>
      </div>
      {/* </Card> */}
    </div>
  );
};

export default ProgressCircleChart;
