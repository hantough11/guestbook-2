<?php
//session_start();

	require_once 'google/appengine/api/users/User.php';
	require_once 'google/appengine/api/users/UserService.php';
	
	use google\appengine\api\users\User;
	use google\appengine\api\users\UserService;
  
  
  $user_email = $_COOKIE['user_email'];
  
	if ($user_email != "") {	
		//echo "Loading....<br>";
		//echo "set<br><br>";		
  	echo "<script>document.location.href = './main';</script>";
	} 
	else {
		//echo "Loading....<br>";
		//echo "not set";
		$signin_url = UserService::createLoginUrl('/');
		echo "<script>document.location.href = '".$signin_url."';</script>";		
	}	
?>