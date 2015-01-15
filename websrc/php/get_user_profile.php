<?php
  require_once 'get_user_email.php';
  
  if( isset($user_name))
  {
    $result = file_get_contents("http://picasaweb.google.com/data/entry/api/user/".$user_name."?alt=json", false);
	  $user_dejson = json_decode($result);	
    $image_url = $user_dejson->{'entry'}->{'gphoto$thumbnail'}->{'$t'};
    $displayName = $user_dejson->{'entry'}->{'gphoto$nickname'}->{'$t'};
  }

  echo("<script language='javascript'>parent.window.php_update_user_name(\"$displayName\");</script>");
	echo("<script language='javascript'>parent.window.php_update_user_image(\"$image_url\");</script>");
?>