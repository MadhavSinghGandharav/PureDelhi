// Wait for window to fully load before rendering chart
window.addEventListener("load", function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const gradientFill = ctx.createLinearGradient(0, 0, 0, 400);
  gradientFill.addColorStop(0, "rgba(43, 147, 72, 0.3)");
  gradientFill.addColorStop(1, "rgba(43, 147, 72, 0.05)");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "12 am",
        "3 am",
        "6 am",
        "9 am",
        "12 pm",
        "3 pm",
        "6 pm",
        "9 pm",
      ],
      datasets: [
        {
          label: "AQI",
          data: [60, 65, 78, 87, 70, 102, 112, 125],
          borderWidth: 3,
          borderColor: "#2b9348",
          backgroundColor: gradientFill,
          fill: true,
          tension: 0.4,
          pointBackgroundColor: "#2b9348",
          pointBorderColor: "#fff",
          pointRadius: 5,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            font: {
              family: "Raleway",
            },
          },
        },
        x: {
          grid: {
            color: "rgba(0, 0, 0, 0.05)",
          },
          ticks: {
            font: {
              family: "Raleway",
            },
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
          labels: {
            font: {
              family: "Raleway",
              size: 13,
            },
            boxWidth: 15,
            padding: 15,
          },
        },
        tooltip: {
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          titleFont: {
            family: "Raleway",
          },
          bodyFont: {
            family: "Raleway",
          },
          displayColors: false,
          callbacks: {
            label: function (context) {
              return `AQI: ${context.parsed.y}`;
            },
          },
        },
      },
    },
  });
});
