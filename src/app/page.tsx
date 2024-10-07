import CalloutCard from "@/components/card/Callout.Card.component";
import MetricsCard from "@/components/card/Metric.Card.component";
import { AreaChar } from "@/components/chart/Area.Chart.component";
import WrapperChart from "@/components/chart/Wrapper.Chart.component";
import CustomLayout from "@/components/layout/Custom.Layout.component";
import MetricsList from "@/components/list/Metrics.List.component";
import { Metric } from "@tremor/react";
import Image from "next/image";

export default function Home() {
  return (
    <CustomLayout title="بررسی اجمالی">
      <div key={1}>
        <MetricsList title="معیار ها" data-name="summary">
          <MetricsCard
            title="ایستگاه های فعال"
            value={82}
            deltaType="increase"
          />
          <MetricsCard
            title="ایستگاه های سرریز"
            value={9}
            deltaType="decrease"
          />
          <MetricsCard
            title="ایستگاه های نیازمند بررسی"
            value={0}
            deltaType="unchanged"
          />
        </MetricsList>
        <MetricsList
          title="اعلان ها"
          className="overflow-y-auto"
          data-name="summary"
        >
          <CalloutCard priority="default" title="" />
          <CalloutCard priority="alert" title="" />
          <CalloutCard priority="success" title="" />
        </MetricsList>
      </div>

      <div key={2}>
        <WrapperChart
          title="نمودار بیشترین تغییرات ماهانه"
          data-name="descriptor"
        >
          <AreaChar />
        </WrapperChart>
      </div>
    </CustomLayout>
  );
}
// {/* Start Summary */}
// {/* title  */}

// {/* Metrics */}

// {/* End Summary */}
// {/* Start Descriptor */}

// {/* End Descriptor */}
