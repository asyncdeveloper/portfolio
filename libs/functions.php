<?php

function sendMail($request) {
    require "PHPMailer/PHPMailer.php";
    require "PHPMailer/SMTP.php";

    $mailHost = 'mail.asyncdeveloper.com';
    $mailName = 'Oluwaseyi Adeogun';
    $mailUsername = 'contact@asyncdeveloper.com';
    $mailPassword = 'nbvhgfytrm98';

    // Instantiation and passing `true` enables exceptions
    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->isSMTP();                             // Set mailer to use SMTP
        $mail->Host       = $mailHost;              // Specify main and backup SMTP servers
        $mail->SMTPAuth   = true;                   // Enable SMTP authentication
        $mail->Username   = $mailUsername;          // SMTP username
        $mail->Password   = $mailPassword;          // SMTP password
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;

        //Recipients
        $mail->setFrom($request['email'], $request['name']);
        $mail->addAddress($mailUsername, $mailName);

        // Content
        $mail->isHTML(true);
        $mail->Subject = $request['subject'];
        $mail->Body    = $request['message'];
        $mail->AltBody = $request['message'];
        $mail->send();
        return 'Message has been sent';
    } catch (Exception $e) {
        return "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}

function validateContactForm($request) {
    $errors = null ;

    if(strlen($request['name']) === 0) {
        $errors.="Name is required <br>";
    }

    if(strlen($request['email']) > 0) {
        if(!filter_var($request['email'],FILTER_VALIDATE_EMAIL)) {
            $errors.="Invalid email address <br>";
        }
    }else {
        $errors.="Email address is required <br>";
    }

    if(strlen($request['subject']) === 0) {
        $errors.="Subject is required <br>";
    }

    if(strlen($request['message']) === 0) {
        $errors.="Message is required <br>";
    }

    return $errors;
}