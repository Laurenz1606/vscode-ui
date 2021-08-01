import React from "react";

export default function Sidebar1Item({ icon, curr, val, setter, style }) {
  return (
    // eslint-disable-next-line
    <a>
      <div
        style={style}
        onClick={() => setter(val)}
        className={
          "sidebar-1-item hover:text-white border-l-2 " +
          (curr === val
            ? "text-white border-white"
            : "border-gray-light text-gray-text")
        }
      >
        {icon}
      </div>
    </a>
  );
}
