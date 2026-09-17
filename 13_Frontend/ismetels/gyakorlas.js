let szamok = [36, -2, 112, 101, 22];

//1 Adjunk hozzá 10 új, véletlen számokat a tömbhöz, [-100, +100]
for(let i=0;i<10;i++){
    let szam=Math.round(Math.random()*200-100);
    szamok.push(szam);
}
console.log(szamok);

//2 Szűrjük ki egy új tömbbe a pozitív páros számokat
szamok=szamok.filter(n=>n%2==0 && n>0);
console.log(szamok);

//3 Döntsük el, hogy az új tömbbe van-e 100-nál nagyobb szám (true/false)
console.log("van e 100-nál nagyobb szám? "+(szamok.findIndex(sz=>sz>=100)>=0));

//4
console.log("Új tömb legnagyobb eleme: "+(Math.max(...szamok)));

//5
console.log(szamok.sort((a,b)=>b-a));


