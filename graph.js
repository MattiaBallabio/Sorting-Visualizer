import { insertionSort } from "./algorithms.js";

let chart = null;
let numbers = []

export function updateChart(numbers) {
  if (chart) {
    chart.data.labels = numbers;
    chart.data.datasets[0].data = numbers;
    chart.update();
  }
}

function getNumber() {
    const numbersUnformatted = document.getElementById("numbers").value;
    return numbersUnformatted.trim().split(/\s+/).map(Number);
}

document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("inputButton").addEventListener("click", function() {
    numbers = getNumber();
    console.log(numbers);

    if (chart) {
      chart.destroy();
    }

    const ctx = document.getElementById('chart').getContext('2d');
    chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: numbers,
        datasets: [{
          data: numbers,
          backgroundColor: "rgba(54, 162, 235, 1)"
        }]
      },
      options: {
        plugins: {
              legend: { display: false }
          },
        scales: {
          y: { display: false },
          x: { ticks: { font: "gg sans SemiBold Regular",
                        color: "rgb(255, 255, 255)"
                      },
              grid: { tickColor: "rgb(255, 255, 255)",
                      color: "rgb(255, 255, 255)"
              }
          }
        }
      }
    });
  });
});

document.getElementById("sortButton").addEventListener("click", function() {
  console.log("Start sorting");
  insertionSort(numbers);
});