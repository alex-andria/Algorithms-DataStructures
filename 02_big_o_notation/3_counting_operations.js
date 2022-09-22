//counting operations


// If not time, then what?
    // Rather than counting seconds, which are so variable,
    // Let’s count the number of simple operations the computer has to perform!
// Looking at add_up_to_faster
        // 3 simple operations (1 mult, 1 add, 1 divide), regardless of the size of n
// Looking at add_up_to_slower
    //  total += 1;
        // n additions
        // n assignments
    // i++
        // n additions
        // n assignments
    // let total = 0;
        // 1 assignment
    // let i = 1;
        // 1 assignment
    // i <= n;
        // n comparisons
// Counting this codes operations
    // Depending on what we count, the number of operation can be as low as 2n or as high as 5n + 2
    // But regardless of the exact number, the number of operations grows roughly proportionally with n
