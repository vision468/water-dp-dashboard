import type { Metadata } from "next";
import "./globals.css";
import SideMenu from "@/components/menu/SideMenu.component";
import AnchoredProfile from "@/components/profile/Anchored.Profile.component";
import SearchForm from "@/components/form/Search.Form.component";
import { Metric, Text } from "@tremor/react";
import MetricsCard from "@/components/card/Metric.Card.component";
import { Providers } from "./provider";
import MetricsList from "@/components/list/Metrics.List.component";
import CalloutCard from "@/components/card/Callout.Card.component";
import WrapperChart from "@/components/chart/Wrapper.Chart.component";
import { AreaChar } from "@/components/chart/Area.Chart.component";
import React from "react";
import { ThemeProvider } from "next-themes";
import MobileMenu from "@/components/menu/Mobile.Menu.component";

export const metadata: Metadata = {
  title: "Water Department Dashboard",
  description: "Mazandaran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body
        className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-1"
        dir="rtl"
      >
        <ThemeProvider attribute="class">
          {/* Side Menu */}
          <div className="box-border hidden bg-tremor-background-emphasis md:block">
            <div className="sticky top-0 py-10 md:h-screen">
              <SideMenu />
            </div>
          </div>
          {/* Mobile menu */}
          <MobileMenu>
            <div className="sticky top-0 z-20 box-border h-screen bg-tremor-background-emphasis py-10 md:hidden">
              <SideMenu />
            </div>
          </MobileMenu>

          {/* Main content */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
