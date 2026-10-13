const $=(id)=>document.getElementById(id)

async function getApiUser() {
    const url="https://randomuser.me/api/";

    const response= await fetch(url);
    const data = await response.json();
    console.log(data)

    felhasznaloGeneralasa(data)
}

function felhasznaloGeneralasa(data){
    const profikep=$('profil-kep');
    const neve = $('neve');
    const lakcim=$('lakcim');
    const email= $('email');
    const azonosito =$('azonosito');

    profikep.src=data.results[0].picture.large;
    neve.innerText=`${data.results[0].name.first} ${data.results[0].name.last}`;
    lakcim.innerText=`Adress: ${data.results[0].location.country}, ${data.results[0].location.state}, ${data.results[0].location.city}, ${data.results[0].location.street.name} ${data.results[0].location.street.number}`;
    email.innerText=`E-mail: ${data.results[0].email}`;
    if(data.results[0].id.name !="")
        azonosito.innerText=`ID: ${data.results[0].id.value}`;
    else
        azonosito.innerText=`ID: -`;
}

$('generalas').addEventListener('click',getApiUser);