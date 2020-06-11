// Global constants
const DEBUG = true;
const DINGUS_PRICE = 14.25;
const WIDGET_PRICE = 9.99;

// Some little helpers
const log = msg => (DEBUG ? console.log(msg) : '');
const select = id => document.getElementById(id);

function plotMap() {
	// Prepare demo data
	// Data is joined to map using value of 'hc-key' property by default.
	// See API docs for 'joinBy' for more info on linking data and map.
	var rankData = [['kg', 1],
	['tg', 2],
	['fj', 3],
	['mv', 4],
	['kw', 5],
	['ga', 6],
	['sd', 7],
	['bt', 8],
	['pg', 9],
	['si', 10],
	['vu', 11],
	['kp', 12],
	['bf', 13],
	['bj', 14],
	['mt', 15],
	['bh', 16],
	['om', 17],
	['ae', 18],
	['mo', 19],
	['lr', 20],
	['bi', 21],
	['lu', 22],
	['mg', 23],
	['kn', 24],
	['bz', 25],
	['ls', 26],
	['mz', 27],
	['ml', 28],
	['cf', 29],
	['ky', 30],
	['gm', 31],
	['bm', 32],
	['ye', 33],
	['ly', 34],
	['sr', 35],
	['dm', 36],
	['bw', 37],
	['ba', 38],
	['cd', 39],
	['vc', 40],
	['dz', 41],
	['tm', 42],
	['kh', 43],
	['iq', 44],
	['af', 45],
	['zm', 46],
	['tj', 47],
	['xk', 48],
	['ht', 49],
	['is', 50],
	['sn', 51],
	['ci', 52],
	['mu', 53],
	['lc', 54],
	['lv', 55],
	['gd', 56],
	['ug', 57],
	['tn', 58],
	['az', 59],
	['tz', 60],
	['ni', 61],
	['mk', 62],
	['sa', 63],
	['cy', 64],
	['ps', 65],
	['am', 66],
	['fi', 67],
	['ge', 68],
	['py', 69],
	['kz', 70],
	['sk', 71],
	['ee', 72],
	['hr', 73],
	['uz', 74],
	['no', 75],
	['bs', 76],
	['gy', 77],
	['bb', 78],
	['md', 79],
	['mn', 80],
	['al', 81],
	['lt', 82],
	['mm', 83],
	['pa', 84],
	['cm', 85],
	['dk', 86],
	['uy', 87],
	['at', 88],
	['ma', 89],
	['zw', 90],
	['bo', 91],
	['hu', 92],
	['cz', 93],
	['pt', 94],
	['et', 95],
	['cr', 96],
	['be', 97],
	['gt', 98],
	['ch', 99],
	['nz', 100],
	['do', 101],
	['rs', 102],
	['sv', 103],
	['cl', 104],
	['by', 105],
	['tt', 106],
	['se', 107],
	['gh', 108],
	['ke', 109],
	['hn', 110],
	['sy', 111],
	['jo', 112],
	['gr', 113],
	['hk', 114],
	['bg', 115],
	['nl', 116],
	['vn', 117],
	['jm', 118],
	['us', 119],
	['lk', 120],
	['eg', 121],
	['ar', 122],
	['za', 123],
	['ec', 124],
	['pe', 125],
	['ie', 126],
	['lb', 127],
	['sg', 128],
	['th', 129],
	['pl', 130],
	['ua', 131],
	['id', 132],
	['ro', 133],
	['bd', 134],
	['ir', 135],
	['es', 136],
	['ng', 137],
	['my', 138],
	['au', 139],
	['co', 140],
	['it', 141],
	['ru', 142],
	['il', 143],
	['br', 144],
	['fr', 145],
	['de', 146],
	['ve', 147],
	['tr', 148],
	['jp', 149],
	['np', 150],
	['pk', 151],
	['tw', 152],
	['gb', 153],
	['mx', 154],
	['ph', 155],
	['kr', 156],
	['ca', 157],
	['cn', 158],
	['in', 159]];

	// Create the chart
	Highcharts.mapChart('myMap', {
		chart: {
			map: 'custom/world-robinson'
		},

		title: {
			text: 'Global US Visa Application Data'
		},

		colorAxis: {
			min: 0,
			visible: false
		},

		series: [{
			data: rankData,
			name: 'Rank',
			states: {
				hover: {
					color: '#BADA55'
				}
			}
		}]
	});

}

function plotSales(sales) {
	// Plot the world map
	plotMap();

	// Make sales data available globally
	data = sales;
}
function plotColumn(continent) {
	let dingusValues = {
		values: [],
		text: "Dinguses"
	}
	let widgetValues = {
		values: [],
		text: "Widgets"
	}
	let sales = data[continent];
	for (const datum of sales) {
		let month = datum['Month'];
		let dingus = datum['Dingus'];
		let widget = datum['Widget'];
		dingusValues['values'].push([month, dingus]);
		widgetValues['values'].push([month, widget]);
	}
	Highcharts.chart('salesPerMonthChart', {

		title: {
		  text: '<b>Monthly Sales</b>'
		},
	  
		yAxis: {
		  title: {
			text: '<b>Number of Units Sold</b>'
		  },
		  softMax: 1.0,
		  softMin: 0.0
		},
	  
		xAxis: {
		  	title: {
				text: '<b>Month</b>'
			},
			type: "datetime",
			labels: {
				formatter : function(){
					return Highcharts.dateFormat('%B', this.value);
				}
			}
		},
		tooltip: {
			formatter: function(){
				return this.y;
			} 
		},
		plotOptions: {
            series: {
                pointStart: Date.UTC(2014,0,1),
                pointInterval: 24 * 3600 * 1000 * 31
            }
        },
		series: [{
		  name: 'Dinguses',
		  data: dingusValues['values'], 
		  color: "#2AA4BF",
		  marker: {
			symbol: 'circle'
		  }	
		}, {
		  name: 'Widgets',
		  data: widgetValues['values'],
		  color: "#D92323",
		  marker: {
			symbol: 'circle'
		  }
		}]
	  });
}

function plotPie(continent) {
	let dingusValues = {
		values: [],
		text: "Dinguses"
	}
	let widgetValues = {
		values: [],
		text: "Widgets"
	}
	let sales = data[continent];
	let dinguses = 0, widgets = 0;
	for (const datum of sales) {
		dinguses += datum['Dingus'];
		widgets += datum['Widget'];
	}
	dingusValues['values'].push(dinguses);
	widgetValues['values'].push(widgets);
	var chart = Highcharts.chart('totalSalesChart', {
		chart: {
		  plotShadow: false,
		  type: 'pie'
		},
		title: {
		  text: '<b>Total Sales</b>'
		},
		tooltip: {
			formatter: function(){
				return this.y;
			} 
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					format: '{point.percentage:.1f} %',
					distance: -50,				
					style: {
						fontSize: "20px",
						textOutline: "none",
						color: "#FFF"
					}
				},
				showInLegend: true,
				startAngle : 90
			}
		},
		series: [{
			data: [{
			  name: 'Dinguses',
			  y: dinguses,
			  color: "#2AA4BF"
			}, {
			  name: 'Widgets',
			  y: widgets,
			  color: "#D92323"
			}]
		}]
	  });
	if (continent === 'ANTARCTICA') {	
		chart.destroy();
		return;
	}
}

function updateScoreCards(continent) {
	let sales = data[continent];
	let dinguses = 0, widgets = 0;
	for (const datum of sales) {
		dinguses += datum['Dingus'];
		widgets += datum['Widget'];
	}
	let revenue = DINGUS_PRICE * dinguses + WIDGET_PRICE * widgets;
	select('dingusSold').innerHTML = dinguses;
	select('widgetSold').innerHTML = widgets;
	select('totalSales').innerHTML = revenue.toFixed(2);
}

async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}

function plotStocks(stocks) {
	let prices = [];
	for (datum of stocks) {
		log(datum);
		prices.push([datum['Date'], datum['Adj Close']]);
	}
	Highcharts.chart('stockChart', {
		chart: {
		  type: 'area' 
		},
		title: {
		  text: 'Dynamic Growth'
		},
		subtitle: {
		  text: 'Stock Prices of D&W Corp. from 2015-Present'
		},
		legend : false,
		xAxis: {
		  title: {
			enabled: true,
            text: '<b>Date</b>'
			},
			type: 'datetime',
			crosshair : true,
			min : 1449619200000,
			max : 1581984000000,
			tickInterval : 3600 * 1000 * 24 * 115,
			labels: {
				formatter: function() {
				  return Highcharts.dateFormat('%m/ %e /%y', this.value);
				}
			}
		},
		yAxis: {
		  title: {
			enabled: true,
			text: "<b>Adj Close Stock Price</b>"
			},
			crosshair: {
                label: {
                    enabled: true,
					format: '{value:.2f}',
					align: "right"
				}
            },
			tickInterval: 20,
			max: 160
		},
		tooltip: {
			formatter: function () {
				return '$' + this.y.toFixed(2);
			}
		},
		series: [{
		  data: prices
		}]
	});
}

function init() {
	salesPromise = loadJSON('./data/sales.json');
	stocksPromise = loadJSON('./data/stocks.json');
	salesPromise.then(function (sales) {
		plotSales(sales);
	});
	stocksPromise.then(function (stocks) {
		plotStocks(stocks);
	});
}


document.addEventListener('DOMContentLoaded', init, false);
