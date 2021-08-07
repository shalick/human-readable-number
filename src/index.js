module.exports = function toReadable(number) {
    let numberPairs = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    };

    if (number in numberPairs) {
        return numberPairs[number];
    }

    const numberString = number.toString().split("");

    function getDozenNumber(numberPairs, numberString) {
        if (numberString in numberPairs) {
            return numberPairs[numberString];
        }
        const humanReadableDozenNumber = [];
        humanReadableDozenNumber.push(
            numberPairs[numberString[0] + "0"],
            numberPairs[numberString[1]]
        );
        return humanReadableDozenNumber.join(" ");
    }

    if (numberString.length === 2) {
        return getDozenNumber(numberPairs, numberString);
    }

    if (numberString.length === 3) {
        const humanReadableHundredNumber = [];
        if (numberString[1] === "0" && numberString[2] === "0") {
            humanReadableHundredNumber.push(
                numberPairs[numberString[0]] + " hundred"
            );
            return humanReadableHundredNumber.join(" ");
        }
        if (numberString[1] === "0") {
            humanReadableHundredNumber.push(
                numberPairs[numberString[0]] + " hundred",
                getDozenNumber(numberPairs, numberString[2])
            );
            return humanReadableHundredNumber.join(" ");
        }
        humanReadableHundredNumber.push(
            numberPairs[numberString[0]] + " hundred",
            getDozenNumber(numberPairs, numberString[1].concat(numberString[2]))
        );
        return humanReadableHundredNumber.join(" ");
    }
};
