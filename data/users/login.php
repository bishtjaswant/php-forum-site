<?php

require_once '../../db/db.php';
require_once '../utility/emailAvailability.php';



$data = [
    "email" => $_POST['login_email'],
    "password" => $_POST['login_password']
];


$sql = "SELECT `firstname`,`email`,`password` FROM `users` WHERE `users`.`email`=:email";
$stmt = $pdo->prepare($sql);
$stmt->execute( ['email'=> $data['email']  ]);

if ($stmt->rowCount()  > 0) {
    $row = $stmt->fetch();

    //user's  password verify
    if (password_verify($data['password'], $row['password']) ) {
        echo json_encode(['status' => true, 'msg' => 'loggedin',data=>$row['firstname']]);
    } else {
        echo json_encode(['status' => false, 'msg' => 'Invalid password']);
    }
} else {
    echo json_encode(['status' => false, 'msg' => 'Invalid email']);
}
