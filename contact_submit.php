 <?php

$name = $_POST['name'] ?? "";
$email = $_POST['email'] ?? "";
$message = $_POST['message'] ?? "";

// Basic validation
if (empty($name) || empty($email) || empty($message)) {
    echo "All fields are required! <br><br>";
    echo "<a href='contact.html'>Go Back</a>";
    exit;
}
echo "<h2>Your message has been received!</h2>";
echo "<p><strong>Name:</strong> $name</p>";
echo "<p><strong>Email:</strong> $email</p>";
echo "<p><strong>Message:</strong> $message</p>";

echo "<br><a href='contact.html'>Go Back</a>";
?>

