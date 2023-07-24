function gimme(triplet) {
    // Create a copy of the input array and sort it in ascending order
    const sortedArray = triplet.slice().sort((a, b) => a - b);
    // Find the middle element in the sorted array
    const middleValue = sortedArray[1];
    // Find the index of the middle element in the original array
    const middleIndex = triplet.indexOf(middleValue);
    return middleIndex;
    }