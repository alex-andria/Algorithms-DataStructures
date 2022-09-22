
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += ar[i];
    }
    return total;
}

function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
    newArr.push(2 * arr[i]);
    }
    return newArr;
}


// Space Complexity
// So far, we’ve been focusing on time complexity: how can we analyze the runtime of an algorithm as the size of the inputs increases?
// We can also use big O notation to analyze space complexity: how much additional memory do we need allocate in order to run the code in our algorithm?
// What about the inputs?
// Sometimes you’ll hear the term auxiliary space complexity to refer to space required by the algorithm, not including space taken up by the inputs.
// Unless otherwise noted, when we talk about space complexity, technically we’ll be talking about the auxiliary space complexity. 
// Space Complexity in JS (Rules of Thumb)
// Most primitives (booleans, numbers, undefined, null) are constant space
// Strings require O(n) space (where n is the string length)
// Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)
//  Example
// Example 1
// function sum(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += ar[i];
//     }
//     return total;
// }
// Only two variables, they exist no matter what. No new variables are being made based on length. So we have constant space. Its always the same no matter the size of the iput
// O(1) space!
// Example 2
// function double(arr){
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++){
//     newArr.push(2 * arr[i]);
//     }
//     return newArr;
// }
// Its making a new array and loops over, pushes new items into new array. 
// Space that it’s taking up is directionally proportionate to n, to the input array. 
// O(n) space!
