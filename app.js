function getHistory() {
    return document.getElementById('history_value').innerText;
};

function printHistory(num) {
    return document.getElementById('history_value').innerText = num;
};

function getOutput() {
    return document.getElementById('output_value').innerText;
};

function printOutput(num) {
    if (num == '') {
        return document.getElementById('output_value').innerText = num;
    } else {
        return document.getElementById('output_value').innerText = formatNumber(num);
    }
};
function formatNumber(num) {
    let n = Number(num);
    let value = n.toLocaleString('en');
    return value;
};

let history;
let number = document.getElementsByClassName('number');
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener('click', function () {
        history = getHistory();
        history += this.id;
        printHistory(history);
    })
};
function normalNumber(num) {
    return Number(num.replace(/,/g, ""));
}
let operator = document.getElementsByClassName('operator');
for (let i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        if (this.id == 'clear') {
            printHistory('');
            printOutput('');
        } else if (this.id == 'backspace') {
            history = getHistory();
            history = history.substr(0, history.length - 1);
            printHistory(history);
            printOutput('')
        } else if (this.id == '=') {
            history = getHistory();
            let result = eval(history);
            printOutput(result);
            printHistory(history);
        } else {
            history = getHistory();
            let output = getOutput();
            if (output) {
                history = normalNumber(output) + this.id;
                printHistory(history);
            } else if (history == "") {
                printHistory("");
            } else if (isNaN(history[history.length - 1])) {
                history = history.substr(0, history.length - 1) + this.id;
                printHistory(history);
            }
            else {
                history += this.id;
                printHistory(history);
            };
        };
    });
};