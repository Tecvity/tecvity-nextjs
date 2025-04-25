import React from "react";

export default function Breadcrumb({Breadcrumb = null}) {
  return (
    <div
      className="breadcumb-wrapper "
      style={{ backgroundImage: "url(/assets/img/bg/services-bg.png)" }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{Breadcrumb && `${Breadcrumb} | `}Services</h1>
        </div>
      </div>
    </div>
  );
}
