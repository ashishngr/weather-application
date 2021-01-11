const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_status = document.getElementById('temp_status');
const temp = document.getElementById('temp');



const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.Value;

    if(cityVal === ""){
        city_name.innerText = `Plz write the name before search`;
    } else{
        
            const url = `http://api.openweathermap.org/data/2.5/weather?q=Delhi&units=metric&appid=4d31a48cf0e26bada58ae16cd3141158`
        const response = await fetch(url);
        const data = await response.json();
        
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp.innerText = arrData[0].main.temp;

        const tempMood = arrData[0].weather[0].main;
        //condition to check weather sunny or cloudy
        if(tempMood =="Clear"){
            temp_status.innerHTML = 
            "<i class='fas fa-sun' style='color: #ecc68;'></i>";
        }else if(tempMoody =="Clouds"){
            temp_status.innerHTML = 
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
        }
        else if(tempMoody =="Rain"){
            temp_status.innerHTML = 
                "<i class='fas fa-rain' style='color: #a4b0be;'></i>";
            }
        else{
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

        }
    }


} 
      
        
   


submitBtn.addEventListener('click', getInfo);