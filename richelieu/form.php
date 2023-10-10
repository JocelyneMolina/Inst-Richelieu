<?php 
include("conexion.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener los valores del formulario
        $nombre = $_POST["nombre"];
        $apellidos = $_POST["apellidos"];
        $telefono = $_POST["telefono"];
        $email = $_POST["email"];
        $fecha = $_POST["fecha_nacimiento"];
        $direccion = $_POST["direccion"];
        $ciudad = $_POST["ciudad"];
        $pais = $_POST["pais"];
        $nacionalidad = $_POST["nacionalidad"];
        $visa = $_POST["visa"];

        

        $res = mysqli_query($conn,"INSERT INTO info (nombre, apellidos, tel, mail, fecha, direc, ciudad, pais, visa, nacio)
        VALUES ('$nombre', '$apellidos', '$telefono', '$email', '$fecha', '$direccion', '$ciudad', '$pais', '$visa', '$nacionalidad')");
        echo '<script type="text/javascript">
               alert("¡Datos agregados correctamente!");
               window.location = "inscripcion.html"; // Redirigir a otra página después de mostrar la alerta
           </script>';

        // Cerrar la conexión
        $conexion->close();
    }
    ?>