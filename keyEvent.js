const heading=document.getElementById('heading');
document.addEventListener('keydown' ,(event)=>{
    // console.log(event)
    const key=event.key;
    console.log(key);
    shift=event.shiftKey;  //true
    if(shift){
        if(key!='Shift'){
            heading.innerText+=key.toLocaleUpperCase();
        }
    }
    else{
        heading.innerText+=key;
    }
});

// document.addEventListener('keyup',function(){
//     heading.innerText='';
// });


// Change



