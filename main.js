let wrap = document.querySelector("#wrap"), // родитель кнопок операторов
    input = document.querySelector('#input'),
    num1 = [], // переменная типа string записанное в массив при вводе
    num3,      // переменная типа string после нажатия на clear
    firstNum,  // переменная преобразуется из num3(string) в firstNum(number)
    sign,      // переменная хранящая введенный оператор (+ - * ÷)
    a,         // переменная первое оперируемое число
    b;         // переменная второе оперируемое число

const btn = document.querySelectorAll(".btn"),
    calculator = () => {
        btn.forEach((elem) => {
            elem.addEventListener('click', () => {
                num1.push(elem.textContent);
                firstNum = num1.join('');
                input.value = firstNum;
            });
        });
        const clear = () => {
                num3 = num1.pop();
                firstNum = num1.join('');
                input.value = firstNum;
            },
            operation = (param) => {
                a = parseFloat(firstNum);
                sign = param;
                input.value = a + sign;
                num1 = [];

            },
            percent = () => {
                b = parseFloat(firstNum);
                sign === '+' ? input.value = (a / 100) * (100 + b) :
                    sign === '-' ? input.value = (a / 100) * (100 - b) :
                        sign === '*' ? input.value = a * ((a / 100) * b) :
                            sign === '÷' ? input.value = a / ((a / 100) * b) : null;

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
                b = parseFloat(firstNum);
                sign === '+' ? input.value = (a + b) :
                    sign === '-' ? input.value = (a - b) :
                        sign === '*' ? input.value = (a * b) :
                            sign === '÷' ? input.value = (a / b) : null;
            }
        wrap.addEventListener('click', (event) => {
            let target = event.target;
            target.innerHTML === '+' ? operation('+') :
                target.innerHTML === '-' ? operation('-') :
                    target.innerHTML === '*' ? operation('*') :
                        target.innerHTML === '÷' ? operation('÷') :
                            target.innerHTML === '=' ? result() :
                                target.innerHTML === '%' ? percent() :
                                    target.innerHTML === 'C' ? reset() :
                                        target.innerHTML === 'clear' ? clear() : null;

        });

    };

calculator();