<?php
session_start();
require_once 'db.php';

unset($_SESSION['error_login']);

$email = $_POST['email'];
$password = $_POST['password'];

$password = md5($password);

$result = mysqli_query($conn, "SELECT * FROM `users` WHERE `email`= '$email' 
AND `password` = '$password'");
$user = $result->fetch_assoc();

if(!($user)){
    $_SESSION['error_login'] = 'Логин или пароль набраны не правильно';
    header('Location: ../../login.html ');
    exit();
}

$_SESSION['user'] = $user;

header('Location: ../../personal.html');

?>