import CustomLayout from "@/components/layout/Custom.Layout.component";
import { AccordionList } from "@/components/list/Accordion.List.component";
import ActionTable from "@/components/table/Action.Table.component";

export default function StationPage() {
  return (
    <CustomLayout title="ایستگاه ها">
      <div>
        <AccordionList title="منطقه مورد نظر" />
      </div>
      <div>
        <ActionTable
          title="منطقه انتخاب شده"
          actionPath="/api/stations"
          labels={{
            action: "عملیات",
            name: "نام",
            code: "کد",
            level: "ارتفاع آب",
            time: "زمان",
          }}
          items={[
            {
              name: "شهر آمل",
              slug: "amolCity",
              level: "320",
              time: "2024-11-22T12:28:00+03:30",
              code: "11",
            },
            {
              name: "شهر بابل",
              slug: "babolCity",
              level: "829",
              time: "2024-11-22T12:28:00+03:30",
              code: "20",
            },
          ]}
        />
      </div>
    </CustomLayout>
  );
}
