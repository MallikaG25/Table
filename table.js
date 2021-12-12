let color = ["green", "crimson", "black", "blue", "orange", "purple", "yellow", "red","magenta"];

let m = 2;
function table(){
    let n = "";
    for(let i=1;i<=10;i++){
        n += (i*m) + " ";
    }
    let El = document.createElement('div');
    El.innerText = n;
    El.style.color = color[m-2];
    
    El.style.fontSize = 25+m*4+"px";
    document.body.append(El);
    if(m>=10){
        clearInterval(set);
    }
    m++;
    
};
var set = setInterval(table,5000);