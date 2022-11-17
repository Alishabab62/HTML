const div=document.getElementById('change_div');
document.addEventListener('mousemove' , (event)=>{
    console.log(event);
    const width=`${event.pageX}px`
    // const height=`${event.pageY}px`

    div.style.width=width;
    // div.style.height=height;

})