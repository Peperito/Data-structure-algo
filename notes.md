# Theory

## Introduction to Big-O notation:

### 2 main questions:
    - How much **time** does this algo needs to finish
    - How much **space** does this algo needs for computation

Big-O spells the worst case as the data gets arbitrarly large. For this reason, constants are ignored.

Constant Time: O(1)
Logarithmic Time: O(log(n))
Linear Time: O(n)
Linearithmic Time: O(nlog(n))
Quadric Time: O(n²)
Cubic TIme: O(n³)
Exponential Time: O(b^n), b>1
Factorial Time: O(n!)

### Properties:

What is the big-O notation for f(n) = 7 log(n)³ + 15n² + 2n³ + 8?
O(f(n)) = O(n³)

Why => Because this is the biggest, most dominant term in this function when the sample size get arbitrarly large.
We are not trying to get exact time, but only how does it grow.
Practically speaking on a small dataset a "faster" algotrithm can be worst, here only the worst case on a large dataset is considered.

### Examples
nested for loops, for every single input we go through every single iput so O(n²)
QuickSort -> O(n logn)
Binary Search tree -> O(log n)