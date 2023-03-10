var options = {
	chart: {
		height: 200,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '50%',
			dataLabels: {
				position: 'top', // top, center, bottom
			},
		}
	},
	series: [{
		name: 'Avg Handle Time',
		data: [5, 7, 3, 6, 8, 4]
	}],
	xaxis: {
		categories: ["Jordan", "Sayed", "Lewis", "Harry", "Zuairia", "Mary"],
		axisBorder: {
			show: false
		},
		tooltip: {
			enabled: true,
		},
		labels: {
			show: true,
			rotate: -45,
			rotateAlways: true,
		},
	},
	yaxis: {
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false,
		},
	},
	grid: {
		padding: {
			left: 10,
			right: 0
		}
	},
	colors: ['#AD8A19', '#262b31', '#434950', '#63686f', '#868a90'],
}
var chart = new ApexCharts(
	document.querySelector("#avg-handle-time"),
	options
);
chart.render();
