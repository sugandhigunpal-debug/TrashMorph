 <?php
session_start();

$connection = new mysqli("localhost", "root", "", "smartwaste");

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

$email = $_POST['email'];
$password = $_POST['password'];

$query = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $connection->query($query);

if ($result->num_rows > 0) {
    $_SESSION['user'] = $email;
    header("Location: index.html");
} else {
    echo "Invalid Login!";
}
?>
