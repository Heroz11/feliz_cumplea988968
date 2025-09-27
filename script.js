 // Manejo botón Siguiente (index -> fase2). Guardamos flag para permitir reproducir audio en la siguiente página.
const btnSiguiente = document.getElementById("btnSiguiente");
if (btnSiguiente) {
  btnSiguiente.addEventListener("click", () => {
    // marca que el usuario hizo la interacción
    sessionStorage.setItem('playAudio', '1');
    window.location.href = "fase2.html";
  });
}

// Botón Abrir regalo (fase2 -> fase3)
const btnRegalo = document.getElementById("btnRegalo");
if (btnRegalo) {
  btnRegalo.addEventListener("click", () => {
    // dejamos el flag para que el audio pueda empezar si no está sonando
    sessionStorage.setItem('playAudio', '1');
    window.location.href = "fase3.html";
  });
}

// Al cargar cualquier página, si existe bgMusic y el usuario hizo click antes, lo empezamos
window.addEventListener('DOMContentLoaded', () => {
  const audio = document.getElementById('bgMusic');
  if (audio && sessionStorage.getItem('playAudio')) {
    audio.play().catch(()=>{ /* si el navegador bloquea, queda en silencio hasta otra interacción */ });
    sessionStorage.removeItem('playAudio');
  }

  // En fase3: abrir caja
  const abrirCaja = document.getElementById('abrirCaja');
  const regalo = document.getElementById('regalo');
  const descargar = document.getElementById('descargar');
  if (abrirCaja && regalo && descargar) {
    abrirCaja.addEventListener('click', () => {
      abrirCaja.style.display = 'none';
      regalo.style.display = 'block';
      descargar.style.display = 'inline-block';
    });
  }
});
