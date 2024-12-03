<?php
$user = "root";
$password = "";
$database = "mknrdb";
$servername = "localhost";

$mysqli = new mysqli($servername, $user, $password, $database);

// Check for connection errors
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$sql = "SELECT * FROM contact ORDER BY full_name DESC";
$result = $mysqli->query($sql);

// Check if the query was successful
if (!$result) {
    die("Query failed: " . $mysqli->error);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>View Info</title>
    <link rel="stylesheet" href="view-info.css">
</head>
<body>
    <section>
        <h1>Contact Information</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Message</th>
                <th>Province</th>
                <th>City</th>
                <th>Barangay</th>
            </tr>

            <?php
            // Fetch and display each row of data
            while ($row = $result->fetch_assoc()) {
            ?>
            <tr>
                <td><?php echo htmlspecialchars($row['full_name']); ?></td>
                <td><?php echo htmlspecialchars($row['phone_number']); ?></td>
                <td><?php echo htmlspecialchars($row['email']); ?></td>
                <td><?php echo htmlspecialchars($row['message']); ?></td>
                <td><?php echo htmlspecialchars($row['province']); ?></td>
                <td><?php echo htmlspecialchars($row['city']); ?></td>
                <td><?php echo htmlspecialchars($row['barangay']); ?></td>
            </tr>
            <?php
            }
            $mysqli->close(); // Close the connection after the loop
            ?>
        </table>
    </section>
</body>
</html>
