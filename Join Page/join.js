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
    if(dataObj.email=="" || dataObj.first=="" || dataObj.last=="" || dataObj.pass=="" || dataObj.date=="" || dataObj.month=="" || dataObj.year=="" || dataObj.women=="" ||dataObj.men=="" ){
        alert("Please fill all Details first")
    }
    else{
        dataArr.push(dataObj);
        localStorage.setItem("details",JSON.stringify(dataArr));
    }
    
})