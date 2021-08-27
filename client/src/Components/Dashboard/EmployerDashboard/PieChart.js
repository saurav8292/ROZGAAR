import React from "react";
import ReactSvgPieChart from "react-svg-piechart";

const PieChart = ({ pending, approved, rejected }) => {
  const data = [
    { title: `Selected ${approved}`, value: approved, color: "#008000" },
    { title: `On Hold ${pending}`, value: pending, color: "#FFFF00" },
    { title: `Rejected ${rejected}`, value: rejected, color: "#FF0000" },
  ];
  console.log({ pending, approved, rejected });
  return (
    <ReactSvgPieChart
      data={data}
      // If you need expand on hover (or touch) effect
      expandOnHover
      // If you need custom behavior when sector is hovered (or touched)
      onSectorHover={(d, i, e) => {
        if (d) {
          console.log("Mouse enter - Index:", i, "Data:", d, "Event:", e);
        } else {
          console.log("Mouse leave - Index:", i, "Event:", e);
        }
      }}
    />
  );
};
export default PieChart;
