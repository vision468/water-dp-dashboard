import PostCard from "@/components/card/Post.Card.component";
import TitledCard from "@/components/card/Titled.Card.component";
import { AreaChar } from "@/components/chart/Area.Chart.component";
import ChartHeader from "@/components/chart/Header.Chart.component";
import ProgressCircleChart from "@/components/chart/ProgressCircle.Chart.component";
import WrapperChart from "@/components/chart/Wrapper.Chart.component";
import CustomLayout from "@/components/layout/Custom.Layout.component";
import LoadingLink from "@/components/link/LoadingLink.component";
import ListHeader from "@/components/list/Header.List.component";
import BasicTab from "@/components/tab/Basic.Tab.component";
import {
  RiAccountBoxLine,
  RiAlertLine,
  RiCashLine,
  RiMoreLine,
  RiPhoneLine,
  RiPinDistanceLine,
} from "@remixicon/react";
import {
  Button,
  Card,
  Subtitle,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  Title,
} from "@tremor/react";

export default function StationPage() {
  const tabsLabel = ["وضعیت مخزن", "ارتفاع", "مخزن", "دما", "سرریز", ""];
  return (
    <CustomLayout title="کد- نام ایستگاه">
      <div>
        <ListHeader title="خلاصه اطلاعات مخزن"></ListHeader>
        <Card>
          <div className="flex justify-evenly">
            <ProgressCircleChart value={60} title="3210 لیتر" desc="حجم آب" />
            <ProgressCircleChart
              color="green"
              value={80}
              title=""
              desc="باتری"
            />
          </div>
          <div className="flex gap-4">
            <TitledCard title="موقعیت" desc="آدرس" />
            <TitledCard
              title="سرریز"
              desc="دارد"
              icon={<RiAlertLine color="red" />}
            />
          </div>
          <br />
          <div className="flex gap-4">
            <TitledCard
              title="شماره مخزن"
              desc="+989902304567"
              icon={<RiPhoneLine />}
            />
            <TitledCard
              title="میزان شارژ"
              desc="23600ریال"
              icon={<RiCashLine />}
            />
          </div>
          <br />
          <div className="flex justify-center">
            <Button variant="light">{"جزئیات بیشتر"}</Button>
          </div>
        </Card>
      </div>
      <div>
        <div className="mx-auto max-w-2xl">
          <ChartHeader title={"گزارشات و نمودار ها"}></ChartHeader>
          <div>
            <BasicTab tabsLabel={tabsLabel}>
              <WrapperChart>
                <AreaChar />
              </WrapperChart>
              <WrapperChart>
                <AreaChar />
              </WrapperChart>
              <WrapperChart>
                <AreaChar />
              </WrapperChart>
              <WrapperChart>
                <AreaChar />
              </WrapperChart>
            </BasicTab>
          </div>
        </div>
      </div>
    </CustomLayout>
  );
}
