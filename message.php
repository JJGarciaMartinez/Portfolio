<?php
    $nombre = $_POST['nombre'];
    $numero = $_POST['numero'];
    $correo = $_POST['correo'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['mensaje'];

    if(!empty($correo) && !empty($mensaje)){
        if (filter_var($correo, FILTER_VALIDATE_EMAIL)) {
            $receptor = "contact_me@juangarcia-dev.com";
            $subject = "De: $nombre <$correo>. Asunto: $asunto";
            $body = "Nombre: $nombre\nEmail: $correo\nTelefono: $numero\n\nMensaje: $mensaje,\nAtt: $nombre";
            $sender = "From: $correo";
            if (mail($receptor, $subject, $body, $sender)){
                echo "Tu mensaje ha sido enviado correctamente!";
            }else{
                echo "Lo siento, no se ha podido enviar tu correo!";
            }
        }else{
            echo "Introduce un correo valido!";
        }
    }else{
        echo "El correo y mensaje son requeridos!";
    }
?>