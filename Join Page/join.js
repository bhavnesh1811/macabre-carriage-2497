let button=document.querySelector("#submit");

let dataArr=JSON.parse(localStorage.getItem("details"))||[];

button.addEventListener("click",function(event){
    event.preventDefault();
    // console.log("working");

    let dataObj={
        email:form.email.value,
        first:form.first.value,
        last:form.last.value,
        pass:form.pass.value,
        date:form.date.value,
        month:form.month.value,
        year:form.year.value,
        women:form.women.value,
        men:form.men.value

    }
    if(dataObj.email=="" || dataObj.first=="" || dataObj.last=="" || dataObj.pass=="" || dataObj.date==0 || dataObj.month==0 || dataObj.year==0){
        alert("Please fill all Details first")
    }else if(dataObj.pass.length<=9){
        alert("Password length must be 10 or more characters");
    }else if(checkEmail(dataObj.email)){
        alert("Email is already registered");
    }
    else{
        dataArr.push(dataObj);
        localStorage.setItem("details",JSON.stringify(dataArr));
        window.location.href="http://127.0.0.1:5500/macabre-carriage-2497/Signin%20Page/signin.html?"
    }

    function checkEmail(email){
        // let flag=false;
        let count=0;
        let dataArr=JSON.parse(localStorage.getItem("details"))||[];
        // console.log(dataArr)
        dataArr.map(function(el){
            if(el.email===email){
                count++;
            }
        })
        if(count>=1){
            // console.log(count)
            return true;
        }else{
            return false;
        }
    }
    
})



