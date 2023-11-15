function updateClock() {
    const horas = document.getElementById("horas");
    const minutos = document.getElementById("minutos");
    const segundos = document.getElementById("segundos");

    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const horasAngulo = (hours * 360) / 12 + (minutes * 360) / (12 * 60);
    const minutosAngulo = (minutes * 360) / 60 + (seconds * 360) / (60 * 60);
    const segundosAngulo = (seconds * 360) / 60;

    horas.style.transform = `rotate(${-horasAngulo}deg)`;
    minutos.style.transform = `rotate(${-minutosAngulo}deg)`;
    segundos.style.transform = `rotate(${-segundosAngulo}deg)`; // Corregir el signo aquí

}

setInterval(updateClock, 1000);
updateClock; // Llamada inicial al cargar la página
