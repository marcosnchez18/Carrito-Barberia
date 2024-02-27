<?php
if (isset($_POST['id']) && isset($_POST['nombre']) && isset($_POST['img']) && isset($_POST['precio'])) {
    $id = $_POST['id'];
    $nombre = $_POST['nombre'];
    $img = $_POST['img'];
    $precio = number_format($_POST['precio'], 2) . '€';
    $info_producto_formateada = sprintf("%-5s %-60s %-100s %10s\n", $id, $nombre, $img, $precio);
    $ruta_archivo = 'articulos_vendidos.txt';
    if ($archivo = fopen($ruta_archivo, 'a')) {
        fwrite($archivo, $info_producto_formateada);
        fclose($archivo);
        echo json_encode(['message' => '¡Artículo guardado!']);
    } else {
        echo json_encode(['error' => 'Error al abrir el archivo']);
    }
}
?>
