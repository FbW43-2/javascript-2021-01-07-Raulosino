
//Question number 1
function checkPalindrome() {
    let string = document.getElementById("palindromeString").value;
    string = string.toLowerCase();
    let reverse = reverseString(string)
    if (string === reverse) {
        alert("The word " + string + " is a palindrome")
    } else (
        alert("The word " + string + " is not a palindrome")
    )
}

function reverseString(string) {
    let reverseArray = string.split("");
    reverseArray.reverse();
    let reverse = reverseArray.join("");
    return reverse;
}

//Question 2
function orderAlphabetical() {
    let string = document.getElementById("stringInputOrder").value;
    string = string.toLowerCase();
    let array = string.split("");
    array = array.sort();
    let newString = array.join("");
    alert("Word:" + string + "\nordered alphabetically : " + newString)
}

//Question 3
function reverseNumber() {
    let number = document.getElementById("inputNumberReverse").value;
    alert("Number: " + number + "\nReverse number: " + reverseString(number));
}

//Question 4
function checkLongestWord() {
    let sentence = document.getElementById("inputSentence").value
    let array = sentence.split(" ");
    let longestWord = "";
    for (i = 0; i < array.length; i++) {
        if (array[i].length > longestWord.length) {
            longestWord = array[i];
        }
    }
    alert("Longest string in the sentence: " + longestWord);
}

//Question 5
function checkCommonArray() {
    let arrayOne = document.getElementById("inputArrayOne").value
    let arrayTwo = document.getElementById("inputArrayTwo").value
    let shortestArray = [];
    let longestArray = [];
    let commonArray = [];
    if (arrayOne.length >= arrayTwo.length) {
        longestArray = arrayOne.split(",");
        shortestArray = arrayTwo.split(",");
    }
    if (arrayTwo.length >= arrayOne.length) {
        longestArray = arrayTwo.split(",");
        shortestArray = arrayOne.split(",");
    }
    for (var i = 0; i < shortestArray.length; i++) {
        for (var x = 0; x < longestArray.length; x++) {
            if (shortestArray[i] == longestArray[x]) {
                commonArray.push(shortestArray[i])
            }
        }
    }
    if (commonArray.length > 0) {
        alert("The common array is: " + commonArray);
    } else {
        alert("There are no common elements");
    }
}


//Question 6
function checkUniqueValues() {
    let string = document.getElementById("inputArrayUnique").value;
    let array = string.split(",");
    let uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let x = 0; x < array.length; x++) {
            if (array[i] == array[x]) {
                counter++
            }
        }
        if (counter == 1) {
            uniqueArray.push(array[i]);
        }
    }
    alert(uniqueArray);
}


//Question 7
function numberToArray() {
    let string = document.getElementById("inputArrayNumber").value;
    let array = string.split("");
    alert(array);
}