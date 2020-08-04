function validateForm()                                    
{ 
    var name = document.forms["myform"]["fullName"];               
    var email = document.forms["myform"]["eMail"];    
    var phone = document.forms["myform"]["phoneNumber"];  
    //var gender = document.forms["myform"]["gender"];  
    var username =  document.forms["myform"]["username"];  
    var password = document.forms["myform"]["password"];  
     
   
    if (name.value == "")                                  
    { 
        window.alert("Please enter your name."); 
        name.focus(); 
        return false; 
    } 
   
    if (address.value == "")                               
    { 
        window.alert("Please enter your address."); 
        address.focus(); 
        return false; 
    } 
       
    if (email.value == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (phone.value == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 
    
    if (usename.value == "")                  
    { 
        alert("Please enter username."); 
        username.focus(); 
        return false; 
    } 

    if (password.value == "")                        
    { 
        window.alert("Please enter your password"); 
        password.focus(); 
        return false; 
    } 
   
    
   
    return true; 
}