<?php
	header('Access-Control-Allow-Origin: *');
	$servername = "fdb33.awardspace.net";
	$username = "4004037_abc";
	$password = "awardspace4004037";
	$dbname = "4004037_abc";

	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
		echo "Not success";
	die("Connection failed: " . $conn->connect_error);
	}
	else {
		echo "Connection successful";
	}

	$sql = "Insert into Student Values($user)";

	if ($conn->query($sql) === TRUE) {
	echo "New record created successfully";
	} else {
	echo "Error: " . $sql . "<br>" . $conn->error;
	}

	$conn->close();
?>
