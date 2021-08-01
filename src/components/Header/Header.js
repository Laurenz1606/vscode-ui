import React from "react";
import { Link } from "react-router-dom";
import Vscode from "../../images/vscode.svg";
import translations from "../../translations/header";

export default function Header({ language, site }) {
  console.log(site)
  return (
    <header className="header bg-gray-lighter grid grid-cols-3 text-gray-lighttext text-sm">
      <div className="flex items-center pl-3 space-x-5">
        <img src={Vscode} alt="" className="h-5 w-5" />
        {translations[language].links.map((item, idx) => (
          <span key={idx}>{item}</span>
        ))}
      </div>
      <div className="flex justify-center items-center">
        {site.name} - laurenz-rausche.de [SSH: laurenz-rausche.de] - Visual Studio
        Code
      </div>
      <div className="flex justify-end items-center pr-3 space-x-5">
        <Link to={translations[language].language.path}>
          {translations[language].language.name}
        </Link>
      </div>
    </header>
  );
}
