// components/CircularWordCloud.tsx
import React, { useEffect } from "react";
import * as d3 from "d3";
import cloud from "d3-cloud";

interface CircularWordCloudProps {
  words: string[];
}

const CircularWordCloud: React.FC<CircularWordCloudProps> = ({ words }) => {
  useEffect(() => {
    // Set up dimensions for the SVG container
    const width = 700;
    const height = 700;

    // Remove any existing SVG container
    d3.select("#word-cloud-container svg").remove();

    // Create an SVG container
    const svg = d3
      .select("#word-cloud-container")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    // Create a D3.js word cloud layout using d3-cloud
    const layout = cloud();

    layout
      .size([width, height])
      .words(
        words.map((word) => ({ text: word, size: 10 + Math.random() * 30 }))
      )
      .padding(5)
      .rotate(() => (Math.random() > 0.5 ? 0 : 90))
      .font("Impact") // You can change the font family
      .fontSize((d) => d.size || 10) // Ensure a default value if 'size' is undefined
      .on("end", draw);

    // Start the layout
    layout.start();

    // Function to draw the word cloud
    function draw(words: any[]) {
      svg
        .selectAll("text")
        .data(words)
        .enter()
        .append("text")
        .style("font-size", (d) => `${d.size}px`)
        .style("fill", () => getRandomColor()) // Random color function
        .attr("text-anchor", "middle")
        .attr("transform", (d) => `translate(${d.x},${d.y})rotate(${d.rotate})`)
        .text((d) => d.text);
    }

    return () => {
      svg.remove();
    };
  }, [words]);

  // Function to generate a random color
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <div
      id="word-cloud-container"
      className="flex items-center justify-center"
    ></div>
  );
};

export default CircularWordCloud;
