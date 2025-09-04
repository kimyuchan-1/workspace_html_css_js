// 기존 방식
// function hello(n) {
//     if (n == '1') alert("안녕하세요.");
//     else alert('반갑습니다.');

//     console.log("콘솔출력입니다.");
// }

const hello = (n) => {

    if (n == '1') alert("안녕하세요.");
    else alert('반갑습니다.');

    console.log("콘솔출력입니다.");
}
// == : 값을 비교(타입 변환이 필요하지 않음)
// === : 값 + 타입 비교(자동 타입 변환 x)

const checkvar = () => {
//    x = 10 ;

//    var x ;
    let x ;
    x = 'test' ;

    const y = '20' ;
//    y = 40;
//    console.log("x ="+x);
    console.log(`x = ${typeof(x)} y = ${typeof(y)}`)
    console.log(`문자열 ${x}은 문자인가요? ${isNaN(x)?'예':'아니요'}`)
    console.log(`문자열 ${y}은 문자인가요? ${isNaN(y)?'예':'아니요'}`)
}