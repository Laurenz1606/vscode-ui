import React from "react";

export default function Sidebarfile({ icon, text, setSite, to }) {
  return (
    <div>
      <button>
        <div
          onClick={() => setSite(to)}
          className="flex items-center ml-6 space-x-2"
        >
          <img src={icon} alt="" className="w-4 h-4" /> <span>{text}</span>
        </div>
      </button>
    </div>
  );
}
