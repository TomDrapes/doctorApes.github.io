<?php
    $fname = $_POST['firstname'];
    $lname = $_POST['lastname'];
    $visitor_email = $_POST['mail'];
    $message = $_POST['subject'];

    $email_from = "doctorApes Portfolio";
    $email_subject = "New Form submission";
    $email_body = "You have received a new message from the user $fname $lname.\n".
    "Here is the message:\n $message".

    $to = "tjdrapes@hotmail.com";
    $headers = "From: $email_from \r\n";
    $headers .= "Reply-To: $visitor_email \r\n";
    mail($to,$email_subject,$email_body,$headers);
?>