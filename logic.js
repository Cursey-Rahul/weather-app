let api= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let apikey= "a3d44016d2e31b61c3adefe555b73b4c";
let button= document.querySelector("button");
let input= document.querySelector("input");
let image= document.querySelector(".bgi");
let win2= document.querySelector("win2");
let hum2= document.querySelector("hum2");
async function weather(city){
    let call= await fetch(api + city +`&appid=${apikey}`);
    let data= await call.json();
        document.querySelector(".mid h2").innerHTML=data.name;
        document.querySelector(".mid p").innerHTML=Math.floor(data.main.temp)+`°C`;
        let win1=document.querySelector(".win1");
        win1.innerHTML=data.wind.speed;
        let hum1=document.querySelector(".hum1")
        hum1.innerHTML=data.main.humidity;
        hum1.innerHTML+='%<br>Humidity';
        win1.innerHTML+=' km/hr <br>Wind Speed';
    
        if(data.weather[0].main.toLowerCase() =='clear'){
            image.src="clear.png";
        }
        else if(data.weather[0].main.toLowerCase() =='clouds'){
            image.src="clouds.png";
        }
        else if(data.weather[0].main.toLowerCase() =='drizzle'){
            image.src="drizzle.png";
        }
        else if(data.weather[0].main.toLowerCase() =='humidity'){
            image.src="humidity.png";
        }
        else if(data.weather[0].main.toLowerCase() =='mist'){
            image.src="mist.png";
        }
        else if(data.weather[0].main.toLowerCase() =='rain'){
            image.src="rain.png";
        }
        else if(data.weather[0].main.toLowerCase() =='snow'){
            image.src="snow.png";
        }
        else if(data.weather[0].main.toLowerCase() =='wind'){
            image.src="wind.png";
        }
        else {
            image.src = "default.png";};
            document.querySelector(".stats").style.visibility = "visible";
            document.querySelector(".mid").style.visibility = "visible";
         
    };
    

button.addEventListener("click", ()=>{
    weather(input.value);
})
