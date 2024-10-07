"use client";
import { RiChat4Line, RiChatSmileLine, RiFeedbackLine } from "@remixicon/react";
import { Callout, CalloutProps } from "@tremor/react";
import Link, { LinkProps } from "next/link";
import { useRef } from "react";

type CalloutCardProps = {
  priority: "default" | "alert" | "success";
} & CalloutProps;

const CalloutCard = ({ priority }: CalloutCardProps) => {
  const config = {
    default: {
      color: "blue",
      icon: () => <RiChat4Line />,
    },
    alert: {
      color: "red",
      icon: () => <RiFeedbackLine />,
    },
    success: {
      color: "green",
      icon: () => <RiChatSmileLine />,
    },
  };
  const linkRef = useRef<HTMLAnchorElement>(null);
  const handleClick = () => {
    if (linkRef.current) linkRef.current.click();
  };
  return (
    <Callout
      title={"عنوان" || "title"}
      color={config[priority].color}
      dir="rtl"
      className="w-64 cursor-pointer border-l-0 border-r-4 *:mx-2 md:w-96"
      icon={config[priority].icon}
      onClick={handleClick}
    >
      {`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. `}
      <Link href={"/overview"} ref={linkRef} />
    </Callout>
  );
};

export default CalloutCard;
