import React from "react";
import loaderstart from "./../styles/loaderstart.module.css";

export default function LoaderStart() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <svg className={loaderstart.container} viewBox="25 25 50 50">
        <circle className={loaderstart.circle} r="20" cy="50" cx="50"></circle>
      </svg>
    </div>
  );
}
