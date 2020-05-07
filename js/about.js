let jobChart = document.querySelector('#jobDoughnutChart').getContext('2d');



// Doughnut Chart for About Page ///

let doughnutChart = new Chart(jobChart, {
  type: 'doughnut',
  data: {
    datasets:[{
      data: [24, 12, 36, (12*6)],
      backgroundColor: [
          'rgb(62, 209, 145)',
          'rgb(209, 62, 200)',
          'rgb(145, 62, 209)',
          'rgb(71, 62, 209)'
      ]
    }],
    labels: [
      'Business Development Consultant',
      'Business Analyst',
      'President / CEO',
      'Vault Cashier'
    ]
  },
  options: {
    cutoutPercentage: 60
  }
});