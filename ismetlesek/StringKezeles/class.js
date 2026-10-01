class Szemely{
    constructor(nev, foglalkozas,szuletesiEv){
        this.nev=nev;
        this.foglalkozas=foglalkozas;
        this.szuletesiEv=szuletesiEv;
    }

    hanyEves(){
        const datum = new Date();
        return datum.getFullYear()-this.szuletesiEv;
    }
}

class Alkalmazott extends Szemely{
    static bonusz=10;

    #azonosito = undefined;
    get azonosito(){return this.#azonosito}
    set azonosito(azon){
        if(typeof(azon)=="number")
            this.#azonosito=azon;
    }

    constructor(nev, foglalkozas,szuletesiEv, fizetes){
        super(nev, foglalkozas,szuletesiEv);
        this.fizetes=fizetes;
    }

    /**függvény megmondja az ehavi fizut
     * -ha dec akkor alap fizu+bonusz
     * -külömbenalap fizu
     */
    fizetesEbbenAHonnapban(){
        if(new Date().getMonth()==11)
            return this.fizetes*(1+(Alkalmazott.bonusz/100));
        return this.fizetes
    }
}

//-------------------Feladat
class Kisfonok extends Alkalmazott{

    #beosztottakSzama=undefined;
    get beosztottakSzama(){return this.#beosztottakSzama}
    
    constructor(nev, foglalkozas,szuletesiEv, fizetes, beosztottakSzama){
        super(nev, foglalkozas,szuletesiEv, fizetes);

        if(beosztottakSzama >=0 && beosztottakSzama <=20)
            this.#beosztottakSzama =beosztottakSzama;
    }

}

//-----------------------------------------------------
let bela = new Szemely("Vak Béla","kéménysöprő",1968);
console.log(`${bela.nev} ${bela.hanyEves()} éves.`);

let Irenke = new Alkalmazott("Kovacs Irén","recepciós",1974,489630);
Irenke.azonosito=123456;
Irenke.azonosito="asd asd";//nem jo
console.log(Irenke);
console.log(`${Irenke.nev} fizetese: ${Irenke.fizetesEbbenAHonnapban()} Ft.`)

