// JavaScript Code
document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('ipoChart').getContext('2d');

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Upcoming', 'New Listed', 'Ongoing'],
            datasets: [{
                data: [15, 25, 2],
                backgroundColor: ['#4CAF50', '#2196F3', '#FF9800']
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom'
                },
                tooltip: {
                    callbacks: {
                        label: function (tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    });
});
