function $(id){
    return document.getElementById(id);
}
//szin
function rangeRGB(){
    const r= $('red-range').value;
    const g= $('green-range').value;
    const b= $('blue-range').value;
    const a= $('op-range').value;

    $('red-value').value = r;
    $('green-value').value = g;
    $('blue-value').value = b;
    $('op-value').value = a;

    $('rgb-box').style.backgroundColor=`rgba(${r}, ${g}, ${b}, ${a})`;
    
}
function valueRGB(){
    const r= $('red-value').value;
    const g= $('green-value').value;
    const b= $('blue-value').value;
    const a= $('op-value').value;

    $('red-range').value = r;
    $('green-range').value = g;
    $('blue-range').value = b;
    $('op-range').value = a;

    $('rgb-box').style.backgroundColor=`rgba(${r}, ${g}, ${b}, ${a})`;
}

//Meret


//Hely


//Extra

//szin Tabla
$("red-range").addEventListener('input',rangeRGB);
$("green-range").addEventListener('input',rangeRGB);
$("blue-range").addEventListener('input',rangeRGB);
$("op-range").addEventListener('input',rangeRGB);

$("red-value").addEventListener('input',valueRGB);
$("green-value").addEventListener('input',valueRGB);
$("blue-value").addEventListener('input',valueRGB);
$("op-value").addEventListener('input',valueRGB);

//hely-tabla
$("width-range").addEventListener('input',);
$("height-range").addEventListener('input',);
$("ml-range").addEventListener('input',);
$("mt-range").addEventListener('input',);
$("br-range").addEventListener('input',);
$("forog-range").addEventListener('input',);

$("-value").addEventListener('input',);
$("-value").addEventListener('input',);
$("-value").addEventListener('input',);
$("-value").addEventListener('input',);
$("-value").addEventListener('input',);
$("-value").addEventListener('input',);