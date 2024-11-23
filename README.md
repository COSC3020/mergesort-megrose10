# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

I used the slides and video from class to look at how merge works and how it sorts. The TA helped me in office hours with runtime analysis. I also used https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/ to look over the analysis of recursive mergesort.
I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

In the beginning for loop, we say how big each subarray should be this time around. This will have a divide runtime of log2(n), since in mergesort, the size gets cut from 1 and moves up until it is at the array length moving up by 2s, first "subarray" will be 1, 2, 4, 8... In the i for loop, we then find the mid and high of the part of the array we are working on, which finding the size of this is constant and does not depend on the input, but would be $O(1)$, after each loop we then move on to the next array and find its mid and high. Then, each for loop after will look at either the first half or second half to compare the elements in the arrays, making each for loop look at half of the current subarray, which makes them together each $O(n)$. So this will be $O(n^2)$, since there are 2 for loops comparing the elements. So, $O(n^2)log2n + O(1) = n^2log2n$ will be the worst case. 
