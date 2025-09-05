// 리터럴 표기법
let arr = [1,2,3,4,5];

// Array 생성자
let arr1 = new Array(5);
let arr2 = new Array(1,2,3);

// 배열의 크기
console.log(arr);
console.log(`arr: ${arr}`);
console.log(`arr의 요소 개수: ${arr.length}`);

// 배열의 초기화
console.log(arr2);
// arr2.length = 0;
arr2 = [];
console.log(arr2);

// 배열 요소 추가
console.log(arr);
arr.push(6);
console.log(arr);

// 배열 요소 삭제
arr.pop();
console.log(arr);

// 배열의 순회
// 1. 기본 순회
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

// 2. 배열 index 반환(for ~ in)
for (let i in arr) console.log(arr[i]);

// 3. 배열 value 반환
for (let item of arr) console.log(item);

// 4. forEach 메소드 (index도 반환 가능)
arr.forEach((item, i) => {
    console.log(i, item);
})

// 배열 map 메소드
// arr 배열의 각 요소가 매개변수 item이 하나씩 들어감
// 매개변수 item은 2가 곱해진 상태로 반환됨

// const arr3 = arr.map((item)=>{
//     return item*2
// });

// 콜백 함수(map, filter)는 매개변수가 하나라면 () 생략 가능
// 매개변수 2개라면 index를 가져옴
// 콜백 함수(map, filter)에 return 구문만 존재한다면 {return } 생략 가능

const arr3 = arr.map(item => item*2);
console.log(arr3);

const arr4 = arr.map((item, i) => item*i);
console.log(arr4);

// 배열 filter 메소드
const arr5 = arr.filter((item)=>{
    return item % 2 == 0;
});
console.log(arr5);

const arr6 = arr.filter(item => item%2==0);
console.log(arr6);

// map 메소드 구현
let arr7 = [];
for (let i of arr) arr7.push(i*2);
console.log(arr7);

// filter 메소드 구현
let arr8 = [];
for (let c of arr) {
    if (c % 2 == 0) arr8.push(c);
}
console.log(arr8);