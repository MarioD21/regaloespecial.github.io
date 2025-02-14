// Obtener los elementos del DOM
const siguiente = document.getElementById('siguiente');
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const botonregalo = document.getElementById('regaloBoton');
const imagen = document.getElementById('imagen');
const musica = document.getElementById('musica');
const gif1 = document.getElementById('gif1');
const gif2 = document.getElementById('gif2');
const texto = document.getElementById('texto');
const body = document.body;
const h1 = document.getElementById('texto');
const lyricsContainer = document.getElementById('lyricsContainer');

//Aqui pones la letra o lyrics de tu cancion, buscas el forma .LRC de la cancion, la copeas y le pides a alguna IA que te ayude a
// pasarla a este codigo convirtiendo los segundos o minutos a MILISEGUNDO (IMPORTANTE)
const lyrics = [
    { time: 4150, text: "Ooh, ooh" },
    { time: 9610, text: "I, I just woke up from a dream <br> Yo, acabo de despertar de un sueño" },
    { time: 16120, text: "Where you and I had to say goodbye <br> En el que tú y yo tuvimos que decir adiós" },
    { time: 20850, text: "And I don't know what it all means <br> Y no sé qué significa todo esto" },
    { time: 25250, text: "But since I survived, I realized <br> Pero desde que sobreviví, me di cuenta" },
    { time: 29260, text: "Wherever you go, that's where I'll follow <br> Donde sea que vayas, ahí es donde iré" },
    { time: 34650, text: "Nobody's promised tomorrow <br> Nadie tiene garantizado el mañana" },
    { time: 38780, text: "So I'ma love you every night like it's the last night <br> Así que te amaré cada noche como si fuera la última noche" },
    { time: 42970, text: "Like it's the last night <br> Como si fuera la última noche" },
    { time: 45300, text: "If the world was ending <br> Si el mundo se estuviera acabando" },
    { time: 48180, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" },
    { time: 54300, text: "If the party was over <br> Si la fiesta hubiera terminado" },
    { time: 56950, text: "And our time on Earth was through <br> Y nuestro tiempo en la Tierra hubiera acabado" },
    { time: 63500, text: "I'd wanna hold you just for a while <br> Quisiera abrazarte solo un momento" },
    { time: 68170, text: "And die with a smile <br> Y morir con una sonrisa" },
    { time: 72700, text: "If the world was ending <br> Si el mundo se estuviera acabando" },
    { time: 75590, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" },
    { time: 81500, text: "Ooh, ooh" },
    { time: 86050, text: "Ooh, lost, lost in the words that we scream <br> Ooh, perdida, perdida en las palabras que gritamos" },
    { time: 93780, text: "I don't even wanna do this anymore <br> Ni siquiera quiero hacer esto más" },
    { time: 98120, text: "'Cause you already know what you mean to me <br> Porque ya sabes lo que significas para mí" },
    { time: 101900, text: "And our love's the only one worth fighting for <br> Y nuestro amor es la única guerra que vale la pena pelear" },
    { time: 107300, text: "Wherever you go, that's where I'll follow <br> Donde sea que vayas, ahí es donde iré" },
    { time: 111970, text: "Nobody's promised tomorrow <br> Nadie tiene garantizado el mañana" },
    { time: 115623, text: "So I'ma love you every night like it's the last night <br> Así que te amaré cada noche como si fuera la última noche" },
    { time: 120024, text: "Like it's the last night <br> Como si fuera la última noche" },
    { time: 122660, text: "If the world was ending <br> Si el mundo se estuviera acabando" },
    { time: 125670, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" },
    { time: 131177, text: "If the party was over <br> Si la fiesta hubiera terminado" },
    { time: 134450, text: "And our time on Earth was through <br> Y nuestro tiempo en la Tierra hubiera acabado" },
    { time: 140900, text: "I'd wanna hold you just for a while <br> Quisiera abrazarte solo un momento" },
    { time: 145590, text: "And die with a smile <br> Y morir con una sonrisa" },
    { time: 149920, text: "If the world was ending <br> Si el mundo se estuviera acabando" },
    { time: 153309, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" },
    { time: 158852, text: "Right next to you <br> Justo a tu lado" },
    { time: 164336, text: "Next to you <br> A tu lado" },
    { time: 168804, text: "Right next to you <br> Justo a tu lado" },
    { time: 171420, text: "Oh-oh" },
    { time: 190072, text: "If the world was ending <br> Si el mundo se estuviera acabando" },
    { time: 193390, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" },
    { time: 200009, text: "If the party was over <br> Si la fiesta hubiera terminado" },
    { time: 202820, text: "And our time on Earth was through <br> Y nuestro tiempo en la Tierra hubiera acabado" },
    { time: 208897, text: "I'd wanna hold you just for a while <br> Quisiera abrazarte solo un momento" },
    { time: 213379, text: "And die with a smile <br> Y morir con una sonrisa" },
    { time: 218826, text: "If the world was ending <br> Si el mundo se estuviera acabando" },
    { time: 221120, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" },
    { time: 227718, text: "If the world was ending <br> Si el mundo se estuviera acabando" },
    { time: 230029, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" },
    { time: 236624, text: "Ooh, ooh" },
    { time: 239930, text: "I'd wanna be next to you <br> Quisiera estar a tu lado" }
];

let lyricsTimeouts = [];

// Imágenes del carrusel (agrega aquí las imágenes que deseas mostrar)
const imagenesCarrusel = [
   
    'foto1.jpg',
    'gif10.gif', 
    'foto9.jpg', 
    'foto20.jpg',
    'foto3.jpg',
    'foto15.jpg', 
    'gif1.gif',
    'foto2.jpg',
    'gif6.gif',
    'foto4.jpg',
    'foto5.jpg',
    'foto6.jpg',
    'gif5.gif',
    'foto7.jpg',
    'foto8.jpg',
    'foto10.jpg',
    'gif2.gif',
    'foto13.jpg',
    'foto14.jpg',
    'foto16.jpg',
    'gif3.gif',
    'foto17.jpg',
    'foto18.jpg',
    'gif7.gif',
    'foto20.jpg',
    'gif4.gif',
    'foto21.jpg',
    'foto12.jpg',
    'gif9.gif',
    'foto19.jpg',
    'gif8.gif',
    
];

// imágenes de fondo
const fondos = [
    'url("fondo.gif")',
    'url("fondo.gif")'
];

// Medidas de las imagenes de fondo


const fondoTitulo = [
    '',
    ''
]

// Aqui puedes EDITAR las listas de imágenes, GIFs y textos para cada transicion
const opciones = [
    { img: 'charmander.gif', text: 'He estado escuchando una cancion...❤️👀', gif: 'kirby_audi.gif' },
    { img: 'tite.jpeg', text: 'Y cuando la escucho pienso en ti...💕', gif: 'kirbyfeli.gif' }
];

const musicaSrc = "musica.mp3"; // Aqui se cambia el archivo por otra cancion
let index = 0;



// Función para cambiar contenido al presionar "Siguiente"
siguiente.addEventListener('click', () => {
    if (index < opciones.length) {
        imagen.src = opciones[index].img;
        texto.textContent = opciones[index].text;
        gif1.src = opciones[index].gif;
        gif2.src = opciones[index].gif;
       // body.style.backgroundImage = fondos[index];
       // body.style.backgroundSize = medidas[index];
        h1.style.backgroundColor = fondoTitulo[index];
        index++;
    }
    
    // Si ya se han hecho dos clics, ocultar "Siguiente" y mostrar "Play"
    if (index === opciones.length) {
        siguiente.style.display = 'none';
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'inline-block';

        musica.src = musicaSrc;
    }
});

// Función para cambiar las imágenes en el carrusel
function cambiarImagenCarrusel() {
   
    if (index < imagenesCarrusel.length) {
        imagen.src = imagenesCarrusel[index];
        index++;
    } else {
        index = 0; // Reiniciar el carrusel
    }
}

// Función para mostrar las lyrics sincronizadas
function showLyrics() {
    lyricsContainer.style.display = "block"; // Asegurar que las lyrics sean visibles

    lyrics.forEach(line => {
        const timeout = setTimeout(() => {
            lyricsContainer.innerHTML = line.text;
        }, line.time - musica.currentTime * 1000); // Ajusta al tiempo actual

        lyricsTimeouts.push(timeout); // Guarda el timeout
    });
}

// Función para reproducir la música al presionar "Play"
playBtn.addEventListener('click', () => {
    musica.play();
    
    // Iniciar el carrusel después de un pequeño delay (puedes ajustarlo)
    setTimeout(() => {
        // Mostrar el carrusel
        cambiarImagenCarrusel();
        carruselIntervalo = setInterval(cambiarImagenCarrusel, 3000); // Cambia la imagen cada 3 segundos
    }, 1000); // Espera 1 segundo para comenzar a cambiar las imágenes

    
    showLyrics();
});
musica.addEventListener("ended", function() {
    playBtn.style.display="none";
    pauseBtn.style.display="none";
    botonregalo.style.display = "inline-block"; // Mostrar el botón
});

// Función para pausar la música al presionar "Pause"
pauseBtn.addEventListener('click', () => {
    musica.pause();

    clearInterval(carruselIntervalo); // Detener el carrusel

    // Cancelar todos los timeouts activos
    lyricsTimeouts.forEach(timeout => clearTimeout(timeout));
    lyricsTimeouts = []; // Vaciar la lista de timeouts
});

botonregalo.addEventListener("click", ()=>{
    window.location.href = "programa.html";

});
