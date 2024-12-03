<?php
    $servername = "localhost";
    $username  = "root";
    $password = "";
    $database = "mknrdb";

    $conn = new mysqli($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die ("Connect Error" . $conn->connect_error);
    }
?>