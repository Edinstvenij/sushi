<?php

// $name = $_POST['name'];
$phone = $_POST['phone'];
// $msg = $_POST['msg'];
$token = "5291152609:AAEyvF2ja3gnCM8_nqxfGru2dx9SCQBFm7U";
$chat_id = "-714061758";
$arr = array(
  // 'Имя пользователя: ' => $name,
  'Телефон: ' => $phone,
  // 'Сообщение:' => $msg
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

header('Location: ../index.html');
echo " <script src='../js/telegram.js'></script> "
?>