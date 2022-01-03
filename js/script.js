'use strict';

const arr = [1, 2, [3, 4], 5, [6, [7, 8]], 9];



function getNewArr(array) {
    let newArr = [];

    if (arguments.length > 1) {
        throw new Error('Function accepts only 1 argument, too much arguments provided');
    }

    for (let i = 0; i < array.length; i++) {
        Array.isArray(array[i])
            ? newArr.push(...getNewArr(array[i]))
            : newArr.push(array[i]);
    }
    return newArr;
}

console.log(getNewArr(arr));


















