document.addEventListener("DOMContentLoaded",()=> {
    const bt = document.querySelector("#mix");
    const msg = document.querySelector("#msg");
    const cols = document.querySelectorAll(".col");
    
    let arrnum = [0,0,0,0,0,0,0,0,1];
    let flag = false;
    let cnt = 0;
    let idx;

    msg.textContent="폭탄을 섞어주세요."

    const init = () => {
        flag = false;
        cnt = 0;
        bt.innerHTML = "폭탄 섞기";
        msg.innerHTML = "";
    }


    bt.addEventListener("click", (e) => {
        e.preventDefault;
        //if (flag) return;

        if (bt.innerHTML == "다시하기") init();

        console.log(cnt);

        if (!flag) {
            if (cnt == 0) 
            arrnum.sort(() => Math.random() - 0.5);
            console.log(arrnum);
            console.log(arrnum.indexOf(1));
            msg.textContent = "폭탄을 찾아보세요.";
            flag = true;
        }
        
        for (let a of cols) {

            a.addEventListener("click", () => {
                cnt++;
                idx = parseInt(a.getAttribute("id").replace("col",""));
                if (arrnum[idx] == 0) {
                    a.innerHTML = `💖`;
                    if (cnt == 8) {
                        cols[arrnum.indexOf(1)].innerHTML = `💖`;
                        msg.innerHTML = `<span>성공</span>`;
                        flag = false;
                    }
                    msg.textContent = ""
                } else {
                    a.innerHTML = `💣`;
                    msg.innerHTML = `<span>실패</span>`;
                    flag = false;
                    cnt = 0;
                }
                
            })
            
        }

    })

})