const form =document.getElementById("form");
const  username =document.getElementById("username");
const email =document.getElementById("email");
const phone =document.getElementById("phone");
const password =document.getElementById("password");
const cpassword =document.getElementById("cpassword"); 
 
form.addEventListener('submit', (events) =>{
    events.preventDefault();
    validate();
});

// final message..!
 
const finalSuccessMsg = () =>{
    let parentEle = document.getElementsByClassName('form-control');
    var count=0; var totalLen=parentEle.length;
    for(var i=0;i<parentEle.length;i++){
       if(parentEle[i].className === 'form-control success '){
         count++;
        }
    }
    if(count==totalLen){
        setTimeout(() => {
            alert('form submitted successfully...!');
        }, 1000);
}
    else
    return false;
}



// defining the validate function...!
const validate = () => {
  const  usernameVal = username.value.trim();  // trim() remove the left and right side space of the contents.
  const emailVal = email.value.trim();
  const phoneVal = phone.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

//    validate user name...!
    if (usernameVal === ""){
        setErrorMsg(username,'username cannot be blank.!');
    } else if(usernameVal.length < 3){
     setErrorMsg(username,'username should have atleast 3 character.!');
    } else{
        setSuccessMsg(username);
    }

    //    validate email...!
    if (emailVal === ""){
        setErrorMsg(email,'email cannot be blank.!');
    } else if(!isEmail(emailVal)){
     setErrorMsg(email,'invalid email.!');
    } else{
        setSuccessMsg(email);
    }

     // validate phone Number..!
     if(phoneVal.length < 10) 
        setErrorMsg(phone,"invalid number..!");
        else
     setSuccessMsg(phone);

    //   validate password..!
    var p=0;
    if(passwordVal==="") 
    setErrorMsg(password,'password cannot be blank..!');
    else{
    for( var i=0;i<passwordVal.length;i++){
     if(passwordVal[i] != "@" &&  passwordVal[i] != "#" && passwordVal[i] != "$" &&  passwordVal[i] != "&" &&  passwordVal[i] != "%" ) 
     p++;
     else{
        if(i===0){
        setErrorMsg(password,'first value should not be any special character'); return }
     }
    }
    if(p===passwordVal.length)
     setErrorMsg(password,'must include any @,#,$,%,& special character..!');  
     else if(passwordVal.length < 5 )
    setErrorMsg(password,"password should have atleast 5 character..!"); 
    else
    setSuccessMsg(password);
     }


    // confirm password..!
    if(cpasswordVal===passwordVal && cpasswordVal!="")
    setSuccessMsg(cpassword);
    else if(cpasswordVal ==="");
    else
    setErrorMsg(cpassword,'password doesnot matched..!'); 


    finalSuccessMsg(); 
   
    }
    // Hoisting property only uplicable for treditional function.even not for annonymous & arrow function ..!
    function isEmail (emailVal){
        if(emailVal.indexOf("@") === 0) return false;
    var totalLength= emailVal.length;
    if(emailVal.indexOf('.') !== totalLength-4) return false;
     return true;
    }

     function setErrorMsg (input, errorValue) {
        const parentOfInput =  input.parentElement; 
       const small =  parentOfInput.querySelector('small');
       parentOfInput.className = "form-control error ";
       small.innerText = errorValue;      
    }
    function setSuccessMsg (input) {
        const parentOfInput =  input.parentElement; 
       parentOfInput.className = "form-control success ";   
    }

