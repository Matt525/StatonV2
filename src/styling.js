const e1 = document.querySelector('e1_2');

e1.addEventListener('mouseover',()=>{
    if(e1){
    e1.innerTEXT = "";
    console.log("e1 works");
    }
    else{
    console.log("e1 is false");
    }
})

