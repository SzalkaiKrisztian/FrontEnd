const $= id=> document.getElementById(id);

async function getURL(){
    //bevetel
    let keresettVaros= $("varos").value.trim();
    keresettVaros=keresettVaros.replaceAll(' ', '+');

    console.log(keresettVaros);
    //url
    const GeoUrl=`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=${keresettVaros}&limit=1&appid=bcf20efeb3b901b20a2175b90b7b8e9d`;
    //const GeoUrl=`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=bcf20efeb3b901b20a2175b90b7b8e9d`;
    const GeoResponse = await fetch(GeoUrl);
    const Gdata = await GeoResponse.json();
    console.log("Geo");
    console.log(Gdata);
    //console.log(GeoResponse);
    
    let keresettLat=Gdata[0].lat;
    let keresettLon=Gdata[0].lon;

    const WeatherUrl=`https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?lat=${keresettLat}&lon=${keresettLon}&appid=bcf20efeb3b901b20a2175b90b7b8e9d`;
    const WeatherResponse = await fetch(WeatherUrl);
    const Wdata = await WeatherResponse.json();
    console.log("Weather");
    console.log(Wdata);
    //console.log(WeatherResponse);
}

$("btn").addEventListener('click',getURL);

