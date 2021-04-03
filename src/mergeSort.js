/**
 * @param {Array} left
 * @param {Array} right
 */
const merge = (left, right) => {
    let sorted = [],
        leftIndex = 0,
        rightIndex = 0;

    // concat values into sorted, ordered
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            sorted.push(left[leftIndex]);
            leftIndex++;
        } else {
            sorted.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return sorted.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

/**
 * @param {Array} unsortedArray
 */
const mergeSort = (unsortedArray) => {
    // no need to sort if array only has 1 item or is empty
    if (unsortedArray.length <= 1) {
        return unsortedArray;
    }

    // divide in half, figure out the middle
    const middle = Math.floor(unsortedArray.length / 2);

    // divide in left/right from the middle
    const left = unsortedArray.slice(0, middle);
    const right = unsortedArray.slice(middle);

    // use recursion to combine left and right side
    return merge(mergeSort(left), mergeSort(right));
};

export default mergeSort;
