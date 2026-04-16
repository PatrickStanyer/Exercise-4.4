// Exercise 4.3 — Create responsive SVG container
const svg = d3.select(".responsive-svg-container")
    .append("svg")
      .attr("viewBox", "0 0 1200 1600")
      .style("border", "1px solid black");

// Test rectangle (Exercise 4.3)
svg
  .append("rect")
    .attr("x", 10)
    .attr("y", 10)
    .attr("width", 414)
    .attr("height", 16)
    .attr("fill", "blue");


// Exercise 4.4 — Load CSV data
d3.csv("../data/BrandCount.csv", d => {
  return {
    brand: d.brand,
    count: +d.count   // convert string → number
  };
})
.then(data => {
  console.log(data);                // full dataset
  console.log(data.length);         // number of rows
  console.log(d3.max(data, d => d.count));
  console.log(d3.min(data, d => d.count));
  console.log(d3.extent(data, d => d.count)); // [min, max]

  // Optional: sort by count descending
  data.sort((a, b) => b.count - a.count);

  // Pass data to the bar chart function (created in Exercise 4.5)
  drawBarChart(data);
});


// Temporary placeholder so the script does not crash
function drawBarChart(data) {
  console.log("drawBarChart called with:", data);
}


