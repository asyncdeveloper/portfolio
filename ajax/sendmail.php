<?php
header('Content-type: application/json');

$request = $_POST;
$required = array('name', 'email', 'subject' , 'message');
$response = [];

if (count(array_intersect_key(array_flip($required), $request)) !== count($required)) {
    $response = [ 'code' => 2, 'message' => 'Kindly fill in all inputs'];
    echo json_encode($response);
    die();
}

//Validate Form
require_once "../libs/functions.php";

$errors = validateContactForm($request);
if($errors !== null) {
    $response = ['code' => 2, 'message' => $errors];
    echo json_encode($response);
    die();
}

$mailResponse = sendMail($request);
if($mailResponse !== 'Message has been sent') {
    $response = [ 'code' => 3, 'message' => $mailResponse ];
    echo json_encode($response);
    die();
}

$response = [ 'code' => 1, 'message' => $mailResponse];
echo json_encode($response);
die();