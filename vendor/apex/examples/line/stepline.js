var options = {
	chart: {
		height: 450,
		type: 'line',
		zoom: {
			enabled: false
		},
	},
	dataLabels: {
		enabled: false
	},
	colors: ['#AD8A19', '#262b31', '#434950', '#63686f', '#868a90'],
	stroke: {
		width: [3, 3, 3],
		curve: 'straight',
		dashArray: [0, 8, 5]
	},
	series: [
		{
			name: "Session Duration",
			data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
		},
		{
			name: "Page Views",
			data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
		},
		{
			name: 'Total Visits',
			data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
		}
	],
	title: {
		text: 'Page Statistics',
		align: 'center'
	},
	markers: {
		size: 0,
		hover: {
			sizeOffset: 6
		}
	},
	xaxis: {
		categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
			'10 Jan', '11 Jan', '12 Jan'
		],
	},
	tooltip: {
		y: [{
			title: {
				formatter: function (val) {
					return val + " (mins)"
				}
			}
		}, {
			title: {
				formatter: function (val) {
					return val + " per session"
				}
			}
		}, {
			title: {
				formatter: function (val) {
					return val;
				}
			}
		}]
	},
	grid: {
		row: {
			colors: ['#f5f9fe', '#ffffff'], // takes an array which will be repeated on columns
			opacity: 0.5
		},
	},
}

var chart = new ApexCharts(
	document.querySelector("#stepLineChart"),
	options
);

chart.render();