// 회문을 위한 func1
const check1 = () => {
    // 0. 버튼의 submit기능을 없앰
    // e.preventDefault() ;

    // 1. 사용자가 입력한 내용을 가져오기
    const inputV = document.getElementById("txt1").value;

    // 2. 입력한 문자열 뒤집기
    let resultV = "";

    // 2-1. 입력한 문자열의 공백 제거
    let inputVt = inputV.replaceAll(' ','');

    // for (let i = inputVt.length-1; i >= 0; i--) {
    //     resultV = resultV + inputVt[i] ;
    // }

    resultV = inputVt.split('').reverse().join('');
    // console.log(resultV);

    // 3. 입력한 문자열과 뒤집은 문자열이 같은지 비교
    // 3-1. 결과를 input 요소에 출력
    if (inputVt == resultV) {
        document.getElementById("txt2").value = `${inputV}은(는) 회문입니다.`;
    } else {
        document.getElementById("txt2").value = `${inputV}은(는) 회문이 아닙니다.`;
    }
    // 3-2. 결과를 div 요소에 출력
    document.getElementById("msg").innerHTML = 
    `<span>"${inputV}"</span>은(는) ${inputVt == resultV ? "회문입니다." : "회문이 아닙니다."}`;

}

// 숫자합계
const check2 = () => {
    // 1. 사용자가 입력한 내용 가져오기
    const inputV = document.getElementById("txt1").value;

    // 2. 문자열에서 숫자 인식해서 더하기
    let sum = 0;

    // for (let i = 0; i < inputV.length; i++) {
    //     if (!isNaN(inputV[i])) sum += parseInt(inputV[i]);
    // }

    // python for ~ in 반복문과 유사하게 js에서는 for ~ of 반복문 존재
    // js에서도 for ~ in 반복문이 있지만 value가 아닌 key를 반환
    for (let c of inputV) {
        if (!isNaN(c)) sum += parseInt(c);
    }

    // 3. 합계 출력
    document.getElementById("txt2").value = sum;
    document.getElementById("msg").innerHTML = `합계 =&nbsp;<span>${sum}</span>`;
    // &nbsp; 공백 추가
}

// 취소처리
const check3 = () => {
    document.getElementById("txt1").value = "";
    document.getElementById("txt2").value = "";
    document.getElementById("msg").innerHTML = "";

    // 원하는 위치로 커서 이동
    document.getElementById("txt1").focus();
}