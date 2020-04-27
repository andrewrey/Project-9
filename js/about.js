let jobChart = document.querySelector('#jobDoughnutChart').getContext('2d');



// Doughnut Chart for About Page ///

let doughnutChart = new Chart(jobChart, {
  type: 'doughnut',
  data: {
    datasets:[{
      data: [1, 3, 5, 6],
      backgroundColor: [
          'rgb(62, 209, 145)',
          'rgb(209, 62, 200)',
          'rgb(145, 62, 209)',
          'rgb(71, 62, 209)'
      ]
    }],
    labels: [
      'pilot',
      'cook',
      'hairdresser',
      'ceo'
    ]
  },
  options: {
    cutoutPercentage: 60
  }
});