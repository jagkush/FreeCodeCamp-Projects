function geo(){
if (navigator.geolocation){
	 //Return the user's longitude and latitude
	 //on page load using HTML5 geolocation API
navigator.geolocation.getCurrentPosition(success,error);
}
else {
alert('Geolocation is not supported');
}

function error() {
alert("That's weird! We couldn't find you!");
}


function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

	var header = document.querySelector('header');
	var section = document.querySelector('section');
	var footer = document.querySelector('footer');
	
	var api = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude +"&lon=" + longitude;

	var request = new XMLHttpRequest;
	request.open ('GET', api);
	request.responseType = 'json';
	request.send();

	request.onload = function(){
		var data = request.response;
		populateHeader(data);
		showSection(data);
		showFooter(data);
	}

	function populateHeader(jsonObj){
		var d1 = document.createElement('div');
		d1.className = "header";

		var hd = document.createElement('h1');
		hd.className = "header_name";
		hd.textContent = "Kouch Weather App";
		d1.appendChild(hd);

		var desc = document.createElement('h6');
		desc.className = "header_desc";
		desc.textContent = "Your current location weather details below";
		d1.appendChild(desc);

		header.appendChild(d1);
	}

	function showSection(jsonObj){
		var d2 = document.createElement('div');
			d2.className = "location" ;
		var ic = document. createElement('img');	
			ic.src = jsonObj['weather'][0].icon;
			ic.className = 'dim';
		var st = document.createElement('p');
			st.textContent = jsonObj['name'] + ", ";
			st.className = 'dim';
		var cty = document.createElement('p');
			cty.textContent = jsonObj['sys'].country;
			cty.className = 'dim';
		
			d2.appendChild(ic);
			d2.appendChild(st);
			d2.appendChild(cty);
			header.appendChild(d2);

		var d6 = document.createElement('div');
			d6.className = 'temperature';
		var time = jsonObj['dt'];
		var date = new Date(time *1000);	
		var hours = date.getHours();
		var minutes = "0" + date.getMinutes();
		var seconds = "0" + date.getSeconds();
		var formattedTime = document.createElement('p');
		formattedTime.textContent = "At " + hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2) + " It will be";
		formattedTime.className = "time";
		
		var tem = document.createElement('p');
			tem.className ='temp';
			tem.textContent = Math.round(jsonObj['main'].temp )+ "°C";

			d6.appendChild(formattedTime);
			d6.appendChild(tem);
			section.appendChild(d6);

		var button = document.createElement('BUTTON');
		var t = document.createTextNode("Change Temp unit");
			button.onclick = function(){
				
				if (button.onclick = true){
					 return tem.textContent = Math.round((jsonObj['main'].temp * 1.8)+32)+ "°F";
					
				}
					else {
					 return tem.textContent = Math.round(jsonObj['main'].temp )+ "°C";
				}
			};
			button.appendChild(t);
			d6.appendChild(button);

			

		var d3 = document.createElement('div')
			d3.className = 'section_disp';

		var d4 =document.createElement('div');
			d4.className = 'snow_hum';
		var rain = document.createElement('p');
			rain.textContent = "SNOW/RAIN?";
			rain.className = 'condition';
		var snr = document.createElement('p');
			snr.textContent = jsonObj['weather'][0].main;
			snr.className = 'disp_main';

			d4.appendChild(rain);
			d4.appendChild(snr);
			

		var d5 =document.createElement('div');
			d5.className = 'snow_hum hum_disp';
		var hum = document.createElement('p');
			hum.textContent = "HUMIDITY?";
			hum.className = 'condition';
	  	var hm = document.createElement('p');
			hm.textContent = jsonObj['main'].humidity + "%";
			hm.className = 'disp_humidity';

			d5.appendChild(hum);
			d5.appendChild(hm);

			d3.appendChild(d4);
			d3.appendChild(d5);
			section.appendChild(d3);

	}

	function showFooter(jsonObj){
		var di = document.createElement('div');
		di.className = "footer";
		

		var foot = document.createElement('p');
		foot.textContent = "Designed and Coded by: ";
	  	di.appendChild(foot);
	  
	 	var jag = document.createElement('a');
	  	var linkT=document.createTextNode("Jagkush");
	  	jag.href = "https://facebook.com/kouchade.kush";
	  	jag.appendChild(linkT);
	  	jag.title = "Jagkush";
	  	jag.target ="#blank";
	  	jag.appendChild(linkT);
	  	foot.appendChild(jag);

	 	footer.appendChild(di);
	}

	}

 }
  

