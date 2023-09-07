<?php
if (isset($_POST['send'])) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    $to = "avanishv73@gmail.com";
    $subject = "Enquiry from Portfolio Website.";
    $txt = $msg;
    $headers = "From:" . $email;

    mail($to, $subject, $txt, $headers);

}
?>