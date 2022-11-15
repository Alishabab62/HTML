const number=document.getElementById('number');
const button=document.getElementById('button');
const forZero=document.getElementById('div');


const count=0;
number.innerText=count;



button.addEventListener('click' ,()=>{
    number.innerHTML++;
});


forZero.addEventListener('mouseover' ,()=>{
    number.innerHTML=0;
});

forZero.addEventListener('mouseout',()=>{
    number.innerHTML=-19;
})