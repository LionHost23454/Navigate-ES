function descargarNaviGate() {
    // Simulación de inicio de descarga
    alert("Descarga iniciada. Redirigiendo...");

    // Crear un enlace dinámicamente
    var downloadLink = document.createElement('a');
    downloadLink.style.display = 'none';
    downloadLink.href = 'ruta_del_archivo.zip'; // Reemplaza con la ruta real del archivo
    downloadLink.download = 'nombre_archivo.zip'; // Reemplaza con el nombre que desees

    // Adjuntar el enlace al cuerpo del documento
    document.body.appendChild(downloadLink);

    // Simular un clic en el enlace para iniciar la descarga
    downloadLink.click();

    // Eliminar el enlace después de la descarga
    document.body.removeChild(downloadLink);
}
