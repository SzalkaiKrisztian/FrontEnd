const $=(id)=>document.getElementById(id)
async function Lekeres() {
    let bekeres=$("bekeres").value.trim();//abys
    const APIKEY="live_lxLFxsg54U31cHT6k7mDdMd7UWL72h8KWH5FczeJjGrsihMjeE0Io5qoAlZfQj3O"


    //const url=`https://api.thecatapi.com/v1/breeds/${bekeres}`
    const url = `https://api.thecatapi.com/v1/images/search?category_ids=${bekeres}&limit=10`
    //const url = "https://api.thecatapi.com/v1/images/search?limit=30"

    const response =await fetch(url,{
        headers:{'x-api-key':APIKEY}
    });
    console.log(response)
    const data =await response.json();
    console.log(data);

    General(data)
}
function General(data){
    const tbody=$("addCat")
    const tr = document.createElement('tr')
    tbody.appendChild(tr)
    for(let i=0;i<10;i++){
        const td = document.createElement('td')

        const img = document.createElement("img")
        img.src=data[i].url
        img.height=130;

        td.appendChild(img)
        tr.appendChild(td)
    }
}

$("btn").addEventListener('click',Lekeres)