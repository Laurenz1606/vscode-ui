import React from "react";
import FooterItem from "./FooterItem";
import {
  RefreshIcon,
  XCircleIcon,
  ExclamationIcon,
  BellIcon,
  CheckIcon,
  ChevronDoubleRightIcon,
} from "@heroicons/react/outline";
import Gitmerge from "../../images/git-merge.svg";

export default function Footer() {
  return (
    <footer className="footer flex">
      <div className="h-full bg-green-normal flex items-center px-3">
        <FooterItem
          className="space-x-1"
          text="SSH: laurenz-rausche.de"
          icon={<ChevronDoubleRightIcon className="h-4 w-4" />}
        />
      </div>
      <div className="h-full bg-blue-normal flex flex-1 items-center">
        <div className="flex flex-1 justify-between items-center px-3">
          <div className="space-x-4 flex">
            <FooterItem
              text="main*"
              icon={<img src={Gitmerge} alt="" className="h-5 w-5" />}
            />
            <FooterItem text="" icon={<RefreshIcon className="h-4 w-4" />} />
            <div className="flex space-x-1">
              <FooterItem
                className="space-x-1"
                text="0"
                icon={<XCircleIcon className="h-4 w-4" />}
              />
              <FooterItem
                className="space-x-1"
                text="0"
                icon={<ExclamationIcon className="h-4 w-4" />}
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            © Laurenz Rausche, {new Date().getFullYear()}
          </div>
          <div className="space-x-4 flex justify-end">
            <FooterItem text="Ln 41, Col 30" icon={""} />
            <FooterItem text="Spaces: 2" icon={""} />
            <FooterItem text="UTF-8" icon={""} />
            <FooterItem text="LF" icon={""} />
            <FooterItem text="Javascript" icon={""} />
            <FooterItem
              text="Prettier"
              icon={<CheckIcon className="h-5 w-5" />}
            />
            <FooterItem text="" icon={<BellIcon className="h-4 w-4" />} />
          </div>
        </div>
      </div>
    </footer>
  );
}
