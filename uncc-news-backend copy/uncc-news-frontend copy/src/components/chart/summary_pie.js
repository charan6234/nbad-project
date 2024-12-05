import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const PieChart = ({ data }) => {
  const svgRef = useRef();
  useEffect(() => {
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    // Clear existing content in case of re-render
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    const color = d3
      .scaleOrdinal()
      .domain(data.map((d) => d.area))
      .range(d3.schemeCategory10);

    const pie = d3.pie().value((d) => d.projects_count);

    const arc = d3.arc().innerRadius(0).outerRadius(radius);

    const arcs = svg.selectAll("arc").data(pie(data)).enter().append("g");

    // Draw slices
    arcs
      .append("path")
      .attr("d", arc)
      .attr("fill", (d) => color(d.data.area))
      .on("mouseover", function (event, d) {
        // const [x, y] = d3.pointer(event);
        d3.select("#tooltip")
          .style("opacity", 1)
          .html(`${d.data.area}: ${d.data.projects_count} projects`)
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        d3.select("#tooltip").style("opacity", 0);
      });

    // Add labels
    arcs
      .append("text")
      .attr("transform", (d) => `translate(${arc.centroid(d)})`)
      .attr("text-anchor", "middle")
      .attr("font-size", 10)
      .text((d) => d.data.area);
  }, [data]);

  return (
    <div style={{ position: "relative" }} className="mb-4 pt-5 pl-5">
      <svg ref={svgRef}></svg>
      <div
        id="tooltip"
        style={{
          position: "absolute",
          textAlign: "center",
          width: "auto",
          height: "auto",
          padding: "5px",
          fontSize: "14px",
          background: "lightgray",
          border: "1px solid black",
          borderRadius: "3px",
          pointerEvents: "none",
          opacity: 0,
        }}
      ></div>
    </div>
  );
};

export default PieChart;
