function dropdown(){
    var ul = document.getElementById("dropdownClick");
    if(ul.className== "topnav"){
        ul.className+= " responsive";
    }
    else{
        ul.className="topnav";
    }
}

setTimeout(timeout1, 2000);
setTimeout(timeout2, 4000);
setTimeout(timeout3, 6000);

function timeout1() {
    document.getElementById("yyy").src= "yoga1.jpg"
}

function timeout2() {
    document.getElementById("yyy").src= "yoga3.png"
}

function timeout3() {
    document.getElementById("yyy").src= "yoga2.jpg"
}