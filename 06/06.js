document.addEventListener("DOMContentLoaded",()=>{
    // node 가져오기
    // 주사위 이미지 가져오기
    const imgDice = document.querySelector("#diceDiv > img");
    // 주사위 버튼 가져오기
    const bt = document.querySelector("#btDiv > button");

    // 버튼 클릭 이벤트
    bt.addEventListener("click",()=>{
        let n = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] % 6) + 1; //1~6
        imgDice.setAttribute("src",`../img/${n}.png`);
        imgDice.setAttribute("alt",`${n}`);
    })
});


