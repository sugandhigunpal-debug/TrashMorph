<?php
session_start();

$email = $_POST['email'] ?? "";
$password = $_POST['password'] ?? "";

// Simple validation
if (empty($email) || empty($password)) {
    echo "Please enter both email and password! <br><br>";
    echo "<a href='profile.html'>Go Back</a>";
    exit;
}
$valid_email = "test@gmail.com";
$valid_password = "12345";

// Check login
if ($email === $valid_email && $password === $valid_password) {

    $_SESSION['user'] = $email;   
    header("Location: index.html"); 
    exit;
} 
else {
    echo "Invalid login! Wrong email or password.<br><br>";
    echo "<a href='profile.html'>Try Again</a>";
}
?>

