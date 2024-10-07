"use client";

import {
  DatePicker,
  DateRangePicker,
  DateRangePickerItem,
  DateRangePickerValue,
} from "@tremor/react";
import { faIR } from "date-fns/locale";
import { useState } from "react";

export default function CustomDatePicker() {
  const [value, setValue] = useState<DateRangePickerValue>({
    from: new Date(2023, 1, 1),
    to: new Date(),
  });
  return (
    // <DatePicker
    //   className="mx-auto max-w-md"
    //   //   value={value}
    //   //   onValueChange={setValue}
    //   weekStartsOn={1}
    //   locale={faIR}
    //   dir="rtl"
    //   //   selectPlaceholder="Seleccionar"
    // ></DatePicker>
    <DateRangePicker
      className="mx-auto max-w-md"
      value={value}
      onValueChange={setValue}
      locale={faIR}
      //   selectPlaceholder="Seleccionar"
      color="rose"
      //   dir="ltr"
    >
      {/* <DateRangePickerItem key="ytd" value="ytd" from={new Date(2023, 0, 1)}>
        Año transcurrido
      </DateRangePickerItem>
      <DateRangePickerItem
        key="half"
        value="half"
        from={new Date(2023, 0, 1)}
        to={new Date(2023, 5, 31)}
      >
        Primer semestre
      </DateRangePickerItem> */}
    </DateRangePicker>
  );
}
