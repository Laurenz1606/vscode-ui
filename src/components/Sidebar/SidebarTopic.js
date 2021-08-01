import React from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/outline";

export default function SidebarTopic({ open, text, border }) {
  return (
    <div
      className={
        "text-gray-lighttext flex flex-shrink-0 items-center space-x-1 border-t p-1 " +
        (border ? "border-gray-text border-opacity-50" : "border-gray-normal")
      }
    >
      <div>{open ? <ChevronDownIcon className="w-4 h-4" /> : <ChevronRightIcon className="w-4 h-4" />}</div>
      <span
        style={{ textOverflow: "ellipsis" }}
        className="font-semibold whitespace-nowrap overflow-hidden"
      >
        {text}
      </span>
    </div>
  );
}
