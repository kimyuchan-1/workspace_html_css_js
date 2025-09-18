document.addEventListener("DOMContentLoaded",()=> {
    const img = document.querySelector("#img");
    const menu = document.querySelectorAll("#menuDiv > img");
    
//    console.log(img);
 //   console.log(menu);

    for (let i = 0; i< menu.length; i++){
        menu[i].addEventListener("mouseover",()=> {
        
            let src = menu[i].getAttribute("src");
            img.setAttribute("src",src);
            img.setAttribute("alt", menu[i].getAttribute("alt"))
        
        })
    }

//    for (let mImg of menu) {
//       mImg.addEventListener("click",()=> {
//        
//            let src = mImg.getAttribute("src");
//            img.setAttribute("src",src);
//            img.setAttribute("alt", mImg.getAttribute("alt"))
//        
//        })
//    }
    
})