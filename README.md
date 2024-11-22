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

In a normal recursice mergesort, the array is split into sections and look at those different sections, which is what the first for loops do, which would make this part $log2(n)$ since this in mergesort is what the complexity is of separating the array in smaller bits to then merge. The other for loops iterate over each half of the array that they have been told to look at and compare those parts of the array to eachother, which means each one of those would be n making both for loops $n^2$. This leads to $O(n^2 * log2(n))$ resulting in the worst case $\Theta$ $(n^2 *log2(n))$. 
