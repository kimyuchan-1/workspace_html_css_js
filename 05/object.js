// object (객체)
let obj = {'오렌지': '🍊'};

// 객체에 값 추가
obj['사과'] = '🍎';
obj['바나나'] = '🍌';
//let obj = { '사과': '🍎', '바나나': '🍌'};

console.log(obj);

// key가 없으면 추가 / 있으면 수정
obj['사과'] = '🍏';
obj['포도'] = '🍇';

console.log(obj);

// 객체 요소 삭제
delete obj['사과'];
console.log(obj);

// 키만 추출
console.log(Object.keys(obj));

// 값만 추출
console.log(Object.values(obj));

// 키와 값 추출
console.log(Object.entries(obj));

// 객체 순회
for (let key of Object.keys(obj)) {
    console.log(key, obj[key]);
}
for (let value of Object.values(obj)) {
    console.log(value);
}
for (let [key, value] of Object.entries(obj)) {
    console.log(key, value);
}

// 전개 연산자
let obj2 = {'딸기': '🍓'};

let obj3 = {...obj, ...obj2};
console.log(obj3);