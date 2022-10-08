import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <div className="section-title">
        <div className="line" />
        <h1 className="section-title-text">{title}</h1>
      </div>
      <h2 className="section-subtitle">{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
