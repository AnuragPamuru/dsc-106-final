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
let typeData = {"af":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},
				"al":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":1.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":4.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"dz":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":1.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ar":{"Advanced Mfg":10.0,"Aerospace":1.0,"Agribusiness":1.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":21.0,"Energy":2.0,"Finance":10.0,"Geospatial":0.0,"Health Care":8.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":15.0,"Other Economic Sector":16.0,"Retail":0.0,"Transportation":2.0},"am":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"au":{"Advanced Mfg":23.0,"Aerospace":3.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":2.0,"Construction":2.0,"Educational Services":16.0,"Energy":2.0,"Finance":12.0,"Geospatial":0.0,"Health Care":5.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":55.0,"Other Economic Sector":22.0,"Retail":6.0,"Transportation":1.0},"at":{"Advanced Mfg":3.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":5.0,"Energy":1.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":4.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"az":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"bs":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":3.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"bh":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"bd":{"Advanced Mfg":30.0,"Aerospace":5.0,"Agribusiness":0.0,"Automotive":3.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":8.0,"Energy":0.0,"Finance":8.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":3.0,"IT":41.0,"Other Economic Sector":11.0,"Retail":8.0,"Transportation":0.0},"bb":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":2.0,"Energy":1.0,"Finance":0.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"by":{"Advanced Mfg":3.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":6.0,"Energy":0.0,"Finance":3.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":26.0,"Other Economic Sector":4.0,"Retail":1.0,"Transportation":0.0},"be":{"Advanced Mfg":7.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":8.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":4.0,"Other Economic Sector":4.0,"Retail":2.0,"Transportation":0.0},"bz":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"bj":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"bm":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"bt":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"bo":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":1.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":4.0,"Educational Services":3.0,"Energy":1.0,"Finance":1.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":2.0,"Other Economic Sector":4.0,"Retail":0.0,"Transportation":0.0},"ba":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":1.0},"bw":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"br":{"Advanced Mfg":34.0,"Aerospace":15.0,"Agribusiness":2.0,"Automotive":6.0,"Biotechnology":1.0,"Construction":5.0,"Educational Services":30.0,"Energy":5.0,"Finance":29.0,"Geospatial":0.0,"Health Care":7.0,"Homeland Security":0.0,"Hospitality":4.0,"IT":44.0,"Other Economic Sector":36.0,"Retail":5.0,"Transportation":3.0},"bg":{"Advanced Mfg":5.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":8.0,"Energy":0.0,"Finance":10.0,"Geospatial":1.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":15.0,"Other Economic Sector":19.0,"Retail":0.0,"Transportation":0.0},"bf":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"mm":{"Advanced Mfg":1.0,"Aerospace":3.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":7.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":1.0},"bi":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"kh":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":2.0,"IT":2.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"cm":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":4.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"ca":{"Advanced Mfg":354.0,"Aerospace":88.0,"Agribusiness":3.0,"Automotive":41.0,"Biotechnology":20.0,"Construction":19.0,"Educational Services":180.0,"Energy":41.0,"Finance":118.0,"Geospatial":5.0,"Health Care":116.0,"Homeland Security":1.0,"Hospitality":5.0,"IT":374.0,"Other Economic Sector":191.0,"Retail":68.0,"Transportation":9.0},"ky":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":0.0},"cf":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"cl":{"Advanced Mfg":4.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":11.0,"Energy":1.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":5.0,"Other Economic Sector":7.0,"Retail":4.0,"Transportation":2.0},"cn":{"Advanced Mfg":528.0,"Aerospace":74.0,"Agribusiness":11.0,"Automotive":13.0,"Biotechnology":16.0,"Construction":3.0,"Educational Services":216.0,"Energy":25.0,"Finance":293.0,"Geospatial":16.0,"Health Care":31.0,"Homeland Security":2.0,"Hospitality":28.0,"IT":476.0,"Other Economic Sector":296.0,"Retail":85.0,"Transportation":14.0},"co":{"Advanced Mfg":25.0,"Aerospace":17.0,"Agribusiness":2.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":3.0,"Educational Services":38.0,"Energy":7.0,"Finance":16.0,"Geospatial":0.0,"Health Care":22.0,"Homeland Security":1.0,"Hospitality":1.0,"IT":12.0,"Other Economic Sector":36.0,"Retail":3.0,"Transportation":5.0},"cr":{"Advanced Mfg":9.0,"Aerospace":0.0,"Agribusiness":1.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":4.0,"Energy":0.0,"Finance":4.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":3.0,"Retail":0.0,"Transportation":0.0},"hr":{"Advanced Mfg":1.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":4.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"cy":{"Advanced Mfg":2.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":4.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":0.0},"cz":{"Advanced Mfg":3.0,"Aerospace":0.0,"Agribusiness":1.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":8.0,"Other Economic Sector":5.0,"Retail":0.0,"Transportation":0.0},"cd":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":1.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"dk":{"Advanced Mfg":3.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":4.0,"Other Economic Sector":2.0,"Retail":1.0,"Transportation":1.0},"dm":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":3.0,"Retail":0.0,"Transportation":0.0},"do":{"Advanced Mfg":4.0,"Aerospace":5.0,"Agribusiness":1.0,"Automotive":2.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":11.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":7.0,"Retail":0.0,"Transportation":1.0},"ec":{"Advanced Mfg":12.0,"Aerospace":0.0,"Agribusiness":3.0,"Automotive":3.0,"Biotechnology":0.0,"Construction":17.0,"Educational Services":2.0,"Energy":1.0,"Finance":3.0,"Geospatial":0.0,"Health Care":6.0,"Homeland Security":0.0,"Hospitality":19.0,"IT":5.0,"Other Economic Sector":17.0,"Retail":1.0,"Transportation":2.0},"eg":{"Advanced Mfg":9.0,"Aerospace":3.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":18.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":13.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":16.0,"Other Economic Sector":6.0,"Retail":17.0,"Transportation":0.0},"sv":{"Advanced Mfg":6.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":12.0,"Educational Services":2.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":3.0,"IT":3.0,"Other Economic Sector":4.0,"Retail":1.0,"Transportation":1.0},"ee":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":3.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":4.0,"Retail":0.0,"Transportation":0.0},"et":{"Advanced Mfg":1.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":3.0,"Energy":3.0,"Finance":0.0,"Geospatial":0.0,"Health Care":4.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":10.0,"Other Economic Sector":4.0,"Retail":0.0,"Transportation":0.0},"fj":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":0.0},"fi":{"Advanced Mfg":5.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":1.0},"fr":{"Advanced Mfg":42.0,"Aerospace":8.0,"Agribusiness":0.0,"Automotive":4.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":33.0,"Energy":4.0,"Finance":41.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":10.0,"IT":64.0,"Other Economic Sector":35.0,"Retail":7.0,"Transportation":3.0},"ga":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":0.0},"gm":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ge":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":3.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"de":{"Advanced Mfg":55.0,"Aerospace":10.0,"Agribusiness":0.0,"Automotive":11.0,"Biotechnology":1.0,"Construction":4.0,"Educational Services":59.0,"Energy":5.0,"Finance":13.0,"Geospatial":0.0,"Health Care":14.0,"Homeland Security":0.0,"Hospitality":3.0,"IT":47.0,"Other Economic Sector":29.0,"Retail":5.0,"Transportation":4.0},"gh":{"Advanced Mfg":4.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":9.0,"Energy":1.0,"Finance":5.0,"Geospatial":0.0,"Health Care":12.0,"Homeland Security":1.0,"Hospitality":0.0,"IT":9.0,"Other Economic Sector":5.0,"Retail":1.0,"Transportation":0.0},"gr":{"Advanced Mfg":7.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":14.0,"Energy":0.0,"Finance":4.0,"Geospatial":0.0,"Health Care":7.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":12.0,"Other Economic Sector":9.0,"Retail":1.0,"Transportation":2.0},"gd":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":1.0,"Transportation":0.0},"gt":{"Advanced Mfg":3.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":4.0,"Educational Services":2.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":8.0,"IT":3.0,"Other Economic Sector":7.0,"Retail":0.0,"Transportation":0.0},"gy":{"Advanced Mfg":2.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":3.0,"Retail":1.0,"Transportation":0.0},"ht":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"hn":{"Advanced Mfg":4.0,"Aerospace":4.0,"Agribusiness":8.0,"Automotive":0.0,"Biotechnology":2.0,"Construction":8.0,"Educational Services":2.0,"Energy":0.0,"Finance":4.0,"Geospatial":0.0,"Health Care":5.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":0.0,"Other Economic Sector":9.0,"Retail":1.0,"Transportation":4.0},"hk":{"Advanced Mfg":12.0,"Aerospace":5.0,"Agribusiness":2.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":6.0,"Energy":1.0,"Finance":8.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":11.0,"Other Economic Sector":11.0,"Retail":1.0,"Transportation":0.0},"hu":{"Advanced Mfg":1.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":3.0,"Energy":0.0,"Finance":4.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":2.0,"Other Economic Sector":5.0,"Retail":1.0,"Transportation":0.0},"is":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"in":{"Advanced Mfg":3168.0,"Aerospace":520.0,"Agribusiness":3.0,"Automotive":99.0,"Biotechnology":53.0,"Construction":59.0,"Educational Services":367.0,"Energy":128.0,"Finance":1473.0,"Geospatial":15.0,"Health Care":725.0,"Homeland Security":6.0,"Hospitality":98.0,"IT":13729.0,"Other Economic Sector":1965.0,"Retail":707.0,"Transportation":101.0},"id":{"Advanced Mfg":28.0,"Aerospace":5.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":1.0,"Construction":1.0,"Educational Services":8.0,"Energy":3.0,"Finance":6.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":1.0,"Hospitality":1.0,"IT":29.0,"Other Economic Sector":19.0,"Retail":6.0,"Transportation":1.0},"ir":{"Advanced Mfg":18.0,"Aerospace":11.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":27.0,"Energy":7.0,"Finance":3.0,"Geospatial":0.0,"Health Care":10.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":26.0,"Other Economic Sector":15.0,"Retail":3.0,"Transportation":0.0},"iq":{"Advanced Mfg":0.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ie":{"Advanced Mfg":17.0,"Aerospace":7.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":2.0,"Construction":3.0,"Educational Services":11.0,"Energy":0.0,"Finance":16.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":22.0,"Other Economic Sector":12.0,"Retail":2.0,"Transportation":0.0},"il":{"Advanced Mfg":44.0,"Aerospace":8.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":1.0,"Construction":5.0,"Educational Services":18.0,"Energy":1.0,"Finance":14.0,"Geospatial":0.0,"Health Care":7.0,"Homeland Security":0.0,"Hospitality":3.0,"IT":72.0,"Other Economic Sector":31.0,"Retail":11.0,"Transportation":0.0},"it":{"Advanced Mfg":44.0,"Aerospace":2.0,"Agribusiness":1.0,"Automotive":4.0,"Biotechnology":2.0,"Construction":1.0,"Educational Services":38.0,"Energy":2.0,"Finance":13.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":13.0,"IT":24.0,"Other Economic Sector":36.0,"Retail":9.0,"Transportation":6.0},"ci":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"jm":{"Advanced Mfg":2.0,"Aerospace":1.0,"Agribusiness":2.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":28.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":11.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":6.0,"Other Economic Sector":16.0,"Retail":0.0,"Transportation":1.0},"jp":{"Advanced Mfg":44.0,"Aerospace":4.0,"Agribusiness":0.0,"Automotive":12.0,"Biotechnology":2.0,"Construction":3.0,"Educational Services":43.0,"Energy":2.0,"Finance":24.0,"Geospatial":1.0,"Health Care":16.0,"Homeland Security":0.0,"Hospitality":20.0,"IT":34.0,"Other Economic Sector":96.0,"Retail":5.0,"Transportation":4.0},"jo":{"Advanced Mfg":15.0,"Aerospace":3.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":7.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":15.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":8.0,"Other Economic Sector":3.0,"Retail":3.0,"Transportation":0.0},"kz":{"Advanced Mfg":1.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":1.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ke":{"Advanced Mfg":4.0,"Aerospace":3.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":18.0,"Energy":0.0,"Finance":5.0,"Geospatial":0.0,"Health Care":9.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":8.0,"Retail":0.0,"Transportation":0.0},"xk":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"kw":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"kg":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"lv":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":5.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":0.0},"lb":{"Advanced Mfg":21.0,"Aerospace":3.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":1.0,"Construction":1.0,"Educational Services":12.0,"Energy":0.0,"Finance":6.0,"Geospatial":0.0,"Health Care":26.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":11.0,"Other Economic Sector":10.0,"Retail":2.0,"Transportation":0.0},"ls":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"lr":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ly":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"lt":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":3.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"lu":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"mo":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"mk":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":4.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"mg":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":1.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"my":{"Advanced Mfg":33.0,"Aerospace":8.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":3.0,"Construction":3.0,"Educational Services":7.0,"Energy":3.0,"Finance":12.0,"Geospatial":1.0,"Health Care":5.0,"Homeland Security":0.0,"Hospitality":2.0,"IT":25.0,"Other Economic Sector":27.0,"Retail":3.0,"Transportation":1.0},"mv":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ml":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"mt":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"mu":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":3.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":0.0},"mx":{"Advanced Mfg":164.0,"Aerospace":39.0,"Agribusiness":29.0,"Automotive":32.0,"Biotechnology":3.0,"Construction":42.0,"Educational Services":99.0,"Energy":14.0,"Finance":37.0,"Geospatial":2.0,"Health Care":16.0,"Homeland Security":0.0,"Hospitality":97.0,"IT":80.0,"Other Economic Sector":148.0,"Retail":24.0,"Transportation":8.0},"md":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":1.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":1.0,"Finance":5.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"mn":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":4.0,"Retail":1.0,"Transportation":0.0},"ma":{"Advanced Mfg":2.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":7.0,"Other Economic Sector":1.0,"Retail":1.0,"Transportation":1.0},"mz":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"np":{"Advanced Mfg":24.0,"Aerospace":15.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":2.0,"Construction":1.0,"Educational Services":18.0,"Energy":3.0,"Finance":14.0,"Geospatial":0.0,"Health Care":46.0,"Homeland Security":0.0,"Hospitality":8.0,"IT":137.0,"Other Economic Sector":36.0,"Retail":16.0,"Transportation":3.0},"nl":{"Advanced Mfg":12.0,"Aerospace":2.0,"Agribusiness":1.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":10.0,"Energy":2.0,"Finance":6.0,"Geospatial":1.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":13.0,"Other Economic Sector":10.0,"Retail":2.0,"Transportation":2.0},"nz":{"Advanced Mfg":7.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":6.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":13.0,"Other Economic Sector":3.0,"Retail":2.0,"Transportation":0.0},"ni":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":1.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":3.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ng":{"Advanced Mfg":16.0,"Aerospace":8.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":1.0,"Construction":1.0,"Educational Services":16.0,"Energy":6.0,"Finance":9.0,"Geospatial":0.0,"Health Care":30.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":21.0,"Other Economic Sector":12.0,"Retail":7.0,"Transportation":1.0},"kp":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"no":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":3.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"om":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"pk":{"Advanced Mfg":40.0,"Aerospace":20.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":1.0,"Construction":4.0,"Educational Services":35.0,"Energy":2.0,"Finance":22.0,"Geospatial":0.0,"Health Care":101.0,"Homeland Security":1.0,"Hospitality":5.0,"IT":150.0,"Other Economic Sector":37.0,"Retail":19.0,"Transportation":2.0},"ps":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":2.0,"Retail":1.0,"Transportation":0.0},"pa":{"Advanced Mfg":4.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":3.0,"Retail":0.0,"Transportation":0.0},"pg":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"py":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":3.0,"Retail":1.0,"Transportation":0.0},"pe":{"Advanced Mfg":13.0,"Aerospace":2.0,"Agribusiness":1.0,"Automotive":2.0,"Biotechnology":1.0,"Construction":1.0,"Educational Services":24.0,"Energy":0.0,"Finance":7.0,"Geospatial":0.0,"Health Care":19.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":5.0,"Other Economic Sector":12.0,"Retail":3.0,"Transportation":2.0},"ph":{"Advanced Mfg":56.0,"Aerospace":58.0,"Agribusiness":1.0,"Automotive":3.0,"Biotechnology":2.0,"Construction":23.0,"Educational Services":261.0,"Energy":2.0,"Finance":41.0,"Geospatial":0.0,"Health Care":346.0,"Homeland Security":0.0,"Hospitality":10.0,"IT":86.0,"Other Economic Sector":139.0,"Retail":25.0,"Transportation":3.0},"pl":{"Advanced Mfg":18.0,"Aerospace":3.0,"Agribusiness":1.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":13.0,"Educational Services":12.0,"Energy":0.0,"Finance":11.0,"Geospatial":0.0,"Health Care":6.0,"Homeland Security":0.0,"Hospitality":2.0,"IT":19.0,"Other Economic Sector":15.0,"Retail":7.0,"Transportation":2.0},"pt":{"Advanced Mfg":6.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":8.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":2.0,"IT":1.0,"Other Economic Sector":6.0,"Retail":1.0,"Transportation":0.0},"ro":{"Advanced Mfg":11.0,"Aerospace":9.0,"Agribusiness":1.0,"Automotive":1.0,"Biotechnology":1.0,"Construction":4.0,"Educational Services":29.0,"Energy":0.0,"Finance":4.0,"Geospatial":0.0,"Health Care":20.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":23.0,"Other Economic Sector":16.0,"Retail":1.0,"Transportation":0.0},"ru":{"Advanced Mfg":38.0,"Aerospace":5.0,"Agribusiness":1.0,"Automotive":1.0,"Biotechnology":1.0,"Construction":3.0,"Educational Services":23.0,"Energy":3.0,"Finance":23.0,"Geospatial":0.0,"Health Care":5.0,"Homeland Security":1.0,"Hospitality":3.0,"IT":74.0,"Other Economic Sector":17.0,"Retail":7.0,"Transportation":1.0},"sa":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":4.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":1.0},"sn":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"rs":{"Advanced Mfg":6.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":7.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":9.0,"Other Economic Sector":9.0,"Retail":0.0,"Transportation":0.0},"sg":{"Advanced Mfg":36.0,"Aerospace":3.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":2.0,"Educational Services":5.0,"Energy":1.0,"Finance":14.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":16.0,"Other Economic Sector":15.0,"Retail":3.0,"Transportation":1.0},"sk":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":1.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":4.0,"Retail":0.0,"Transportation":0.0},"si":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"za":{"Advanced Mfg":11.0,"Aerospace":5.0,"Agribusiness":0.0,"Automotive":4.0,"Biotechnology":1.0,"Construction":1.0,"Educational Services":11.0,"Energy":3.0,"Finance":11.0,"Geospatial":0.0,"Health Care":5.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":16.0,"Other Economic Sector":14.0,"Retail":9.0,"Transportation":0.0},"kr":{"Advanced Mfg":278.0,"Aerospace":33.0,"Agribusiness":31.0,"Automotive":51.0,"Biotechnology":2.0,"Construction":22.0,"Educational Services":218.0,"Energy":4.0,"Finance":82.0,"Geospatial":1.0,"Health Care":87.0,"Homeland Security":3.0,"Hospitality":81.0,"IT":137.0,"Other Economic Sector":454.0,"Retail":91.0,"Transportation":31.0},"es":{"Advanced Mfg":15.0,"Aerospace":8.0,"Agribusiness":1.0,"Automotive":4.0,"Biotechnology":1.0,"Construction":1.0,"Educational Services":39.0,"Energy":4.0,"Finance":9.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":18.0,"Other Economic Sector":16.0,"Retail":6.0,"Transportation":1.0},"lk":{"Advanced Mfg":16.0,"Aerospace":7.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":6.0,"Energy":3.0,"Finance":4.0,"Geospatial":0.0,"Health Care":7.0,"Homeland Security":0.0,"Hospitality":2.0,"IT":24.0,"Other Economic Sector":8.0,"Retail":3.0,"Transportation":0.0},"kn":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"lc":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":3.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"vc":{"Advanced Mfg":2.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"sd":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"sr":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"se":{"Advanced Mfg":9.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":7.0,"Energy":0.0,"Finance":8.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":13.0,"Other Economic Sector":7.0,"Retail":1.0,"Transportation":1.0},"ch":{"Advanced Mfg":5.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":1.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":6.0,"Energy":1.0,"Finance":4.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":3.0,"IT":4.0,"Other Economic Sector":5.0,"Retail":1.0,"Transportation":0.0},"sy":{"Advanced Mfg":1.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":11.0,"Energy":1.0,"Finance":0.0,"Geospatial":0.0,"Health Care":36.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":2.0,"Other Economic Sector":2.0,"Retail":1.0,"Transportation":0.0},"tw":{"Advanced Mfg":155.0,"Aerospace":9.0,"Agribusiness":1.0,"Automotive":2.0,"Biotechnology":1.0,"Construction":0.0,"Educational Services":63.0,"Energy":1.0,"Finance":22.0,"Geospatial":0.0,"Health Care":15.0,"Homeland Security":0.0,"Hospitality":5.0,"IT":62.0,"Other Economic Sector":119.0,"Retail":12.0,"Transportation":6.0},"tj":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":1.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"tz":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":2.0,"Retail":1.0,"Transportation":0.0},"th":{"Advanced Mfg":13.0,"Aerospace":7.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":6.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":11.0,"Homeland Security":0.0,"Hospitality":21.0,"IT":17.0,"Other Economic Sector":18.0,"Retail":5.0,"Transportation":1.0},"tg":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"tt":{"Advanced Mfg":3.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":2.0,"Educational Services":5.0,"Energy":2.0,"Finance":6.0,"Geospatial":0.0,"Health Care":7.0,"Homeland Security":0.0,"Hospitality":2.0,"IT":4.0,"Other Economic Sector":13.0,"Retail":1.0,"Transportation":0.0},"tn":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":2.0,"Geospatial":2.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":1.0},"tr":{"Advanced Mfg":47.0,"Aerospace":18.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":1.0,"Construction":5.0,"Educational Services":86.0,"Energy":2.0,"Finance":19.0,"Geospatial":1.0,"Health Care":11.0,"Homeland Security":0.0,"Hospitality":6.0,"IT":45.0,"Other Economic Sector":24.0,"Retail":7.0,"Transportation":1.0},"tm":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":2.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ug":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":3.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"ua":{"Advanced Mfg":10.0,"Aerospace":5.0,"Agribusiness":3.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":3.0,"Educational Services":5.0,"Energy":0.0,"Finance":7.0,"Geospatial":0.0,"Health Care":7.0,"Homeland Security":0.0,"Hospitality":1.0,"IT":66.0,"Other Economic Sector":5.0,"Retail":0.0,"Transportation":0.0},"ae":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":1.0,"Transportation":0.0},"gb":{"Advanced Mfg":109.0,"Aerospace":28.0,"Agribusiness":2.0,"Automotive":12.0,"Biotechnology":3.0,"Construction":4.0,"Educational Services":55.0,"Energy":10.0,"Finance":67.0,"Geospatial":1.0,"Health Care":14.0,"Homeland Security":1.0,"Hospitality":5.0,"IT":86.0,"Other Economic Sector":99.0,"Retail":30.0,"Transportation":10.0},"us":{"Advanced Mfg":5.0,"Aerospace":2.0,"Agribusiness":0.0,"Automotive":2.0,"Biotechnology":0.0,"Construction":1.0,"Educational Services":8.0,"Energy":1.0,"Finance":7.0,"Geospatial":0.0,"Health Care":6.0,"Homeland Security":0.0,"Hospitality":4.0,"IT":23.0,"Other Economic Sector":14.0,"Retail":3.0,"Transportation":2.0},"uy":{"Advanced Mfg":3.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":3.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":4.0,"Retail":0.0,"Transportation":1.0},"uz":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":2.0,"Energy":0.0,"Finance":2.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":2.0,"Retail":0.0,"Transportation":0.0},"vu":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":1.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":0.0,"Retail":0.0,"Transportation":0.0},"ve":{"Advanced Mfg":41.0,"Aerospace":31.0,"Agribusiness":1.0,"Automotive":4.0,"Biotechnology":0.0,"Construction":8.0,"Educational Services":26.0,"Energy":10.0,"Finance":12.0,"Geospatial":1.0,"Health Care":19.0,"Homeland Security":0.0,"Hospitality":4.0,"IT":30.0,"Other Economic Sector":60.0,"Retail":6.0,"Transportation":9.0},"vn":{"Advanced Mfg":9.0,"Aerospace":2.0,"Agribusiness":4.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":12.0,"Energy":2.0,"Finance":6.0,"Geospatial":0.0,"Health Care":1.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":21.0,"Other Economic Sector":7.0,"Retail":0.0,"Transportation":0.0},"ye":{"Advanced Mfg":0.0,"Aerospace":0.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":2.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":1.0,"Retail":0.0,"Transportation":0.0},"zm":{"Advanced Mfg":0.0,"Aerospace":1.0,"Agribusiness":0.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":0.0,"Energy":0.0,"Finance":0.0,"Geospatial":0.0,"Health Care":0.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":0.0,"Other Economic Sector":3.0,"Retail":0.0,"Transportation":0.0},"zw":{"Advanced Mfg":1.0,"Aerospace":0.0,"Agribusiness":1.0,"Automotive":0.0,"Biotechnology":0.0,"Construction":0.0,"Educational Services":1.0,"Energy":0.0,"Finance":4.0,"Geospatial":0.0,"Health Care":3.0,"Homeland Security":0.0,"Hospitality":0.0,"IT":1.0,"Other Economic Sector":4.0,"Retail":2.0,"Transportation":0.0}
			};
function plotMap() {
	
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

		subtitle: {
			useHTML: true,
			text: 'Data: Kaggle, <a href = "http://www.kaggle.com/jboysen/us-perm-visas"> US Permanent Visa Applications</a>'
		},

		title: {
			text: 'Global US Visa Application Data (2012 - 2017)'
		},

		tooltip: {
			formatter: function(){
				return this.point.name + " had " + (acceptData[this.point["hc-key"]]["Y"] + acceptData[this.point["hc-key"]]["N"]) + " applicants";
			} 
		},

		colorAxis: {
			min: 0,
			visible: false,
		},
		plotOptions: {
            series: {
                point:{
					events:{
						click: function(){
							updateScoreCards(this["hc-key"]);
							plotPies(this["hc-key"]);
						}
					}
				} 
			}
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

function plotPies(country){
	Highcharts.chart('jobCountryChart', {
		title: {
			text: 'Economic Sector of Application'
		},
		chart: {
			type: 'pie',
			events: {
				load: function() {
					var data = this.series[0].data,
						newData = [];
		
					data.forEach(function(point) {
						newData.push({
							y: point.y,
							name: point.name
						})
					});
		
					newData.sort(function(a, b) {
						return a.y - b.y;
					});
		
					this.series[0].setData(newData);
				}
			}
		},
		tooltip: {
			pointFormat: '{series.name}: {point.percentage:.1f} %<br> Applicants: {point.y}'
		},
		series: [{
			name: '',	
			data: [
				{name: 'Manufacturing', y: typeData[country]['Advanced Mfg']},
				{name: 'Aerospace', y: typeData[country]['Aerospace']},
				{name: 'Agribusiness', y: typeData[country]['Agribusiness']},
				{name: 'Automotive', y: typeData[country]['Automotive']},
				{name: 'Biotechnology', y: typeData[country]['Biotechnology']},
				{name: 'Construction', y: typeData[country]['Construction']},
				{name: 'Educational Services', y: typeData[country]['Educational Services']},
				{name: 'Energy', y: typeData[country]['Energy']},
				{name: 'Finance', y: typeData[country]['Finance']},
				{name: 'Geospatial', y: typeData[country]['Geospatial']},
				{name: 'Health Care', y: typeData[country]['Health Care']},
				{name: 'Homeland Security', y: typeData[country]['Homeland Security']},
				{name: 'Hospitality', y: typeData[country]['Hospitality']},
				{name: 'IT', y: typeData[country]['IT']},
				{name: 'Other Economic Sector', y: typeData[country]['Other Economic Sector']},
				{name: 'Retail', y: typeData[country]['Retail']},
				{name: 'Transportation', y: typeData[country]['Transportation']}
			]
		}]
	});

	Highcharts.chart('acceptCountryChart', {
		title: {
			text: 'Accepted/Denied Applications'
		},
		chart: {
			type: 'pie'
		},
		tooltip: {
			formatter: function(){
				return   ((this.y / (acceptData[country]["Y"] + acceptData[country]["N"])) * 100).toFixed(2) +  "% of applicants from this country were " + this.point.name;
			} 
		},
		series: [{
			name: '',
			data: [
				{
					name: "Accepted",
					y: acceptData[country]["Y"]
				}, 
				{
					name: "Denied",
					y: acceptData[country]["N"]
				}
			]
		}]
	});
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
	Highcharts.chart('countryChart', {
		title: {
			text: 'Number of Visa Applications by Country'
		},
		chart: {
			type: 'bar'
		},
		tooltip: {
			formatter: function(){
				return ((Number(this.y))) + " applicants came from " + this.point["name"];
			} 
		},
		legend: {

		},
		yAxis: {
			title: {
				text: "Number of Visa Applications"
			}
		},
		xAxis: {
			categories: ['INDIA', 'CHINA', 'CANADA', 'SOUTH KOREA', 'PHILIPPINES',
			'MEXICO', 'UNITED KINGDOM', 'TAIWAN', 'PAKISTAN', 'Other']
		},
		series: [
			{
				name: "Country",
				showInLegend : false,
				data: [
					{"y":23216,"color":'red', "continent": "Asia", "name": "India"},
					{"y":2127,"color":'red', "continent": "Asia", "name": "China"},
					{"y":1633,"color":'blue', "continent": "North America", "name": "Canada"},
					{"y":1606,"color":'red', "continent": "Asia", "name": "South Korea"},
					{"y":1056,"color":'red', "continent": "Asia", "name": "Philippines"},
					{"y":834,"color":'blue', "continent": "North America", "name": "Mexico"},
					{"y":536,"color":'green', "continent": "Europe", "name": "United Kingdom"},
					{"y":473,"color":'red', "continent": "Asia", "name": "Taiwan"},
					{"y":441,"color":'red', "continent": "Asia", "name": "Pakistan"},
					{"y":6669,"color":'black', "continent": "Other", "name": "Other"}
				]
			}
		]
	});

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
			data: [{"name":"IT","y":42.9141509678},{"name":"Manufacturing","y":15.1719312793},{"name":"Other Economic Sector","y":11.5622813609},{"name":"Finance","y":6.9575807831},{"name":"Educational Services","y":6.4393252313},{"name":"Health Care","y":5.1929206292},{"name":"Retail","y":3.3168355316},{"name":"Aerospace","y":3.0447513669},{"name":"Other","y":5.4002228499}]
		}]
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
				.toFixed(1)) + "%" + " : " + this.point.info;
			} 
		},
		series: [{
			name: "Visa Types",
			data: [{"name":"H-1B","y":0.85157161, "info" : "Work Visa for professionals working in US"},
					{"name":"L-1","y":0.0362001503, "info" : "Work Visa for foreigners opening business in US"},
					{"name":"F-1","y":0.0284781426, "info" : "Student Visa"},
					{"name":"Parolee","y":0.0195382343, "info" : "A permit for non-US nationals who do not have a visa but need to re-enter"},
					{"name":"Other","y":0.06421186286958092, "info" : "Other"}]
		}
		]
	});

	Highcharts.chart('acceptChart', {
		title: {
			text: 'Visa Accept Rate Based on Jobs'
		},
		chart: {
			type: 'bar'
		},
		tooltip: {
			formatter: function(){
				return ((Number(this.y)*100)
				.toFixed(1)) + "%";
			} 
		},
		yAxis: {
			title: {
				text: "Acceptance Rate (%)"
			}
		},
		xAxis: {
			categories: ['Educational Services', 'Finance', 'Health Care', 'IT']
		},
		series: [
			{
				name: "H-1B",
				data: [0.83310962, 0.89555284,
					0.86620531, 0.82879538]
			},
			{
				name: "L-1",
				data: [
					1.        , 0.87931034, 1.        , 0.85294118]
			},
			{
				name: "F-1",
				data: [0.807018,0.666667,0.764706,0.755814]
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
