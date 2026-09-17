const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];
/**@type {{nev:string,magassag:number,suly:number}[]} */
const jellemzokTul =[];

for(let i=0;i<jellemzok.length;i++){
    /**@type {{nev:string,magassag:number,suly:number}} */
    const obj={};
    const jellemzoRecord=jellemzok[i].split(";");
    obj.nev=jellemzoRecord[0];
    obj.magassag=Number(jellemzoRecord[1]);
    obj.suly=Number(jellemzoRecord[2])
    jellemzokTul.push(obj)
}
for(const t of jellemzokTul){
    console.log(`Név: ${t.nev}, Magasság: ${t.magassag.toFixed(2)} cm, Súly: ${t.suly.toFixed(1)} kg`)
};