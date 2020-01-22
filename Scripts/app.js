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
       // creating a new element)paragraph tag
       let firstParagraph = document.createElement("p");
       // configuring the new element
       firstParagraph.textContent ="This is a very short paragraph";
       // get a reference to the parent node in this case h2
       let parentDiv = h2.parentNode;
       // get  a reference to the first h1 tag
       let h1 = document.getElementsByTagName("h1")[0];
       // parent of node u want, what you want to insert, which node u want
       parentDiv.insertBefore(firstParagraph,h2);

     //  copy another element in this case firstParagraph
       let anotherParagraph = firstParagraph.cloneNode(true);
       // test of the copy
       h1.parentNode.insertBefore(anotherParagraph,h1);

        // use console log to find out information about code in the console
//console.log(parentDiv.lastChild);
       //parentDiv.removeChild(parentDiv.lastChild);

       for (let index =0; index < parentDiv.childNodes.length; index++)
       {
           let childNodes = parentDiv.childNodes[index]
        parentDiv.removeChild(childNodes);
        //first two childs not removed because parentdiv happens after h2 tag
       }
       
       let ul = document.getElementsByTagName("ul")[0];
       //console.log(ul);
//  ul is main element tag,  li is tag within ul
      /*  ul.childNodes.forEach(li => {
           
      
           //console.log(li);
           li.remove;
       });
 */
// This wont delete all of them becase un.children.length becomes dynamic meaning as it removes one the array size changes
       for (let index =0; index < ul.children.length ; index++)
       {
           let child = ul.children[index];
           // This wont delete all of them becase un.children.length becomes dynamic meaning as it removes one the array size changes
           //child.remove();
           child.style.display = "none";
       }




    }

    window.addEventListener("load",Start);
})();