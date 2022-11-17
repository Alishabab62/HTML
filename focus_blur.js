const nam=document.getElementById('name');
const email=document.getElementById('email');
const btn=document.getElementById('btn');
document.getElementById('form');
console.log(email.innerText)
email.addEventListener('focus' ,()=>{
    email.style.backgroundColor= 'red';
});

email.addEventListener('blur' ,()=>{
    email.style.border="1px solid green";
});

form.addEventListener('submit' ,function(event){
    event.preventDefault();
    console.log(email.value);
    console.log(nam.value);
})