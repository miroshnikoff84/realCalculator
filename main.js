let operation = document.querySelector("#operation"),
    input = document.querySelector('#input'),
    num1 = [], // переменная типа string записанное в массив при вводе
    num3,      // переменная типа string после нажатия на clear
    firstNum,  // переменная преобразуется из num3(string) в firstNum(number)
    sign,      // переменная хранящая введенный оператор (+ - * ÷)
    a,         // переменная первое оперируемое число
    b;         // переменная второе оперируемое число

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
            },
            sum = () => {
                a = parseFloat(firstNum);
                sign = '+';
                input.value = a + sign;
                num1 = [];
            },
            sub = () => {
                a = parseFloat(firstNum);
                sign = '-';
                input.value = a + sign;
                num1 = [];
            },
            division = () => {
                a = parseFloat(firstNum);
                sign = '÷';
                input.value = sign;
                num1 = [];
            },
            multi = () => {
                a = parseFloat(firstNum);
                sign = '*';
                input.value = sign;
                num1 = [];
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
                        break;
                    case '-':
                        b = parseFloat(firstNum);
                        input.value = (a - b);
                        break;
                    case '÷':
                        b = parseFloat(firstNum);
                        input.value = (a / b);
                        break;
                    case '*':
                        b = parseFloat(firstNum);
                        input.value = (a * b);
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
                default:
                    break;
            }

        });

    };

calc();