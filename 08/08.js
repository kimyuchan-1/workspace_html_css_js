// 해결문제 2
document.addEventListener("DOMContentLoaded",()=>{
    //node 가져오기
    const sel1 = document.querySelector("#sel1");
    const sel2 = document.querySelector("#sel2");
    const numInput = document.querySelector("#inputNum");
    const numOutput = document.querySelector("#outputNum");
    const label1 = document.querySelector("[for='inputNum']");
    const label2 = document.querySelector("[for='outputNum']");

    // console.log(label1.textContent);

    // select 변경시
    sel1.addEventListener("change",()=>{
        sel2.value = sel1.value == "°C" ? "°F" : "°C";

        label1.value = '';
        label1.textContent = sel1.value;

        label2.value = '';
        label2.textContent = sel2.value;
    });

    sel2.addEventListener("change",()=>{
        sel1.value = sel2.value == "°C" ? "°F" : "°C";

        label1.value = '';
        label1.textContent = sel1.value;
        label2.value = '';
        label2.textContent = sel2.value;
    });

    // 온도 변환 함수
    const covertTemp = (input, unit) => {
        let output;
        if (unit == "°C") {
            output = (parseFloat(input) * 9/5) + 32;
        } else {
            output = (parseFloat(input) - 32) * 5/9;
        }
        return output;
    }

    // input 값 변경시
    numInput.addEventListener("input",()=>{
        let input = numInput.value;
        let unit = sel1.value;
        let output;

        output = covertTemp(input, unit);
        numOutput.value = parseFloat(output.toFixed(4));
    });
});