// Simplify the big O expression as much as possible - O(n + 10) 
// O(n)
// Simplify the big O expression as much as possible -	 O(100 * n) 
// O(n)
// Simply the following big O expression as much as possible - 		O(25) 
// O(1)
// Simply the following big O expression as much as possible -  		O(n^2 + n^3) 
// O(n^3)
// Simply the following big O expression as much as possible - 		O(n + n + n + n) 
// O(n)


// Determine the time complexity for the following function 
// function logUpTo(n) {
//    for (var i = 1; i <= n; i++) {
    //    console.log(i);
//    }
// }
    // O(n)

// Determine the time complexity for the following function 
// function logAtMost10(n) {
//    for (var i = 1; i <= Math.min(n, 10); i++) {
    //    console.log(i);
//    }
// }
    // O(1)

    // It's not logarithmic because the growth stops completely when n reaches 10. With logarithmic functions the growth slows down with input size but it doesn't stop completely.
// As for why it's not O(n), the reason is again the fact that runtime stops growing after we reach the input of 10.
// When we're using the big O notation we are looking at the bigger picture - how much the runtime grows as we start increasing the input towards really large numbers. With this function, it's runtime is constant all the way from n = 10 to n = infinity. This is why we can ignore all of those cases where n < 10, they are irrelevant when looking at the big picture and we can simplify the big O to O(1).
// My understanding was that we should consider n to be infinity, hence the outcome is that it is always being capped till the 10th iteration, thus O(10), simplified into O(1)
// Determine the time complexity for the following function
// function logAtLeast10(n) {
//    for (var i = 1; i <= Math.max(n, 10); i++) {
    //    console.log(i);
//    }
// }
    // O(n)

// Determine the time complexity for the following function
// function onlyElementsAtEvenIndex(array) {
//    var newArray = Array(Math.ceil(array.length / 2));
//    for (var i = 0; i < array.length; i++) {
    //    if (i % 2 === 0) {
        //    newArray[i / 2] = array[i];
    //    }
//    }
//    return newArray;
// }
    // O(n)

// Determine the time complexity for the following function
// function subtotals(array) {
//    var subtotalArray = Array(array.length);
//    for (var i = 0; i < array.length; i++) {
    //    var subtotal = 0;
    //    for (var j = 0; j <= i; j++) {
        //    subtotal += array[j];
    //    }
    //    subtotalArray[i] = subtotal;
//    }
//    return subtotalArray;
// }
    // O(n^2)
