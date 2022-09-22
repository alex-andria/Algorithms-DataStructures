// Official Intro to Big O

// Big O Notation
    // Is a way to formalize fuzzy counting
    // It allows us to talk about how the runtime of an algorithm grows as the inputs grow
    // We wont care about the details only the broad trends
// Big O Definition
    // We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times of f(n), as n increases
        // f(n) could be linear (f(n) =n)
        // f(n) could be quadratic (f(n) = n^2)
        // f(n) could be constant (f(n) = 1)
        // f(n) could be something entirely different!
// Example 1 - addUpToSlow (addUpToFirst) (big o of n, as n grew the run time grew relative to n)
    // Always 3 operations
    // O(n)
        // As n grows, it has no change reflected in the run time
// Example 2 - addUpToFast (addUpToSecond) (constant, always took same amount of time)
    // Number of operations is (eventually) bounded by a multiple of n (say, 10n)
    // O(1)
// Example 3 - countUpAndDown (similar to add up to slow)
    // As n grows, we have roughly n operations
    // Both for loops are O(n)
    // Simplified to O(n)
// Example 3 - printAllPairs (quadratic)
    // Nested for loop within a for loop
    // O(n) within an O(n) operation
    // O(n^2)
