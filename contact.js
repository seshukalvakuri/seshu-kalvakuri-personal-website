function checkform(){
    if(document.getElementById("fname").value == ""){
    alert("please enter your firstname");
    document.getElementById("fname").focus();

    return false;
    }
    else if(document.getElementById("lname").value == ""){
       
        alert("please enter your lastname");
        document.getElementById("lname").focus();
        return false;
    }
    else if(!(document.getElementById("m").checked) && !(document.getElementById("f").checked) && !(document.getElementById("o").checked)){
       alert("please choose one option");
        return false;
    }
    else if(document.getElementById("email").value == ""){
       
        alert("please enter your email Id");
        document.getElementById("email").focus();
        return false;
    }
    else if(document.getElementById("phonenumber").value == ""){
        
        alert("please enter your phone number");
        document.getElementById("phone  number").focus();
        return false;
    }
    
    else{
        return true;
    }
}