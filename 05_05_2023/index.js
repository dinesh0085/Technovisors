var form=document.getElementById("form")
var name=document.getElementById("name");
var username=document.getElementById("username");
var email=document.getElementById("email");
var phone=document.getElementById("phone");
var dob=document.getElementById("dob");
var diologe_box=document.getElementById("dialoge");

diologe_box.style.display="none"



username.addEventListener("input",()=>{
    username.style.border="2px solid teal"  
})

email.addEventListener("input",()=>{
    email.style.border="2px solid teal"  
})

phone.addEventListener("input",()=>{
    phone.style.border="2px solid teal"  
})

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    var current_year=new Date().getFullYear()
    var birth_year=new Date(dob.value).getFullYear()

    var age=current_year-birth_year;
 console.log(age);

    if(username.value==="" || email.value==="" || phone.value==="" || age<18){
       alert("Form Submit failed, Please Fill all the mandatory fields")
       if(username.value==""){
         username.style.border="1px solid red"
       }
       if(email.value==""){
        email.style.border="1px solid red"
      }
      if(phone.value==""){
        phone.style.border="1px solid red"
      }

      if(age<18){
       diologe_box.style.display="flex"
      }
    }else{
        alert("Successfully Submited Form !!") 
    }
})