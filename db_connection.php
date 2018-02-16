<?php

// Connecting, selecting database
$mysqli = new mysqli('mysqlHostnameOrIPHere', 'mysqlUserNameHere', 'mysqlPasswordHere', 'mysqlDbNameHere');

// Check errors
if ( $mysqli->connect_errno ) {
  echo $mysqli->connect_errno, ' ', $mysqli->connect_error;
}

?>
