"use client";
import { HTMLAttributes, MouseEventHandler, useRef, useState } from "react";
import ChartHeader from "./Header.Chart.component";
import CustomDatePicker from "../form/DatePicker.Form.component";
import { Button } from "@tremor/react";
import {
  RiCloseLine,
  RiExpandDiagonalLine,
  RiExportLine,
  RiShareFill,
} from "@remixicon/react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

type WrapperChartProp = {} & HTMLAttributes<HTMLDivElement>;

const WrapperChart = ({ children, title }: WrapperChartProp) => {
  const [expanded, setExpanded] = useState(false);
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    setExpanded(!expanded);
  };

  const chartRef = useRef<HTMLDivElement | null>(null);

  // تابع برای گرفتن خروجی PDF
  const generatePdf = () => {
    const input = chartRef.current;

    if (input) {
      // تبدیل HTML به Canvas با استفاده از html2canvas
      html2canvas(input).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // ایجاد PDF با استفاده از jsPDF
        const pdf = new jsPDF("landscape", "mm", "a4");
        const imgWidth = 290; // عرض PDF
        const pageHeight = 210; // ارتفاع PDF
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 10, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        // ذخیره PDF
        pdf.save("chart.pdf");
      });
    }
  };

  return (
    <div
      className={`transition-all ${expanded ? "fixed left-0 top-0 z-30 h-screen w-screen bg-tremor-background p-10" : ""}`}
    >
      <ChartHeader title={title}></ChartHeader>
      <div ref={chartRef}>{children}</div>
      <div className="my-4 flex justify-end gap-4">
        <Button
          variant="secondary"
          icon={() => <RiExpandDiagonalLine />}
          iconPosition="right"
          onClick={handleClick}
        >
          {!expanded ? "تمام صفحه" : "بستن"}
        </Button>
        <Button
          variant="secondary"
          icon={() => <RiExportLine />}
          iconPosition="right"
          onClick={() => generatePdf()}
        >
          {"خروجی"}
        </Button>
      </div>
      {expanded && (
        <Button
          variant="secondary"
          onClick={() => setExpanded(false)}
          icon={() => <RiCloseLine />}
          className={`absolute right-2 top-2 z-20`}
        ></Button>
      )}
    </div>
  );
};
export default WrapperChart;
