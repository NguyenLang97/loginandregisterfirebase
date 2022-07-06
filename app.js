// tim so lon thu 2 va so lan xuat hien trong mang

const arrCheck = [1, 3, 5, 7, 8, 10, 5, 9, 10, 4];

// tim so lon thu 2
function getSecondHighest(arrCheck) {
    var first = 0,
        second = 0;
    for (var i = 0; i < arrCheck.length; i++) {
        if (arrCheck[i] > first) {
            second = first;
            first = arrCheck[i];
        } else if (arrCheck[i] > second && arrCheck[i] < first) {
            second = arrCheck[i];
        }
    }
    return console.log(second);
}

getSecondHighest(arrCheck);

// Tìm số lần xuất hiện
var counts = {};
for (var i = 0; i < arrCheck.length; i++) {
    var num = arrCheck[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
console.log(counts[10], counts[2], counts[1], counts[5]);

// Bai 2
const string = "[4,5,6,23,34,55,55,5,6]";
const newArr2 = JSON.parse(string);

function getHighest(arr) {
    let maxNumber;
    for (let i = 0; i < arr.length; i++) {
        if (!maxNumber) {
            maxNumber = arr[i];
        }
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return console.log(maxNumber);
}

getHighest(newArr2);
