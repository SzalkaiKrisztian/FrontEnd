const url="https://pokeapi.co/api/v2/pokemon/";

const $=(id)=> document.getElementById(id);

let getPokeData= async()=>{
    let id = Math.floor(Math.random()*1025)+1;
    const endpoint = url +id;

    const response=await fetch(endpoint);
    const data =await response.json();

    updateCard(data);
}

let updateCard=(data)=>{
    //get
    const hp = data.stats[0].base_stat;
    const imgSrc=data.sprites.other['official-artwork'].front_default;
    let pokeName = data.name;
    pokeName =pokeName[0].toUpperCase()+pokeName.substring(1);
    const types = data.types;
    const attack=data.stats[1].base_stat;
    const defense=data.stats[2].base_stat;
    const speed=data.stats[5].base_stat;

    //set
    $("hp").innerText=hp;
    $("img").src=imgSrc;
    $("poke-name").innerText=pokeName;
    $("attack").innerHTML=attack;
    $("defense").innerHTML=defense;
    $("speed").innerHTML=speed;
    appendTypes(types);
}

let appendTypes=(types)=>{
    $("type").innerHTML="";
    for(let i=0;i<types.length;i++){
        let span = document.createElement("span");
        span.textContent=types[i].type.name;
        $('type').appendChild(span);
    }
}

$("btn").addEventListener('click',getPokeData);