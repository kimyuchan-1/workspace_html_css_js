// 해결문제 2
document.addEventListener("DOMContentLoaded",()=>{
    //node 가져오기
    const img = document.querySelector("#img");
    const bt = document.querySelector("#bt");
    const txt = document.querySelector("#txt");
    let rdnum = 0;
    let flag = false;

    const init = (flagV, txtDV, btV, imgV) => {
        flag = flagV;
        txt.style.display = txtDV;
        bt.value = btV;
        img.setAttribute("src", `../img/${imgV}.png`);
        txt.focus();
    }
    
    // 버튼 클릭시 random 숫자와 비교
    bt.addEventListener("click",(e)=>{
        e.preventDefault();

        // random 숫자 생성
        if (!flag) {
            rdnum = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] % 10) + 1;
            init(true, "inline-flex","확인","what");
        }
        
        // 입력값과 랜덤값 비교 및 img 변경
        if (parseInt(txt.value) > rdnum) {
            img.setAttribute("src", "../img/down.png");
        } else if (parseInt(txt.value) < rdnum) {
            img.setAttribute("src", "../img/up.png");
        } else if (parseInt(txt.value) == rdnum) {
            txt.value = "";
            init(false, "none","다시 시작", "good");
        }

    });
    
});