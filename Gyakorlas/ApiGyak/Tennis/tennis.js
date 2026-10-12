//ff0bfd66-dfea-4005-b3e7-eddb9a7f7831
//X-Gravitee-Api-Key: 'ff0bfd66-dfea-4005-b3e7-eddb9a7f7831'

async function GetData() {
    console.log("erzekelt")
    const url ="https://cors-anywhere.herokuapp.com/https://api.sportsapi365.com/v1/tennis/{type}/player"
    const SPORTSAPI365_KEY='ff0bfd66-dfea-4005-b3e7-eddb9a7f7831'

    let response=await fetch(url,{
        headers:{
            'X-Gravitee-Api-Key': SPORTSAPI365_KEY
        }
    });
    let data =await response.json();

    console.log(release);
    console.log(data);
}

document.getElementById("lekeres").addEventListener('click',GetData);