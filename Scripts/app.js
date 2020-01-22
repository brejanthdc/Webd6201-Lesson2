"use strict";

//IIFE - immediatley  invoked function expression
//mean? -> anonymous seld- executing function
(function (){
    //h2 now exists in all scopes
    let h2;
    
    //Event handlers
    function MouseOver ()
    {
        h2.style.color ="green";
        h2.style.fontSize = "20px";
    }

    function MouseOut ()
    {
        h2.style.color ="black"; 
        h2.style.fontSize = "30px";
  
    }

    function Start ()
    {
        console.log("%cApp Started..." , "color:blue; font-size:20px");
        Main();
    }
    let Main = function()
    {
        // get a reference to the content area
       let contentArea = document.getElementById("contentArea");

       //create a h2 element 
        h2 = document.createElement("h2");
       // add an class attribute to the h2 tag
       h2.setAttribute("class", "display-6");
       h2.textContent ="a secondary header";
       // append the new node to the content area
       contentArea.appendChild(h2);

       h2.addEventListener("click",function(){
                        // If           equals    then(?)      otherwise(:)
        h2.style.color = (h2.style.color == "blue") ? "black" : "blue";
       });

       h2.addEventListener("mouseover",MouseOver);

       h2.addEventListener("mouseout",MouseOut);
    }

    window.addEventListener("load",Start);
})();