"use client";
import { HTMLAttributes } from "react";
import LoadingLink from "../link/LoadingLink.component";
import { RiSearchLine } from "@remixicon/react";

type SearchFormProps = {} & HTMLAttributes<HTMLFormElement>;

const SearchForm = ({ children, className, ...props }: SearchFormProps) => {
  const handleSubmit = () => console.log("search submit");
  return (
    <form
      {...props}
      className={`flex max-h-9 items-center overflow-hidden rounded-tremor-default border-2 bg-tremor-background-muted px-2 shadow-tremor-input focus:bg-tremor-background ${className}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        name="search"
        id="search"
        placeholder={"جستجو..." || "search ..."}
        className="min-w-64 border-none bg-transparent align-text-top text-tremor-content outline-none focus:bg-tremor-background active:bg-tremor-background"
      />
      <LoadingLink
        href={"#"}
        className="bg-transparent px-2"
        iconProps={{
          icon: () => <RiSearchLine />,
          className: "*:fill-tremor-content",
        }}
        onClick={handleSubmit}
      />
    </form>
  );
};

export default SearchForm;
