import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./index.css";

const ReportsChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    const width = 850;
    const height = 400;
    const margin = { top: 20, right: 30, bottom: 150, left: 60 }; // Increased bottom margin for legends and labels

    // Group data by area
    const groupedData = d3.group(data, (d) => d.area);

    // Select the SVG element
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Clear any existing content before re-rendering
    svg.selectAll("*").remove();

    // Set up scales
    const xScale = d3
      .scaleBand()
      .domain([...groupedData.keys()])
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.funding_amount)])
      .range([height - margin.bottom, margin.top]);
    const colorScale = d3.scaleOrdinal(d3.schemeTableau10);

    // Add axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickSize(0))
      .selectAll("text")
      .remove(); // Remove overlapping X-axis labels

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Add bars with unique colors
    svg
      .selectAll(".bar")
      .data(data)
      .join("rect")
      .attr("class", "bar")
      .attr("x", (d) => xScale(d.area))
      .attr("width", xScale.bandwidth())
      .attr("y", (d) => yScale(d.funding_amount))
      .attr("height", (d) => height - margin.bottom - yScale(d.funding_amount))
      .attr("fill", (d) => colorScale(d.area)) // Updated color scheme to use d3.schemeTableau10
      .on("mouseover", (event, d) => {
        d3.select("#tooltip")
          .style("opacity", 1)
          .html(`Funding: $${d.funding_amount}`)
          .style("left", `${event.pageX + 5}px`)
          .style("top", `${event.pageY - 28}px`);
      })
      .on("mouseout", () => {
        d3.select("#tooltip").style("opacity", 0);
      });

    // Add legend with two rows
    const legendGroup = svg.append("g").attr("class", "legend-group");

    legendGroup
      .selectAll(".legend")
      .data([...groupedData.keys()])
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        (_, i) =>
          `translate(${margin.left + (i % 5) * 150}, ${
            height - margin.bottom + 40 + Math.floor(i / 5) * 20
          })`
      )
      .call((legend) => {
        // Add color boxes
        legend
          .append("rect")
          .attr("width", 10)
          .attr("height", 10)
          .attr("fill", (_, i) => d3.schemeTableau10[i % 10]);

        // Add text labels
        legend
          .append("text")
          .attr("x", 15)
          .attr("y", 10)
          .text((d) => d)
          .style("font-size", "12px")
          .style("text-anchor", "start");
      });
  }, [data]);

  return (
    <div>
      <svg ref={svgRef}></svg>
      <div id="tooltip" className="tooltip"></div>
    </div>
  );
};

export default ReportsChart;
