import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="section-header">
      <h1 className="section-title">{title}</h1>
      <h2 className="section-subtitle">{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
