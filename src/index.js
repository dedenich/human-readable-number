module.exports = function toReadable (number) {
  
    const UNITS = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    };

    const FIRST_DOUBLES = {
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    };

    const TENS = {
        1: "ten",
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety"
    };

    const HUNDRED = "hundred";

    const numArr = String(number).split("");
    let resArr = [];

    function addTensToResult(position) {
        if (numArr[position] === "1") {
            resArr.push(FIRST_DOUBLES[numArr[position] + numArr[position + 1]]);
        } else {
            if (numArr[position] !== "0") {
                resArr.push(TENS[numArr[position]]);
            }
            
            if (numArr[position + 1] !== "0") {
                resArr.push(UNITS[numArr[position + 1]]);
            }
        }
    }

    if (numArr.length === 1) {
        resArr.push(UNITS[numArr[0]]);
    } else if (numArr.length === 2) {
        addTensToResult(0);
    } else if (numArr.length === 3) {
        resArr.push(UNITS[numArr[0]], HUNDRED);

        addTensToResult(1);
    }

    return resArr.join(" ");
}