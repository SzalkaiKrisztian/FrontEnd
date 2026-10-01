console.log(typeof(2));
console.log(typeof(3.14));
console.log(typeof(true));
console.log(typeof("Ez egy szöveg"));

//gyenge tipus nyelv
console.log(3*"2"); //==> 6
console.log(3*"alma"); //==> NaN (Not a Number)
console.log(typeof(2*"alma"));// number a tipusa de az erteke nem

console.log(3+"2");
console.log(typeof(3+"2"));

//-----------------------------------------------
let a =3;
let b ="2";
console.log(a+parseInt(b));  //noob
console.log(a+Number(b)); //pro
console.log(a+b*1); //hacker

let n = null; //üres
let u = undefined; //most üres DE késöbb fel lesz töltve!

let valami; //===> undefined  noob
let valami2 = undefined;//    pro

//-------------------------------------------függvények
function udvozol(){
    console.log("üdvözöllek!");
}

const udv = function(){
    console.log("üdv");
}

const udv2=()=>{console.log("üdv2!")}

udv2();
udv();
udvozol();

function negyzetreEmel(szam){
    return szam*szam;
}

const negyzet =(n)=>{return n*n} 
//egy bemenetnél egyhagyhato a (), 
// ha csak return van egyhagyhato a {}
//const negyzet = n => n*n

console.log(negyzetreEmel(2));
console.log(negyzet(2));

//--------------------------------------------------tömbök
let autok = ["Audi", "BMW","Dacia", "Ford", "Toyota"];
console.log(autok[3]);
console.log(autok.at(3))

for(let i = 0;i<autok.length;i++)
    console.log(autok[i]);

//function eldont(autoNev){
//    return autoNev =="BMW"
//}

console.log(autok.findIndex(auto=>auto=="BMW"));//-1 ha nincs benne
console.log(autok.findLastIndex(auto=>auto=="BMW"));

//új elem befuzese
autok.push('Honda');
autok.push('Fiat','Nissan');

//utolsó elem törlése, vissza is adja
console.log(autok.pop())

//spred operátor (...)-> a tömböt elemeire szétbontja
let ujautok=["Mercedes",...autok, "Suzuki"]
console.log(ujautok)

//szűrés - tömbből szűr és a visszatérése egy tömb lesz
console.log(ujautok.filter(auto =>auto=="Honda" || auto=="Ford"));

//törüljük ki az ujautokbol a hondákat
ujautok=ujautok.filter(auto=> auto!="Honda")
console.log(ujautok)

//toString
console.log(autok.toString());
console.log(autok.join(' és '))

//rendezes
console.log(ujautok.sort());//alabbol abc sorrend
console.log(ujautok.sort().reverse());//visszafele

//numerikus tömb rendezes
let szamok = [8,2,3,9,11,0,2,1,4,21,39];


console.log(szamok.sort((a,b)=>a-b));

//eldöntés -tartalmazza e
console.log(ujautok.includes("Ford"));
console.log(ujautok.includes("Ford", 8)); //N-edig indextől
console.log(ujautok.includes("citroen"));

//összefűzés
const x = [1,2,3];
const y = [4,5,6];
const c1 = x.concat(y);//noob
console.log(c1);
//pro
const c2 = [...x,...y];
console.log(c2);

//készítsünk függvényt amely számokat ad ossze
//Rest parameter ...param
function osszead(...numbers){
    let osszeg = 0;
    for(let i =0;i<numbers.length;i++)
        osszeg +=numbers[i];

    return osszeg;
}   

console.log(osszead(2,7));
console.log(osszead(2,7,4));
console.log(osszead(2,7,4,2));
console.log(osszead(2,7,4,2,2,3,4,5,6,67,78,8,7,5,4,3));

let szamok2=[2,7,4,2,2,3,4,5,6,67,78,8,7,5,4,3];
let sum=0;
szamok2.forEach(x=>sum+=x);
console.log(sum);
