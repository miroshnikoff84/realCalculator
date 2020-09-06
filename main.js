let operation = document.querySelector("#operation"),
    input = document.querySelector('#input'),
    num1 = [],
    num3,
    firstNum,
    sign,
    a,
    b;

const btn = document.querySelectorAll(".btn"),
    calc = () => {
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
            },
            sum = () => {
                input.value = '';
                a = parseFloat(firstNum);
                sign = '+';
                num1 = [];
                console.log(a + '-' + typeof (a) + '  записали в преременную а sign +');
            },
            sub = () => {
                input.value = '';
                a = parseFloat(firstNum);
                sign = '-';
                num1 = [];
                console.log(a + '-' + typeof (a) + '  записали в преременную а sign -');
            },
            division = () => {
                input.value = '';
                a = parseFloat(firstNum);
                sign = '÷';
                num1 = [];
                console.log(a + '-' + typeof (a) + '  записали в преременную а sign ÷');
            },
            multi = () => {
                input.value = '';
                a = parseFloat(firstNum);
                sign = '*';
                num1 = [];
                console.log(a + '-' + typeof (a) + '  записали в преременную а sign *');
            },
            percent = () => {
                b = parseFloat(firstNum);
                switch (sign) {
                    case '+':
                        input.value = (a / 100) * (100 + b);
                        break;
                    case '-':
                        input.value = (a / 100) * (100 - b);
                        break;
                    case '*':
                        input.value = a * ((a / 100) * b);
                        break;
                    case '÷':
                        input.value = a / ((a / 100) * b);
                        break;
                }

            },
            reset = () => {
                console.log('reset');
                input.value = '0';
                num1 = [];
                num3 = '';
                firstNum = '';
                sign = '';
                a = '';
                b = '';
            },

            result = () => {
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
                case '%':
                    percent();
                    break;
            }

        });

    };


calc();