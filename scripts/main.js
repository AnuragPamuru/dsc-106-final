// Global constants
const DEBUG = true;
const DINGUS_PRICE = 14.25;
const WIDGET_PRICE = 9.99;

// Some little helpers
const log = msg => (DEBUG ? console.log(msg) : '');
const select = id => document.getElementById(id);

let acceptData = {"af":{"N":1.0,"Y":3.0,"percent":0.75},
					"al":{"N":2.0,"Y":10.0,"percent":0.8333333333},
					"dz":{"N":2.0,"Y":1.0,"percent":0.3333333333},
					"ar":{"N":22.0,"Y":67.0,"percent":0.7528089888},"am":{"N":0.0,"Y":9.0,"percent":1.0},"au":{"N":28.0,"Y":122.0,"percent":0.8133333333},"at":{"N":1.0,"Y":15.0,"percent":0.9375},"az":{"N":0.0,"Y":7.0,"percent":1.0},"bs":{"N":2.0,"Y":8.0,"percent":0.8},"bh":{"N":0.0,"Y":1.0,"percent":1.0},"bd":{"N":22.0,"Y":98.0,"percent":0.8166666667},"bb":{"N":1.0,"Y":10.0,"percent":0.9090909091},"by":{"N":9.0,"Y":36.0,"percent":0.8},"be":{"N":2.0,"Y":27.0,"percent":0.9310344828},"bz":{"N":0.0,"Y":2.0,"percent":1.0},"bj":{"N":0.0,"Y":1.0,"percent":1.0},"bm":{"N":1.0,"Y":1.0,"percent":0.5},"bt":{"N":0.0,"Y":1.0,"percent":1.0},"bo":{"N":4.0,"Y":16.0,"percent":0.8},"ba":{"N":0.0,"Y":3.0,"percent":1.0},"bw":{"N":1.0,"Y":2.0,"percent":0.6666666667},"br":{"N":36.0,"Y":190.0,"percent":0.8407079646},"bg":{"N":8.0,"Y":56.0,"percent":0.875},"bf":{"N":1.0,"Y":0.0,"percent":0.0},"mm":{"N":0.0,"Y":14.0,"percent":1.0},"bi":{"N":1.0,"Y":1.0,"percent":0.5},"kh":{"N":2.0,"Y":2.0,"percent":0.5},"cm":{"N":1.0,"Y":13.0,"percent":0.9285714286},"ca":{"N":229.0,"Y":1404.0,"percent":0.8597672994},"ky":{"N":0.0,"Y":2.0,"percent":1.0},"cf":{"N":0.0,"Y":2.0,"percent":1.0},"cl":{"N":10.0,"Y":29.0,"percent":0.7435897436},"cn":{"N":266.0,"Y":1861.0,"percent":0.8749412318},"co":{"N":44.0,"Y":145.0,"percent":0.7671957672},"cr":{"N":1.0,"Y":27.0,"percent":0.9642857143},"hr":{"N":2.0,"Y":8.0,"percent":0.8},"cy":{"N":0.0,"Y":9.0,"percent":1.0},"cz":{"N":2.0,"Y":19.0,"percent":0.9047619048},"cd":{"N":1.0,"Y":2.0,"percent":0.6666666667},"dk":{"N":5.0,"Y":9.0,"percent":0.6428571429},"dm":{"N":1.0,"Y":2.0,"percent":0.6666666667},"do":{"N":5.0,"Y":30.0,"percent":0.8571428571},"ec":{"N":22.0,"Y":69.0,"percent":0.7582417582},"eg":{"N":12.0,"Y":74.0,"percent":0.8604651163},"sv":{"N":11.0,"Y":26.0,"percent":0.7027027027},"ee":{"N":2.0,"Y":8.0,"percent":0.8},"et":{"N":7.0,"Y":19.0,"percent":0.7307692308},"fj":{"N":0.0,"Y":1.0,"percent":1.0},"fi":{"N":1.0,"Y":8.0,"percent":0.8888888889},"fr":{"N":36.0,"Y":219.0,"percent":0.8588235294},"ga":{"N":0.0,"Y":1.0,"percent":1.0},"gm":{"N":0.0,"Y":2.0,"percent":1.0},"ge":{"N":0.0,"Y":9.0,"percent":1.0},"de":{"N":36.0,"Y":224.0,"percent":0.8615384615},"gh":{"N":4.0,"Y":46.0,"percent":0.92},"gr":{"N":7.0,"Y":52.0,"percent":0.8813559322},"gd":{"N":3.0,"Y":4.0,"percent":0.5714285714},"gt":{"N":12.0,"Y":20.0,"percent":0.625},"gy":{"N":3.0,"Y":8.0,"percent":0.7272727273},"ht":{"N":0.0,"Y":4.0,"percent":1.0},"hn":{"N":11.0,"Y":41.0,"percent":0.7884615385},"hk":{"N":4.0,"Y":56.0,"percent":0.9333333333},"hu":{"N":0.0,"Y":20.0,"percent":1.0},"is":{"N":1.0,"Y":4.0,"percent":0.8},"in":{"N":3566.0,"Y":19650.0,"percent":0.8463990351},"id":{"N":22.0,"Y":92.0,"percent":0.8070175439},"ir":{"N":19.0,"Y":104.0,"percent":0.8455284553},"iq":{"N":1.0,"Y":3.0,"percent":0.75},"ie":{"N":13.0,"Y":82.0,"percent":0.8631578947},"il":{"N":31.0,"Y":185.0,"percent":0.8564814815},"it":{"N":43.0,"Y":154.0,"percent":0.7817258883},"ci":{"N":1.0,"Y":5.0,"percent":0.8333333333},"jm":{"N":20.0,"Y":49.0,"percent":0.7101449275},"jp":{"N":60.0,"Y":250.0,"percent":0.8064516129},"jo":{"N":6.0,"Y":52.0,"percent":0.8965517241},"kz":{"N":0.0,"Y":9.0,"percent":1.0},"ke":{"N":6.0,"Y":44.0,"percent":0.88},"xk":{"N":1.0,"Y":3.0,"percent":0.75},"kw":{"N":1.0,"Y":0.0,"percent":0.0},"kg":{"N":0.0,"Y":1.0,"percent":1.0},"lv":{"N":0.0,"Y":7.0,"percent":1.0},"lb":{"N":18.0,"Y":78.0,"percent":0.8125},"ls":{"N":1.0,"Y":1.0,"percent":0.5},"lr":{"N":0.0,"Y":1.0,"percent":1.0},"ly":{"N":0.0,"Y":3.0,"percent":1.0},"lt":{"N":3.0,"Y":9.0,"percent":0.75},"lu":{"N":0.0,"Y":2.0,"percent":1.0},"mo":{"N":0.0,"Y":1.0,"percent":1.0},"mk":{"N":3.0,"Y":5.0,"percent":0.625},"mg":{"N":0.0,"Y":2.0,"percent":1.0},"my":{"N":17.0,"Y":118.0,"percent":0.8740740741},"mv":{"N":0.0,"Y":1.0,"percent":1.0},"ml":{"N":1.0,"Y":1.0,"percent":0.5},"mt":{"N":0.0,"Y":1.0,"percent":1.0},"mu":{"N":2.0,"Y":4.0,"percent":0.6666666667},"mx":{"N":234.0,"Y":600.0,"percent":0.7194244604},"md":{"N":5.0,"Y":7.0,"percent":0.5833333333},"mn":{"N":5.0,"Y":7.0,"percent":0.5833333333},"ma":{"N":2.0,"Y":14.0,"percent":0.875},"mz":{"N":0.0,"Y":2.0,"percent":1.0},"np":{"N":51.0,"Y":274.0,"percent":0.8430769231},"nl":{"N":11.0,"Y":53.0,"percent":0.828125},"nz":{"N":6.0,"Y":29.0,"percent":0.8285714286},"ni":{"N":1.0,"Y":7.0,"percent":0.875},"ng":{"N":11.0,"Y":117.0,"percent":0.9140625},"kp":{"N":0.0,"Y":1.0,"percent":1.0},"no":{"N":0.0,"Y":10.0,"percent":1.0},"om":{"N":0.0,"Y":1.0,"percent":1.0},"pk":{"N":69.0,"Y":372.0,"percent":0.843537415},"ps":{"N":1.0,"Y":8.0,"percent":0.8888888889},"pa":{"N":4.0,"Y":10.0,"percent":0.7142857143},"pg":{"N":0.0,"Y":1.0,"percent":1.0},"py":{"N":3.0,"Y":6.0,"percent":0.6666666667},"pe":{"N":22.0,"Y":71.0,"percent":0.7634408602},"ph":{"N":270.0,"Y":786.0,"percent":0.7443181818},"pl":{"N":32.0,"Y":78.0,"percent":0.7090909091},"pt":{"N":3.0,"Y":22.0,"percent":0.88},"ro":{"N":18.0,"Y":102.0,"percent":0.85},"ru":{"N":37.0,"Y":169.0,"percent":0.8203883495},"sa":{"N":1.0,"Y":7.0,"percent":0.875},"sn":{"N":2.0,"Y":3.0,"percent":0.6},"rs":{"N":9.0,"Y":26.0,"percent":0.7428571429},"sg":{"N":11.0,"Y":87.0,"percent":0.887755102},"sk":{"N":1.0,"Y":9.0,"percent":0.9},"si":{"N":0.0,"Y":1.0,"percent":1.0},"za":{"N":13.0,"Y":78.0,"percent":0.8571428571},"kr":{"N":438.0,"Y":1168.0,"percent":0.7272727273},"es":{"N":17.0,"Y":109.0,"percent":0.8650793651},"lk":{"N":15.0,"Y":65.0,"percent":0.8125},"kn":{"N":1.0,"Y":1.0,"percent":0.5},"lc":{"N":1.0,"Y":5.0,"percent":0.8333333333},"vc":{"N":0.0,"Y":3.0,"percent":1.0},"sd":{"N":0.0,"Y":1.0,"percent":1.0},"sr":{"N":2.0,"Y":1.0,"percent":0.3333333333},"se":{"N":2.0,"Y":47.0,"percent":0.9591836735},"ch":{"N":6.0,"Y":28.0,"percent":0.8235294118},"sy":{"N":5.0,"Y":52.0,"percent":0.9122807018},"tw":{"N":72.0,"Y":401.0,"percent":0.8477801268},"tj":{"N":2.0,"Y":2.0,"percent":0.5},"tz":{"N":2.0,"Y":6.0,"percent":0.75},"th":{"N":23.0,"Y":79.0,"percent":0.7745098039},"tg":{"N":0.0,"Y":1.0,"percent":1.0},"tt":{"N":7.0,"Y":40.0,"percent":0.8510638298},"tn":{"N":0.0,"Y":7.0,"percent":1.0},"tr":{"N":33.0,"Y":240.0,"percent":0.8791208791},"tm":{"N":0.0,"Y":3.0,"percent":1.0},"ug":{"N":2.0,"Y":5.0,"percent":0.7142857143},"ua":{"N":21.0,"Y":91.0,"percent":0.8125},"ae":{"N":0.0,"Y":1.0,"percent":1.0},"gb":{"N":92.0,"Y":444.0,"percent":0.828358209},"us":{"N":21.0,"Y":57.0,"percent":0.7307692308},"uy":{"N":0.0,"Y":14.0,"percent":1.0},"uz":{"N":2.0,"Y":8.0,"percent":0.8},"vu":{"N":0.0,"Y":1.0,"percent":1.0},"ve":{"N":43.0,"Y":219.0,"percent":0.8358778626},"vn":{"N":9.0,"Y":55.0,"percent":0.859375},"ye":{"N":0.0,"Y":3.0,"percent":1.0},"zm":{"N":1.0,"Y":3.0,"percent":0.75},"zw":{"N":1.0,"Y":16.0,"percent":0.9411764706}
				};

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
					color: 'black'
				}, 
				select: {
					color: 'yellow'
				}
			},
			allowPointSelect: true
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

function updateScoreCards(country) {
	select('acceptedApps').innerHTML = acceptData[country]["Y"];
	select('deniedApps').innerHTML = acceptData[country]["N"];
	select('percentApps').innerHTML = (Number(acceptData[country]["percent"]) * 100).toFixed(2) + "%";
}

async function loadJSON(path) {
	let response = await fetch(path);
	let dataset = await response.json(); // Now available in global scope
	return dataset;
}

function plotStats() {
	Highcharts.chart('jobChart', {
		title: {
			text: 'Applicants Jobs'
		},
		chart: {
			type: 'pie'
		},
		tooltip: {
			formatter: function(){
				return ((Number(this.y))
				.toFixed(1)) + "%";
			} 
		},
		series: [{
			name: "Jobs",
			data: [{"name":"IT","y":42.9141509678},{"name":"Advanced Mfg","y":15.1719312793},{"name":"Other Economic Sector","y":11.5622813609},{"name":"Finance","y":6.9575807831},{"name":"Educational Services","y":6.4393252313},{"name":"Health Care","y":5.1929206292},{"name":"Retail","y":3.3168355316},{"name":"Aerospace","y":3.0447513669},{"name":"Hospitality","y":1.2956388795},{"name":"Automotive","y":0.9095384934},{"name":"Energy","y":0.8525303827},{"name":"Construction","y":0.8136612163},{"name":"Transportation","y":0.6789147729},{"name":"Biotechnology","y":0.355005053},{"name":"Agribusiness","y":0.3213184421},{"name":"Geospatial","y":0.1269726102},{"name":"Homeland Security","y":0.0466429997}]
		}
		]
	});

	Highcharts.chart('typeChart', {
		title: {
			text: 'Visa Types'
		},
		chart: {
			type: 'pie'
		},
		tooltip: {
			formatter: function(){
				return ((Number(this.y) * 100)
				.toFixed(1)) + "%";
			} 
		},
		series: [{
			name: "Visa Types",
			data: [{"name":"H-1B","y":0.85157161},{"name":"L-1","y":0.0362001503},{"name":"F-1","y":0.0284781426},{"name":"Parolee","y":0.0195382343},{"name":"Other","y":0.06421186286958092}]
		}
		]
	});

	Highcharts.chart('acceptChart', {
		title: {
			text: 'Visa Accept Rate'
		},
		chart: {
			type: 'bar'
		},
		tooltip: {
			formatter: function(){
				return ((Number(this.y))
				.toFixed(1)) + "%";
			} 
		},
		xAxis: {
			categories: ['H-1B', 'L-1', 'F-1', 'Parolee', 'Other'],
			title: {
				text: "Visa Type"
			}
		},
		yAxis: {
			title: {
				text: "Acceptance Rate (%)"
			}
		},
		series: [{
			name: "Visa Accept Rate",
			data: [73.0664240218,84.9526823479,86.2562634216,67.191283293,84.8806366048]
		}
		]
	});
}

function init() {
	plotStats();
	salesPromise = loadJSON('./data/sales.json');
	salesPromise.then(function (sales) {
		plotSales(sales);
	});
}


document.addEventListener('DOMContentLoaded', init, false);
