<?php
    function json_to_obj(): array {
        return json_decode(file_get_contents("php://input"), true);
    }

    $URL = "mysql:host=localhost:3306;dbname=G4";
    $USERNAME = "root";
    $PASSWORD = "password";
    $pdo = new PDO($URL, $USERNAME, $PASSWORD);
?>