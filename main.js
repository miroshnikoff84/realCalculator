let operation = document.querySelector("#operation"),
    input = document.querySelector('#input'),
    num1 = [],
    firstNum,
    sign,
    a,
    b,
    num3;
const btn = document.querySelectorAll(".btn");
const calc = () => {
    btn.forEach((elem) => {
        elem.addEventListener('click', () => {
            num1.push(elem.textContent);
            firstNum = num1.join('');
            input.value = firstNum;
            console.log(firstNum + '-' + typeof (firstNum));

        });
    });
    const clear = () => {
        num3 = num1.pop();
        firstNum = num1.join('');
        input.value = firstNum;
        console.log(firstNum + '-' + typeof (firstNum));
    }
    const sum = () => {
        input.value = '';
        a = parseFloat(firstNum);
        sign = '+';
        num1 = [];
        console.log(a + '-' + typeof (a) + '  записали в преременную а sign +');
    }

    const sub = () => {
        input.value = '';
        a = parseFloat(firstNum);
        sign = '-';
        num1 = [];
        console.log(a + '-' + typeof (a) + '  записали в преременную а sign -');
    }
    const division = () => {
        input.value = '';
        a = parseFloat(firstNum);
        sign = '÷';
        num1 = [];
        console.log(a + '-' + typeof (a) + '  записали в преременную а sign ÷');
    }
    const multi = () => {
        input.value = '';
        a = parseFloat(firstNum);
        sign = '*';
        num1 = [];
        console.log(a + '-' + typeof (a) + '  записали в преременную а sign *');
    }

    const reset = () => {
        console.log('reset');
        input.value = '0';
        num1 = [];
        num3 = '';
        firstNum = '';
        sign = '';
        a = '';
        b = '';
    }

    const result = () => {
        switch (sign) {
            case '+':
                b = parseFloat(firstNum);
                input.value = (a + b);
                console.log(typeof (firstNum));
                break;
            case '-':
                b = parseFloat(firstNum);
                input.value = (a - b);
                console.log(typeof (firstNum));
                break;
            case '÷':
                b = parseFloat(firstNum);
                input.value = (a / b);
                console.log(typeof (firstNum));
                break;
            case '*':
                b = parseFloat(firstNum);
                input.value = (a * b);
                console.log(typeof (firstNum));
                break;

        }
    }
    operation.addEventListener('click', (event) => {
        let target = event.target;
        switch (target.innerHTML) {
            case '+':
                sum();
                break;
            case '-':
                sub();
                break;
            case '*':
                multi();
                break;
            case '÷':
                division();
                break;
            case '=':
                result();
                break;
            case 'C':
                reset();
                break;
            case 'clear':
                clear();
                break;
        }

    });

};


calc();