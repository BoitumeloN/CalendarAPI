
const date = new Date();
let currentTime = date.getSeconds();
console.log(currentTime);

function updateTitle(){
    const change = document.getElementsByClassName("title")[0];
    if (currentTime % 2 == 0){
        change.innerHTML = "SCUDERIA";
    } 
}

updateTitle();
setInterval(updateTitle,1000)




