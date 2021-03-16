//step1, build the menu
var lis;
var ul1 = document.getElementById("navbar__list");
window.onload =function() {
    function fun(x){   
        var liEle = document.createElement("li");
        liEle.setAttribute = "oldcolor";
        var aa = document.createElement("a");
        aa.innerHTML="section"+String(x);
        //aa.setAttribute("class", "nav_button");
        liEle.appendChild(aa);
        ul1.appendChild(liEle);
    }
    
    for(i=0; i<4; i++){
        fun(i+1);
    }

    
 //step2, Scroll to section on link click   
    lis = document.getElementsByTagName("li");
    function scroll(section){
        document.getElementById(section).scrollIntoView({block: "end", behavior: "smooth"});
     }

    function addclick_forall(num){
        for (var i=0; i<num; i++){
            let section = "section"+String(i+1);
            lis[i].addEventListener("click", function(e){
                e.preventDefault();
                scroll(section);
             },false);
        }
    }
    addclick_forall(4);
}


 //step3, Set sections as active
function getViewport(){
    if (document.compatMode == "BackCompat"){
        return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
        };
    } else {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight
        }; 
    }
}

//do the scroll function, and highlight navigation menu
window.onscroll = function() {  
    var in_viewport;
    for (var i=0; i<4;i++){
        var box = document.getElementById("section"+String(i+1));
        var rect = box.getBoundingClientRect();
        //console.log(rect);
        viewport = getViewport();
        //see if currection section in viewport or not.
        if (rect.top<viewport.height-200 && rect.bottom>(viewport.height-window.innerHeight+200)) {
            //console.log("in viewport");
            lis[i].classList.add("nav_button");
        }
        else{
            //console.log("not in viewport");
            lis[i].classList.remove("nav_button");
        }
    }
   
}

/*
function doStuff() {
    alert( this.innerHTML );
}
*/
