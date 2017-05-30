<?php
//if "from" is filled out, then send email
if (isset($_POST['from']))
  {
  $from = $_POST['from']; // sender
  $message = $_POST['feedback'];
  // message lines should not exceed 70 characters (PHP rule), so wrap it
  $message = wordwrap($message, 70);
  mail("josephljohnston@mac.com", "Feedback", $message, "From: $from");
  echo "Thank you for sending us feedback";
  }
else
  {
  echo "Please enter your email address to send feedback";
  }
?>