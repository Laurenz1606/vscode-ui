import React from "react";
import { ChevronRightIcon, DotsHorizontalIcon } from "@heroicons/react/outline";
import sites from "../../translations/sites";
import translations from "../../translations/sidebar";
import SidebarTopic from "./SidebarTopic";
import Sidebarfile from "./Sidebarfile";
import Javascript from "../../images/javascript.svg";
import CSS from "../../images/css3.svg";
import html from "../../images/html5.svg";

export default function Sidebar2({ children, language, setSite }) {
  const icons = [html, Javascript, CSS, html, Javascript];
  return (
    <div className="flex">
      <div className="sidebar-2 h-ufll bg-gray-normal flex flex-col">
        <div className="flex justify-between items-center text-gray-lighttext py-4 px-5">
          <span>EXPLORER</span>
          <DotsHorizontalIcon className="w-4 h-4" />
        </div>
        <div className="flex flex-1 flex-col justify-between">
          <div>
            <SidebarTopic
              icon={<ChevronRightIcon className="w-4 h-4" />}
              text={translations[language].headers[0]}
            />
            <SidebarTopic
              border
              open
              text={translations[language].headers[1]}
            />
            <div className="space-y-1">
              {sites[language].map((site, idx) => (
                <Sidebarfile
                  icon={icons[idx]}
                  text={site.name}
                  setSite={setSite}
                  to={site.url}
                />
              ))}
            </div>
          </div>
          <div>
            <SidebarTopic border text={translations[language].headers[2]} />
            <SidebarTopic border text={translations[language].headers[3]} />
          </div>
        </div>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
