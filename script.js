//const form =document.getElementById("form");
const gender =document.getElementById("gend-f");
//const form =document.getElementById("form");

form.addEventListener('submit',e=>{
    e.preventDefault();
    checkinput();
});
function checkinput()  {
  /* if( validatefname()==false){
    return false;
   }
   else{
    validatelname();
   }
   if( validatelname()==false){
    return false;
   }
   else{
    validatemail();
   }
   if( validatemail()==false){
    return false;
   }
   else{
    validatenum();
   }
   if( validatenum()==false){
    return false;
   }
   else{
    validateaddress();
   }
   if( validateaddress()==false){
    return false;
   }
   else{
    validatepincode();
   }
   if( validatepincode()==false){
    return false;
   }
   else{
    validatedistrict();
   }
   if( validatedistrict()==false){
    return false;
   }
   else{
    validatestate();
   }
   if( validatestate()==false){
    return false;
   } 
   else{
    validatelang();
   }
   if(validatelang()==false){
    return false;
   } 
   else{
   
 
    document.write("fname:"+fnameF.value+"<br>");
    document.write("lname:"+lnameF.value+"<br>");
    document.write("email:"+mailF.value+"<br>");
    document.write("Phone no:"+numF.value+"<br>");
    document.write("Address:"+addressF.value+"<br>");
    document.write("Pincode:"+pincodeF.value+"<br>");
    document.write("District:"+districtF.value+"<br>");
    document.write("state:"+stateF.value+"<br>");
    document.write("lanugage:"+langu+"<br>");

}*/
var genderValue = document.myform.gender.value;

//-------------langu----------------------
    var checkboxes =
    document.getElementsByName('check');  
    var n=0;
    var langu = "";
    for (var i = 0; i < checkboxes.length; i++) {
   
        if (checkboxes[i].checked) {
        langu += checkboxes[i].value +""+",";
        n++;
    }
    }
    if(n==0){
    alert('Fill any one Language');
    return false;
    }
//-------------gender---------------  
    var gender = form.querySelectorAll('input[name="gender"]:checked');
if (!gender.length) {
alert('Please select Gender');
return false;
}
//-------------print---------------  

    document.write("fname:"+fnameF.value+"<br>");
    document.write("lname:"+lnameF.value+"<br>");
    document.write("email:"+mailF.value+"<br>");
    document.write("Phone no:"+numF.value+"<br>");
    document.write("Address:"+addressF.value+"<br>");
    document.write("Pincode:"+pincodeF.value+"<br>");
    document.write("District:"+districtF.value+"<br>");
    document.write("state:"+stateF.value+"<br>");
    document.write("lanugage:"+langu+"<br>");
    document.write("Gender:"+genderValue+"<br>");
}    
var fnameL=document.getElementById("fname-l");
var fnameF=document.getElementById("fname-f");
var fnameE=document.getElementById("f-err");
function validatefname(){
    if(fnameF.value ===''){
        fnameE.innerHTML='Firstname cannot be blank';
        fnameF.style.borderColor="red";
        return false;
    
    }
    else if(fnameF.value.length<3 || fnameF.value.length>10 ){
        fnameE.innerHTML='Min 3 to Max 10 Characters in First name';
        fnameF.style.borderColor="red";
        return false;
    }
    else{
        fnameE.innerHTML = "";
        fnameF.style.borderColor = "green";
        return true;

    }
   
}

var lnameL=document.getElementById("lname-l");
var lnameF=document.getElementById("lname-f");
var lnameE=document.getElementById("l-err");
function validatelname(){
    if(lnameF.value ===''){
        lnameE.innerHTML='lasttname cannot be blank';
        lnameF.style.borderColor="red";
        return false;
    
    }
    else{
        lnameE.innerHTML = "";
        lnameF.style.borderColor = "green";
        return true;
    }   
}

var mailL=document.getElementById("mail-l");
var mailF=document.getElementById("mail-f");
var mailE=document.getElementById("mail-err");
function validatemail(){
    if(mailF.value ===''){
        mailE.innerHTML='Mail cannot be blank';
        mailF.style.borderColor="red";
        return false;
    
    }
    else if(!mailF.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
        mailE.innerHTML='Enter a vaild mail';
        mailF.style.borderColor="red";
        return false;
    }
    else{
        mailE.innerHTML = "";
        mailF.style.borderColor = "green";
        return true;
    }   
}

var numL=document.getElementById("num-l");
var numF=document.getElementById("num-f");
var numE=document.getElementById("num-err");
function validatenum(){
    if(numF.value ===''){
        numE.innerHTML='Phone no cannot be blank';
        numF.style.borderColor="red";
        return false;
    
    }
    else if((isNaN(numF.value)||numF.value.length>10||numF.value.length<10)){
        numE.innerHTML='Enter a vaild phone no min 10 char';
        numF.style.borderColor="red";
        return false;
    }
    else{
        numE.innerHTML = "";
        numF.style.borderColor = "green";
        return true;
    }   
}

var addressL=document.getElementById("address-l");
var addressF=document.getElementById("address-f");
var addressE=document.getElementById("address-err");
function validateaddress(){
    if(addressF.value ===''){
        addressE.innerHTML='Address  cannot be blank';
        addressF.style.borderColor="red";
        return false;
    
    }
    else if(!addressF.value.match(/^[a-z A-Z 0-9.]*$/)){
        addressE.innerHTML='Enter a vaild address char';
        addressF.style.borderColor="red";
        return false;
    }
    else{
        addressE.innerHTML = "";
        addressF.style.borderColor = "green";
        return true;
    }   
}

var pincodeL=document.getElementById("pincode-l");
var pincodeF=document.getElementById("pincode-f");
var pincodeE=document.getElementById("pincode-err");
function validatepincode(){
    if(pincodeF.value ===''){
        pincodeE.innerHTML='pincode cannot be blank';
        pincodeF.style.borderColor="red";
        return false;
    
    }
    else if(pincodeF.value.length>6){
        pincodeE.innerHTML='Enter a  pincode min 6 char';
        pincodeF.style.borderColor="red";
        return false;
    }
    else{
        pincodeE.innerHTML = "";
        pincodeF.style.borderColor = "green";
        return true;
    }   
}
var districtL=document.getElementById("district-l");
var districtF=document.getElementById("district-f");
var districtE=document.getElementById("district-err");
function validatedistrict(){
    if(districtF.value ===''){
        districtE.innerHTML='district cannot be blank';
        districtF.style.borderColor="red";
        return false;
    
    }
    else if(!districtF.value.match(/^[a-z A-Z]*$/)){
        districtE.innerHTML='Enter a  district in char';
        districtF.style.borderColor="red";
        return false;
    }
    else{
        districtE.innerHTML = "";
        districtF.style.borderColor = "green";
        return true;
    }   
}

var stateL=document.getElementById("state-l");
var stateF=document.getElementById("state-f");
var stateE=document.getElementById("state-err");
function validatestate(){
   
    if(stateF.value ==='-1'){
        stateE.innerHTML='state cannot be blank';
        stateF.style.borderColor="red";
        return false;
    
    }
    else{
        stateE.innerHTML = "";
        stateF.style.borderColor = "green";
        return true;
    }   
}



//document.write("lanugage:"+langu+"<br>");

/*function validategender(){
    var gender = form.querySelectorAll('input[name="gender"]:checked');
if (!gender.length) {
alert('Please select Gender');
return false;
}
}
--------------------------------check----------
var check=document.getElementById("che");
var langE = document.getElementById("lang-err");
check.addEventListener('input',validatelang);
var langu = "";
function validatelang(){
    var checkboxes =
    document.getElementsByName('check');  
    var n=0;
    for (var i = 0; i < checkboxes.length; i++) {
            
        if (checkboxes[i].checked) {
        langu += checkboxes[i].value +""+",";
        n++;
    }
    }
    if(n==0){
    langE.innerHTML='Fill any one Language';
    return false;
    }
}
-------------beforecheck---
var tamil=document.getElementById("lang-1");
var english=document.getElementById("lang-2");
var malayalam=document.getElementById("lang-3");
var telungu=document.getElementById("lang-4");
 tamil.addEventListener('input',validatelang);
english.addEventListener('input',validatelang);
malayalam.addEventListener('input',validatelang);
telungu.addEventListener('input',validatelang);
var langE=document.getElementById("lang-err");

*/

//---------------docment write--------------------
 
   

