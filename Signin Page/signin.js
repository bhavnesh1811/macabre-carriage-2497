let dataArr=JSON.parse(localStorage.getItem("details"))||[];
let form=document.querySelector("#form");
let signin=document.querySelector("#submit");



signin.addEventListener("click",function(event){
    event.preventDefault();
    let inp_email=form.email.value;
    let inp_pass=form.pass.value;
        if(inp_email===""  && inp_pass===""){
            alert("Please fill credentials first");
        }else if(inp_email===""){
            alert("Please enter your email address");
        }else if(inp_pass===""){
            alert("Please enter your password");
        }
        else if(checkEmail(dataArr) && checkPass(dataArr)){
            alert("Login Success");
            window.location.href="http://127.0.0.1:5500/macabre-carriage-2497/Womens%20Page/nav.html";
        }
        else if(checkPass(dataArr)===false){
            alert("Wrong Password");
        }else{
            alert("Wrong Credentials");
        }
})

function checkEmail(data){
    
    let inp_email=form.email.value;
    
    let count=0;
   
    dataArr.map(function(data){
        if(data.email===inp_email){
            count++;
        }
    })
    
    if(count>=1){
        return true;
    }else{
        return false;
    }
}

function checkPass(data){
    let inp_pass=form.pass.value;

    let count=0;

    dataArr.map(function(data){
        if( data.pass===inp_pass){
            count++;
        }
    })
    
    if(count>=1){
        return true;
    }else{
        return false;
    }
}