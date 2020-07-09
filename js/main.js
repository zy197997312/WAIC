$(function () {
	$(document).ready(function() {                                                  
		Highcharts.setOptions({                                                     
			global: {                                                               
				useUTC: false                                                       
			}                                                                       
		});                                                                         
		var chart;                                                                  
		$('#container').highcharts({                                                
			chart: {  
				//颜色
				style: {
                    color: 'red'
                  },
				borderWidth: 1,
				borderColor: null,
				//plotBorderWidth: 2,
			//	plotBorderColor: 'yellow',
				backgroundColor: null,
				
				type: 'spline',                                                     
				animation: Highcharts.svg, // don't animate in old IE               
				marginRight: 10,                                                    
				events: {                                                           
					load: function() {                                              
					// set up the updating of the chart each second             
					var series = this.series[0];                                
						setInterval(function() {                                    
						var x = (new Date()).getTime(), // current time
//    				var weather=$("span#weather_data").text();
//						alert(1);)
							y =Math.random();                                  
						series.addPoint([x, y], true, true);                    
					}, 1000);                                                   
				}                                                               
				}                                                                   
			},                                                                      
			title: {                                                                
				text: '城市 气温' ,
				 style: {
				 	color:"white"
			}
			},	
			xAxis: { 
				lineWidth: 2,
				lineColor: 'white',                                                               
				type: 'datetime',                                                   
				tickPixelInterval: 100,
				labels:{
					style:{
						color:"white"
					}
				}
			},                                                                      
			yAxis: {   
				lineWidth: 2,
				lineColor: 'white',
				title: {                                                            
					text: 'Temperature (\xB0C)'
				},
				labels:{
					style:{
						color:"white"
					}
				},
		     plotLines: [{                                                       
					value: 0,                                                       
					width: 1,                                                       
					color: 'white',                                                
				}]                                                                  
			},                                                                      
			tooltip: {                                                              
				formatter: function() {                                             
						return '<b>'+ this.series.name +'</b><br/>'+                
						Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) +'<br/>'+
						Highcharts.numberFormat(this.y, 2);                         
				}                                                                   
			},                                                                      
			legend: {                                                               
				enabled: false                                                      
			},                                                                      
			exporting: {                                                            
				enabled: false                                                      
			},                                                                      
			series: [{                                                              
				name: 'Random data',                                                
				data: (function() {                                                 
					// generate an array of random data                             
							var data = [],                                                  
								time = (new Date()).getTime(),                              
								i;                                                          
																							
							for (i = -19; i <= 0; i++) {                                    
								data.push({                                                 
									x: time + i * 1000,                                     
									y: 0                                        
								});                                                         
							}                                                               
							return data;                                                    
						})()                                                                
			}]                                                                      
		});                                                                         
	});                                                                             
});    

function insert(){
	var wea_data=document.getElementById("weather_data");
	var insert_wea_data=document.getElementById("insert_weather_img");
	if(wea_data.innerHTML>=28){
		document.getElementById("insert_weather_img").src="img/3IMG.png";
	}
	else if(wea_data.innerHTML<28&&wea_data.innerHTML>=23){
		document.getElementById("insert_weather_img").src="img/sun_cloud.png";
	}
	else{
		document.getElementById("insert_weather_img").src="img/rain.png";
	}
}

function timeDate(){
	var mydate=new Date();
	var day=mydate.getDay();
	var minute=mydate.getMinutes();
	var Time=document.getElementById("Time");
	var Time_Date=document.getElementById("Time_Date");
	switch (day){
		case 0:day='星期天';break;
		case 1:day='星期一';break;
		case 2:day='星期二';break;
		case 3:day='星期三';break;
		case 4:day='星期四';break;
		case 5:day='星期五';break;
		case 6:day='星期六';break;
		default:
			break;
	}
	if(minute<10){
		Time.innerHTML=mydate.getHours()+":0"+mydate.getMinutes();
	}
	else{
		Time.innerHTML=mydate.getHours()+":"+mydate.getMinutes();
	}
	Time_Date.innerHTML=day+"<br/>"
	+mydate.getFullYear()+'/'+(mydate.getMonth()+1)+'/'+mydate.getDate();
}

$(document).ready(function(){
	$("#home").mouseenter(function(){
		$("#partner_name").slideDown();
	});
	$("#home").mouseleave(function(){
		$("#partner_name").slideUp();
	});
});

window.onload=function(){
	insert();
	timeDate();
	setInterval(timeDate,60000)
}
