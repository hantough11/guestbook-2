<?php
	require_once 'google/appengine/api/users/User.php';
	require_once 'google/appengine/api/users/UserService.php';
	
	use google\appengine\api\users\User;
	use google\appengine\api\users\UserService;

	$user = UserService::getCurrentUser();
  
	$user_enjson = json_encode($user);
	$user_dejson = json_decode($user_enjson, true);	
	
	$user_email = $user_dejson["email"];
  
  if(isset($_COOKIE['user_email']) && !isset($user_email))
  {
    $user_email = $_COOKIE['user_email'];
  }
  $user_name = explode("@", $user_email);
  $user_name = $user_name[0];
    
  if( $user_email == "hellogaon@gmail.com" || $user_email == "hantough11@gmail.com" || $user_email == "getcoup@gmail.com" || $user_email == "popontv@gmail.com" || $user_email == "popon@petaframe.com" || $user_email == "popontest@gmail.com" || $user_email == "petaframe@gmail.com" || $user_email == "alvin.arief@gmail.com" || $user_email == "yudi.widyarto@gmail.com")
  {
  }
  else
  {
    //echo "<script>alert('".$user_email."');</script>";
	  echo "<script>alert('허용된 계정이 아닙니다');</script>";
    $signout_url = UserService::createLogoutUrl('/');
    echo "<script>document.location.href = '".$signout_url."';</script>";	
  }
 
	//echo "<script>alert('".$user_email."');</script>";
?>