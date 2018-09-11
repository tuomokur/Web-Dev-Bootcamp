var nappi = document.querySelector("button");
/*
var onMusta = false;

nappi.addEventListener("click", function(){
    if(onMusta){
        document.body.style.background = "white";
        onMusta = false;
    }else{
        document.body.style.background = "black";
        onMusta = true;
    }
    
});
*/

nappi.addEventListener("click", function(){
    document.body.classList.toggle ("musta");
});