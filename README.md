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

In the beginning for loops, we separate the array into parts theoretically by iterating through the array. does this will have a divide runtime of log2(n), since the amount of possibilities goes by 2. In the mergesort, while it is in place, we check the first half of the piece we are looking at to the second piece and then after merge them together....
