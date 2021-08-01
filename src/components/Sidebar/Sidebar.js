import {
  CogIcon,
  DocumentDuplicateIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/outline";
import React, { useState } from "react";
import Sidebar1Item from "./Sidebar1Item";
import Sidebar2 from "./Sidebar2";

export default function Sidebar({ children, language, setSite }) {
  const [tab, setTabs] = useState("save");
  return (
    <div className="flex">
      <div className="sidebar-1 h-ufll bg-gray-light flex flex-col justify-between">
        <div>
          <Sidebar1Item
            curr={tab}
            val="save"
            setter={setTabs}
            icon={<DocumentDuplicateIcon />}
          />
          <Sidebar1Item
            curr={tab}
            val="search"
            setter={setTabs}
            icon={<SearchIcon style={{ transform: "scale(-1,1)" }} />}
          />
          <Sidebar1Item
            curr={tab}
            val="git"
            setter={setTabs}
            icon={
              <svg
                style={{ padding: "10px" }}
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <circle
                  cx="160"
                  cy="96"
                  r="48"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <circle
                  cx="160"
                  cy="416"
                  r="48"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <line
                  x1="160"
                  y1="368"
                  x2="160"
                  y2="144"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <circle
                  cx="352"
                  cy="160"
                  r="48"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
                <path
                  d="M352,208c0,128-192,48-192,160"
                  style={{
                    fill: "none",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "32px",
                  }}
                />
              </svg>
            }
          />
          <Sidebar1Item
            curr={tab}
            val="extensions"
            setter={setTabs}
            icon={
              <svg
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
              >
                <path
                  d="M2 17.5H12.25M12.25 17.5H22.5L23.5 18.5V26.5L22.5 27.5H12.5M12.25 17.5V7.5L11.5 6.5H2.5L1.5 7.5V26.5L2.5 27.5H12.5M12.25 18L12.5 27.5M18.5 11.5H27.5L28.5 10.5V2.5L27.5 1.5H19.5H18.5L17.5 2.5V10.5L18.5 11.5Z"
                  strokeWidth="2"
                />
              </svg>
            }
          />
        </div>
        <div>
          <Sidebar1Item
            curr={tab}
            val="user"
            setter={setTabs}
            icon={<UserCircleIcon />}
          />
          <Sidebar1Item
            curr={tab}
            val="settings"
            style={{ margin: "0" }}
            setter={setTabs}
            icon={<CogIcon />}
          />
        </div>
      </div>
      <div className="flex-1">
        <Sidebar2 setSite={setSite} language={language}>{children}</Sidebar2>
      </div>
    </div>
  );
}
