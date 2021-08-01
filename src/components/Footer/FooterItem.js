import React from "react";

export default function FooterItem({ icon, text, className }) {
  return (
    <div className={"flex items-center" + (className ? " " + className : "")} >
      {icon}<span>{text}</span>
    </div>
  );
}
