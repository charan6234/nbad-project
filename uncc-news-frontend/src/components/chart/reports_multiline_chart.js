import React, { useRef, useEffect } from "react";
import * as d3 from "d3";

const ReportMultiLineChart = ({ data }) => {
  const svgRef = useRef();

  useEffect(() => {
    // Set dimensions
    const width = 750;
    const height = 300;
    const margin = { top: 50, right: 30, bottom: 120, left: 60 }; // Increased bottom margin for legends

    // Parse the data
    const groupedData = d3.group(data, (d) => d.area);

    // Set up scales
    const xScale = d3
      .scaleLinear()
      .domain([2019, 2023])
      .range([margin.left, width - margin.right]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.funding_amount)])
      .range([height - margin.bottom, margin.top]);

    const colorScale = d3
      .scaleOrdinal()
      .domain([...groupedData.keys()])
      .range(d3.schemeCategory10);

    // Create SVG
    const svg = d3
      .select(svgRef.current)
      .attr("width", width)
      .attr("height", height);

    // Add Axes
    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(xScale).tickFormat(d3.format("d")));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(yScale));

    // Add lines
    groupedData.forEach((values, key) => {
      svg
        .append("path")
        .datum(values)
        .attr("fill", "none")
        .attr("stroke", colorScale(key))
        .attr("stroke-width", 2)
        .attr(
          "d",
          d3
            .line()
            .x((d) => xScale(d.year))
            .y((d) => yScale(d.funding_amount))
        );
    });

    // Add legend below the X-axis in two rows
    const legendItemsPerRow = 5; // Number of items per row

    const legend = svg
      .selectAll(".legend")
      .data([...groupedData.keys()])
      .enter()
      .append("g")
      .attr("class", "legend")
      .attr(
        "transform",
        (_, i) =>
          `translate(${margin.left + (i % legendItemsPerRow) * 140}, ${
            height - margin.bottom + 40 + Math.floor(i / legendItemsPerRow) * 20
          })`
      );

    legend
      .append("rect")
      .attr("width", 10)
      .attr("height", 10)
      .attr("fill", (d) => colorScale(d));

    legend
      .append("text")
      .attr("x", 15)
      .attr("y", 10)
      .text((d) => d)
      .style("font-size", "12px");
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default ReportMultiLineChart;
