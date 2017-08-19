<?php
if(isset($_POST['email'])) {

// Debes editar las próximas dos líneas de código de acuerdo con tus preferencias
$email_to = "info@cobertec.com";
$email_subject = "Contacto desde el sitio web";

// Aquí se deberían validar los datos ingresados por el usuario
if(!isset($_POST['first_name']) ||
!isset($_POST['last_name']) ||
!isset($_POST['email']) ||
!isset($_POST['phone_number']) ||
!isset($_POST['message']) ||
!isset($_POST['DNI'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}

$email_message = "Detalles del formulario de contacto:\n\n";
$email_message .= "Nombre: " . $_POST['first_name'] . "\n";
$email_message .= "Apellido: " . $_POST['last_name'] . "\n";
$email_message .= "E-mail: " . $_POST['email'] . "\n";
$email_message .= "Teléfono: " . $_POST['phone_number'] . "\n";
$email_message .= "DNI: " . $_POST['DNI'] . "\n";
$email_message .= "Fecha de nacimiento: " . $_POST['date_of_birth'] . "\n";
$email_message .= "Aclaraciones: " . $_POST['message'] . "\n\n";
$email_from =$_POST['email'];


// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);

echo "¡El formulario se ha enviado con éxito!";
}
?>
