const lotto = () => {
    //0. 숫자 저장 배열
    let nArr = [];
    
    //1. 숫자 7개 중복되지 않도록 생성
    while(nArr.length < 7) {
        // let n = Math.floor(Math.random()*45+1); //1~45
        // random 메소드는 의사난수 생성기이므로 보안에 취약
        // crypto.getRandomValues() 메소드는 진짜 난수 생성기이므로 보안에 강함
        let n = Math.floor(window.crypto.getRandomValues(new Uint32Array(1))[0] % 45) + 1; //1~45
        // 숫자 배열에 중복된 숫자가 없을 때만 push
        if (!nArr.includes(n)) nArr.push(n);
    }
    //console.log(nArr);

    //1.1 보너스 번호를 마지막에 저장
    const bonus = nArr.pop();
    //console.log(nArr);
    //console.log(bonus);

    //1.2 배열 정렬
    nArr.sort((a,b) => a-b);
    //console.log(nArr);

    //2. 태그 생성, + 태그도 생성
    let tags = [];
    for (let n of nArr) {
        tags.push(`<span class = "sp${Math.floor((n/10))}">${n}</span>`);
    }
    tags.push(`<span class = "spplus">+</span>`);
    tags.push(`<span class = "sp${Math.floor((bonus/10))}">${bonus}</span>`);
    //console.log(tags);

    //3. 화면에 보이도록
    document.getElementById("spDiv").innerHTML = tags.join('');
}
