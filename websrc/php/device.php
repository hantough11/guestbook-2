<?php
$step = $_POST['step'];

$clientId = "792310793065-0512ej6ifd55488rlieom555oi05ero4.apps.googleusercontent.com";
$clientSecret = "_ouLyXcQ9XoFQkmaIlY2C7cj";

if($step == 1)
{
  $context = array(
    'http' => array(
      'method' => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => "client_id=" . $clientId . "&scope=email%20profile%20https://www.googleapis.com/auth/youtube"
    )
  );

  $ctx = stream_context_create($context);
  $result = file_get_contents("https://accounts.google.com/o/oauth2/device/code", false, $ctx);
  echo $result;
}

if($step == 2)
{
  $device_code = $_POST['code'];
  $data = "client_id=" . $clientId . "&client_secret=" . $clientSecret . "&code=" . $device_code . "&grant_type=http://oauth.net/grant_type/device/1.0";
  $context = array(
    'http' => array(
      'method' => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => $data
    )
  );

  $ctx = stream_context_create($context);
  $result = file_get_contents("https://accounts.google.com/o/oauth2/token", true, $ctx);
  echo $result;
}

if( $step == 3 )
{
  $token = $_POST['token'];
  $r_token = $_POST['r_token'];
  $data = "https://www.googleapis.com/plus/v1/people/me?access_token=" . $token;
  $result = file_get_contents($data);
  $result = json_decode($result);
  setcookie("user_email", $result->emails[0]->value, time()+3600*24*7);
  setcookie("refresh_token", $r_token, time()+3600*24*7);
}

if($step == 4)
{
  if( $_COOKIE['user_email'] == "hantough11@gmail.com" || $_COOKIE['user_email'] == "getcoup@gmail.com" || $_COOKIE['user_email'] == "popontv@gmail.com" || $_COOKIE['user_email'] == "popon@petaframe.com")
  {
    echo $_COOKIE['user_email'];    
  }
}

// 플레이 리스트 가져오기
if($step == 5)
{
  $token = $_COOKIE['refresh_token'];
  $data = "client_id=" . $clientId . "&client_secret=" . $clientSecret . "&refresh_token=" . $token . "&grant_type=refresh_token";
  $context = array(
    'http' => array(
      'method' => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => $data
    )
  );

  $ctx = stream_context_create($context);
  $result = file_get_contents("https://accounts.google.com/o/oauth2/token", true, $ctx);
  $result = json_decode($result);
  

  $data = "https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&mine=true&maxResults=50&access_token=" . $result->access_token;
  $result = file_get_contents($data);
  echo $result;
}

if($step == 6)
{
  $token = $_COOKIE['refresh_token'];
  $data = "client_id=" . $clientId . "&client_secret=" . $clientSecret . "&refresh_token=" . $token . "&grant_type=refresh_token";
  $context = array(
    'http' => array(
      'method' => 'POST',
      'header'  => 'Content-type: application/x-www-form-urlencoded',
      'content' => $data
    )
  );

  $ctx = stream_context_create($context);
  $result = file_get_contents("https://accounts.google.com/o/oauth2/token", true, $ctx);
  $result = json_decode($result);

  $id = $_POST['id'];
  $data = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=" .$id ."&access_token=" . $result->access_token;
  $result = file_get_contents($data);
  echo $result;
}
?>