const nam=document.getElementById('name');
const emai=document.getElementById('email');
const btn=document.getElementById('btn');
const head=document.getElementById('heading');
document.getElementById('form');
console.log(emai.innerText)
emai.addEventListener('focus' ,()=>{
    emai.style.backgroundColor= 'red';
});

emai.addEventListener('blur' ,(event)=>{
    if(event.target.value==="")  emai.style.border="1px solid green";
   
});

let obj=[];
form.addEventListener('submit' ,function(event){
    event.preventDefault();
    // console.log(email.value);
    // console.log(nam.value);
   const Name=emai.value;
   const Email=nam.value;
    obj.push({Name,Email});
    console.log(obj);
});

nam.addEventListener('change' ,(event)=>{
    const text=event.target.value;
    head.innerText=text;
})



