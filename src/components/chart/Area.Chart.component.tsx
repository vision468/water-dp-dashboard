"use client";
import { AreaChart } from "@tremor/react";

const chartdata = [
  {
    date: "اردیبهشت 22",
    "ایستگاه یک": 2890,
    "ایستگاه دو": 2338,
  },
  {
    date: "خرداد 22",
    "ایستگاه یک": 2756,
    "ایستگاه دو": 2103,
  },
  {
    date: "تیر 22",
    "ایستگاه یک": 3322,
    "ایستگاه دو": 2194,
  },
  {
    date: "مرداد 22",
    "ایستگاه یک": 3470,
    "ایستگاه دو": 2108,
  },
  {
    date: "شهریور 22",
    "ایستگاه یک": 3475,
    "ایستگاه دو": 1812,
  },
  {
    date: "مهر 22",
    "ایستگاه یک": 3129,
    "ایستگاه دو": 1726,
  },
  {
    date: "آبان 22",
    "ایستگاه یک": 3490,
    "ایستگاه دو": 1982,
  },
];

const valueFormatter = function (number: number) {
  return "Lit " + new Intl.NumberFormat("us").format(number).toString();
};

type AreaChartProps = {
  xAxisLabel: string;
  yAxisLabel: string;
  categories: string[];
};

export function AreaChar({
  categories,
  xAxisLabel,
  yAxisLabel,
}: Partial<AreaChartProps>) {
  return (
    <>
      <AreaChart
        dir="ltr"
        className="mt-4 h-72"
        data={chartdata}
        index="date"
        yAxisWidth={65}
        categories={categories || ["ایستگاه یک", "ایستگاه دو"]}
        colors={["indigo", "cyan"]}
        valueFormatter={valueFormatter}
        xAxisLabel={xAxisLabel || ""}
        yAxisLabel={yAxisLabel || ""}
      />
    </>
  );
}
