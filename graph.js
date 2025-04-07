export function updateChart(numbers) {
  if (chart) {
    chart.data.labels = numbers;
    chart.data.datasets[0].data = numbers;
    chart.update();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let chart = null;

  document.getElementById("inputButton").addEventListener("click", function() {
    const numbersUnformatted = document.getElementById("numbers").value;
    const numbers = numbersUnformatted.trim().split(/\s+/).map(Number);
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
          backgroundColor: 'rgba(54, 162, 235, 1)'
        }]
      },
      options: {
        plugins: {
              legend: { display: false }
          },
        scales: {
          y: { display: false },
          x: { ticks: { font: "gg sans SemiBold Regular" }
          }
        }
      }
    });
  });
});

