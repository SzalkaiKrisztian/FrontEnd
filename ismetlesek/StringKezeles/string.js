let s = "ez itt egy string";
let str =`ez egy
töb soros
hosszu
string
${s}`;//altGr+7
console.log(str)
//tömbként is kezelhető
console.log(s[3]);
console.log(s.length);
console.log(s[52]); //->undefimned
console.log(s[-2]); //-> undefined

//stringkezelő függvények
console.log(s.charAt(9)); //-> y
console.log(s.charAt(-2)); //-> ""
console.log(s.at(7));
console.log(s.at(-2));
console.log(s.indexOf('e'));//-> 7
console.log(s.lastIndexOf('g'));
console.log(s.includes("egy"));

console.log(s.substring(9,10));
console.log(s.substring(9));//vegeig
console.log(s.replace(' ','-'));
console.log(s.replaceAll(' ','-'));

let nev ="   szalkai krisztian   ";
console.log(nev);
console.log(nev.trim());

//koknkatenácio
console.log(s+"még valami...");
console.log(s.concat("még valami..."));

//módosítás
s[0]='A';   //nemfog mukodni
console.log(s);
s='A'+s.substring(1);
s=s.substring(0,6)+'X'+s.substring(7);
console.log(s);

//helykitoltes
let ora=19, perc=5;
console.log((ora+"").padStart(2,'0')+":"+(perc+"").padStart(2,'0'));//19:05

//vágás
let adatok="sipi Rupi_Bábolna_tanulo_aracssárga"
let adatokStringTomb= adatok.split('_');
console.log(adatokStringTomb);