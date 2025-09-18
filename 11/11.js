document.addEventListener("DOMContentLoaded",()=> {
    const img = document.querySelector("#img");
    const lt = document.querySelector("#lt");
    const rt = document.querySelector("#rt");
//    let lastClicked = null;
    
//    console.log(img);
//    console.log(rt);
//    console.log(lt);

    const srcL = ["../img/html.png","../img/css.png","../img/js.png","../img/react.png"];
    let i = 0;

    const imageUpdate = () => {
        img.setAttribute("src",srcL[i]);
        img.setAttribute("alt",srcL[i].split("/")[2]);
        
        if (i == srcL.length-1) rt.style.backgroundColor = "white";
        else rt.style.backgroundColor = "black";
        if (i == 0) lt.style.backgroundColor = "white";
        else lt.style.backgroundColor = "black";
    }

    rt.addEventListener("click", (e) => {
        e.preventDefault();
        i++;
        console.log(i);

        if (i >= srcL.length) {
            i = srcL.length-1;
        }
        imageUpdate();
        
        console.log(i);

    })
    lt.addEventListener("click", (e) => {
        e.preventDefault();
        i--;
        console.log(i);

        if (i < 0) {
            i = 0;
        }
        imageUpdate();
        
        console.log(i);
    })
    
})