"use client";
import {
  Button,
  Icon,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from "@tremor/react";
import { HTMLAttributes, MouseEventHandler } from "react";
import ListHeader from "../list/Header.List.component";
import { RiDeleteBinLine, RiEditLine, RiEyeLine } from "@remixicon/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import path from "path";
import LoadingLink from "../link/LoadingLink.component";

type ActionTableItemsType = {
  code: number | string;
  name: string;
  level: number | string;
  time: number | Date | string;
  slug: string;
};
type ActionTableProps = {
  labels: Omit<ActionTableItemsType, "slug"> & { action: string };
  items?: Partial<ActionTableItemsType>[];
  actionPath: string;
} & HTMLAttributes<HTMLDivElement>;

const ActionTable = ({
  actionPath,
  items,
  labels,
  title,
}: ActionTableProps) => {
  // const router = useRouter();
  const pathname = usePathname();
  const handleModify: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.value);
  };

  const handleDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.value);
  };
  const handleSee: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.value);
    // router.push("/" + e.currentTarget.value);
  };

  return (
    <div className="mx-auto max-w-2xl">
      <ListHeader title={title}></ListHeader>
      <Table className="my-2 rounded-tremor-default text-right last:text-left">
        <TableHead className="bg-tremor-background-emphasis">
          <TableRow className="*:text-right *:text-tremor-content-inverted">
            <TableHeaderCell>{labels.code}</TableHeaderCell>
            <TableHeaderCell className="w-full">{labels.name}</TableHeaderCell>
            <TableHeaderCell>{labels.level}</TableHeaderCell>
            <TableHeaderCell>{labels.time.toString()}</TableHeaderCell>
            <TableHeaderCell>{labels.action}</TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {items &&
            items.map(({ code, name, level, time, slug }, index) => (
              <TableRow
                key={slug}
                className="group transition-colors *:text-right odd:bg-tremor-background-subtle even:bg-tremor-background-muted hover:bg-tremor-content-subtle hover:fill-tremor-content-inverted hover:text-tremor-content-inverted focus:bg-tremor-background active:bg-tremor-background"
              >
                <TableCell>{code}</TableCell>
                <TableCell className="w-full">{name}</TableCell>
                <TableCell>{level}</TableCell>
                <TableCell>
                  {new Date(time || "").toLocaleTimeString("fa-IR", {
                    timeStyle: "short",
                  })}
                </TableCell>
                {/* Action Cell */}
                <TableCell className="">
                  <LoadingLink
                    href={path.join(pathname, slug || "")}
                    className="inline-flex"
                    iconProps={{
                      className:
                        "fill-tremor-content hover:fill-tremor-brand group-hover:fill-tremor-content-inverted group-hover:hover:fill-tremor-brand group-hover:hover:transition-colors",
                      icon: () => (
                        <RiEyeLine className="fill-tremor-content hover:fill-tremor-brand group-hover:fill-tremor-content-inverted group-hover:hover:fill-tremor-brand group-hover:hover:transition-colors" />
                      ),
                    }}
                  >
                    {/* {"مشاهده" || "See"} */}
                  </LoadingLink>
                  {/* <Link href={path.join(pathname, slug || "")}>
                    <Button
                      variant="light"
                      title={"مشاهده" || "See"}
                      value={slug}
                      // onClick={handleSee}
                      icon={() => (
                        <RiEyeLine className="fill-tremor-content hover:fill-tremor-brand group-hover:fill-tremor-content-inverted group-hover:hover:fill-tremor-brand group-hover:hover:transition-colors" />
                      )}
                    ></Button>
                  </Link> */}
                  <Button
                    variant="light"
                    title={"ویرایش" || "Modify"}
                    value={slug}
                    onClick={handleModify}
                    icon={() => (
                      <RiEditLine className="fill-tremor-content group-hover:fill-tremor-content-inverted group-hover:hover:fill-tremor-brand group-hover:hover:transition-colors" />
                    )}
                  ></Button>
                  <Button
                    variant="light"
                    title={"حذف" || "Delete"}
                    value={slug}
                    onClick={handleDelete}
                    icon={() => (
                      <RiDeleteBinLine className="fill-tremor-content hover:fill-tremor-brand group-hover:fill-tremor-content-inverted group-hover:hover:fill-tremor-brand group-hover:hover:transition-colors" />
                    )}
                  ></Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ActionTable;
