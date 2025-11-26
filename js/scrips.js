console.log("Hola Mundo");
alert("Hola Mundo, esto es un alert") 

function triste(){
    document.getElementById('carita').src='imagenes/sad.avif';
    alert("Po que ta triste mano");
}
function feliz(){
    document.getElementById('carita').src='imagenes/happy2.png';
}
function cambiarColor(){
    document.getElementById('menu').style.color='#eed33aff';

}
function cambiarLogo(){
    document.getElementById('logo').src='images/logo.jpg';
}
function cambiarFondo(){
     document.getElementById('menu').style.background='#524604';
}
function cambiodeTexto(){
    document.getElementById('Subtitulo').textContent="YA LE SE AL JS";
}
function fondoAside(){
    document.getElementById('aside').style.background='#f584f5ff';
}
function alert1(){ 
    alert("Este es el mensaje número 1");
}
function alert2(){ 
    alert("Hola, este es el mensaje 2"); 
}
function alert3(){ 
    alert("Probando alert 3, todo ok"); 
}
function alert4(){ 
    alert("Mensaje 4 funcionando correctamente"); 
}
function alert5(){ 
    alert("Mensaje 5: JS es divertido"); 
}
function alert6(){ 
    alert("Mensaje 6: Último alert creado"); 
}
function cambiarFondoPagina(){
    document.body.style.background = "#d2f8ff";
}

function cambiarTexto(){
    document.body.style.color = "darkblue";
}

function agrandarTitulo(){
    document.getElementById("titulo").style.fontSize = "50px";
}

function reducirImagen(){
    document.getElementById("carita").style.width = "150px";
}
function cambiarSubtitulo1(){
    document.getElementById("Subtitulo").textContent = "Subtítulo cambiado con JavaScript.";
}

function cambiarSubtitulo2(){
    document.getElementById("Subtitulo2").textContent = "Texto actualizado exitosamente.";
}


