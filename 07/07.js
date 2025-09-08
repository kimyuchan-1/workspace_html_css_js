// 해결문제 1
document.addEventListener("DOMContentLoaded",()=>{
    // node 가져오기
    // 주사위 이미지 가져오기
    const imgDice = document.querySelectorAll("#diceDiv > img");
    // 주사위 버튼 가져오기
    const bt = document.querySelectorAll("#btDiv > button");
    //console.log(bt[1]);

    // 버튼 클릭 이벤트
    for (let bton of bt) {
        bton.addEventListener("click",()=>{
            let n = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] % 6) + 1; //1~6
            imgDice[0].setAttribute("src",`../img/${n}.png`);
            imgDice[0].setAttribute("alt",`${n}`);
            imgDice[1].setAttribute("src",`../img/${bton.innerHTML[0]}.png`);
            imgDice[1].setAttribute("alt",`${bton.innerHTML[0]}`);

            // 주사위 결과 출력
            let result;
            if (n == bton.innerHTML[0]) result = `맞춤`;
            else result = `틀림`;
            document.querySelector("#resultDiv").innerHTML = `<h3><span>${result}</span></h3>`;
        })
    }

});