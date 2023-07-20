<?php

include('connection.php');

$username = $_POST['username'];
$password = $_POST['password'];


$query = $mysqli->prepare('select user_id, username, password, first_name, last_name
from users
where username=?');

$query->bind_param('s', $username);
$query->execute();

$query->store_result();
$query->bind_result($id, $username, $stored_password, $first_name, $last_name);
$query->fetch();

$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if ($password === $stored_password) {
        $response['status'] = 'Logged In';
        $response['user_id'] = $id;
        $response['first_name'] = $first_name;
        $response['username'] = $username;
    } else {
        $response['status'] = "Wrong Password";
    }
}
echo json_encode($response);