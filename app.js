console.log("welocome to weather app")
window.addEventListener("load",()=>{
    let long; let lat; 
    let temperaturedegree = document.querySelector(".temperature-degree");
    let temperaturelocation= document.querySelector(".temperature-location");
    let temperaturesummary = document.querySelector(".temperature-summary");
    let temperaturecountry = document.querySelector(".country");
    let temperatureunit = document.querySelector(".temperature-unit");
    let temperaturesection = document.querySelector(".temperature-section");
    
    

   if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition(position=>{
           long= position.coords.longitude;
           lat= position.coords.latitude;

           const api =  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=2f5d3044c80c4a0754692d530c99e4b3`;
           
           fetch(api)
           .then(response =>{
               return response.json();
           })
           .then(data=>{
                console.log(data);
                
                temperaturedegree.textContent=data.main.temp;
                temperaturelocation.textContent=data.name;
                temperaturesummary.textContent=data.weather[0].description;
                temperaturecountry.textContent=data.sys.country;
          
                temperaturesection.addEventListener("click",()=>{
                    if(temperatureunit.textContent==='k'){
                        temperatureunit.textContent='c';
                        temperaturedegree.textContent=data.main.temp-273.15;
                    }else{
                        temperaturedegree.textContent=data.main.temp
                        temperatureunit.textContent='k';}
                })


          
           })
       })
   }else{
       
   }

      
})