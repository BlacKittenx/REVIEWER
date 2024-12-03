<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insert Page</title>
    <link rel="stylesheet" href="insert.css">
</head>
<body>
    <div class="container">
        <?php
            $conn = mysqli_connect("localhost", "root", "", "mknrdb");

            if ($conn === false) {
                die ("ERROR: Could not connect" . mysqli_connect_error());
            }

            $full_name = $_REQUEST['name'];
            $phone_number = $_REQUEST['phone'];
            $email = $_REQUEST['email'];
            $message = $_REQUEST['message'];
            $province = $_REQUEST['province'];
            $city = $_REQUEST['city'];
            $barangay = $_REQUEST['barangay'];

            $sql = "INSERT INTO contact VALUES ('$full_name', '$phone_number', '$email', '$message', '$province', '$city', '$barangay')";

            if (mysqli_query($conn, $sql)) {
                echo "<h3>Data stored successfully</h3>";

                echo "<pre>$full_name\n $phone_number\n $email\n $message\n $province\n $city\n $barangay</pre>";
            }

            else {
                echo "<div class='error-message>HUSH! Sorry, there was an issue with the query." . mysqli_error($conn);
            }


            mysqli_close($conn);
        ?>
    </div>
</body>
</html>