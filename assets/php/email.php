<?php
//  email.php

    session_start();

    $errors = array();  // hold validation errors 
    $return = array();    // hold data to be passed back

    //  check if form submitted ==============================================================
    if( !empty( $_POST['submit'] )) {
        
        // form attributes
        $data = array(
            "email"     =>  $_POST['email'],
            "message"   =>  $_POST['message']
        );   
        
        // validate form data ================================================
        foreach($data as $key => $value){
            // check if empty
            if( empty ( $value ) ) {
                $return['errors'][$key] = "Please enter ".$key.'.';   
            }
            // check if valid email 
            if( $key == 'email') {
                if( !validEmail($data[$key]) ) {
                    $return['errors'][$key] = "Please enter valid email. (ex: superman@avengers.com)";    
                }
            }
        } // foreach
        
        // if no errors, attempt email =======================================
        if( empty($return['errors']) ) {
            if( emailSent($data) ) {
                $return['success'] = true;  
            } else {
                $return['success'] = false;
            } 
        }
    } else {
        $return['errors']['submit'] = false;   
    }
    
    echo json_encode($return); 
    

    //  FUNCTIONS ============================================================================

    function validEmail($email) {
        return filter_var( $email, FILTER_VALIDATE_EMAIL );       
    }

    function emailSent($data) {
        // email attributes
        $to =       'kelleyscanlon@gmail.com';
        $subject =  'Portfolio Comment';
        $message =  $data['message'];
        $headers =  'From: '.$data['email'];
        
        return mail($to, $subject, $message, $headers);
    }
    
?>