/*
# ======== Possible Computer Science Fundamentals Interview Questions =======

##### Q: How might you determine the efficiency of an algorithm?

> - Determined by the Big O notation

##### Q: Why is it important?

> - So that we can have the code as smooth as possible. Speed is important. Planning for growth / scaling up

##### Q: What categories of complexities are described in Big O Notations?

> - Time complexity (How long code will take to execute as data increases)
> - Space complexity (How much space is needed and how efficiently it is used. Possibly just look for them to understand the fact that there is often a trade off between time and space complexity)
> - More space = less time and the other way around
> - cheat-sheet: https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/big-o-notation/big-o-cheatsheet.pdf

##### Q: What is O( 1 )?

> - Constant Time
>   - Examples: setting a variable once, performing a calculation, determining if an integer is even or odd.
>   - Basically a flat line on a graph. Easy to plan for.

##### Q: What is O( n )?

> - Linear Time
>   - Examples: basic non-nested for loops, finding smallest or largest item in an unsorted array.
>   - Basically a 45 degree line on graph, still easy to plan for, scaling probably won’t run away from you.

##### Q: What is O( n^2 )?

> - N squared
>   - basic nested for loops, bubble sort, insertion sort.
>   - Starts to get harder to plan for as data sets increase dramatically.

##### Q: What is O( log n )?

> - Log N (Logarithmic Time)
>   - binary search \* when you can easily eliminate large sections of data on each iteration.
>   - Means that scaling large data sets won’t dramatically increase the output time.

##### Q: Describe 3 differences between a linked list and an array.

> - Linked list
>   - Non-contiguous space requirement. Ex: Data doesn’t HAVE to be in same space on disk.
>   - Can be more efficient for memory allocation. Easier to resize.
>   - Can be less efficient for caching (not contiguous)

##### Q: Design an algorithm to find the nth element in a linked list in constant time.

> - Linked list do not allow random access. Therefore it is not possible to find the nth element in constant time. The only way you can have a O(1) access is if you are finding the 1st element. Otherwise finding an element in a linked list will require O(n) run time.

##### Q: What is the difference between a Binary Tree and a Binary Search Tree?

> - Binary Search Trees have all left descendants are less than or equal to node, and all right descendants are greater than node.

##### Q: Describe the 3 types of BST traversal.

```console
   25
  /  \
10    32
```

> - In-order (from the smallest number to the biggest) (ex: 10, 25, 32)
>   - Visit left branch, then current node, then right branch. Visits all nodes in ascending order on a BST.
> - Pre-order (looks like the “<“ sign) (node first, branches last) (ex: 25, 10, 32)
>   - Visits current node first, then left branch, then right branch. Root node is always first node visited. Useful for directory structures, organisation charts
> - Post-order (looks like the “>“ sign) (branches first, node last) (ex: 10, 32, 25)
>   - Visits left branch, then right branch, then current node. Root node is always last visited. Useful for language processors

##### Q: What are the algorithms for searching through arrays and trees?

> - Linear search
>   - look through an array one-by-one until you find what you are looking for
>   - example: https://www.youtube.com/watch?v=-PuqKbu9K3U
> - Binary search
>   - narrow it down by always guessing in the middle of the range. So you would start at 50 (half-way between 0 and 100), then if you were too high go to 25 (half-way between 0 and 50), then if you were too low go to 37 (half-way between 25 and 50), and so on.
>   - example: https://www.youtube.com/watch?v=iP897Z5Nerk
> - Depth-first search
>   - traverse as far as you can down the tree before back-tracking
>   - example: check if a person related to a past royal relative has the right to be a king
> - Breadth-first search
>   - search works across the rows of a tree (the top row will be handled first, then the second row, and so on)
>   - example: check if multiple people from the same generation are part of the royal family

##### Q: How the arrays sorting methods work? (`ALL CAPITALS TEXT` has the keywords to be remembered by)

`DIVIDE THE UNSORTED LIST INTO N SUBLISTS`

> - `REPEATEDLY SWAPPING
> - `DIVIDE AND CONQUER`
> - `REPEATEDLY FINDING THE MINIMUM ELEMENT` > `INSERT EACH ELEMENT ENCOUNTERED INTO ITS CORRECT POSITION`.
>   `TURNING IT INTO A MAX HEAP` > `SORTING PAIRS OF ELEMENTS FAR APART FROM EACH OTHER`, then `DISTRIBUTING THE ELEMENTS OF AN ARRAY INTO A NUMBER OF BUCKETS`.

##### Q: What are the stable sorting algorithms?

> - Algorithms that maintain the relative order of records with equal keys (i.e. values). That is, a sorting algorithm is stable if whenever there are two records R and S with the same key and with R appearing before S in the original list, R will appear before S in the sorted list.
> - Some Sorting Algorithm is stable by nature like Insertion Sort, Merge Sort and Bubble Sort etc

##### Q: What are the arrays sorting methods by speed ascending?

> - The slowest is selection, then bubble, then insertion, then shell, then merge, then heap, then quick, then quick3
> - Memory tricks to remember the speed order:
>   - by sentence:
>   - -—> The SELECTED, BUBBLE can’t INSERT into the SHELL while MERGING the HEAP QUICKly
> - by abbreviation:
>   - -—> Se.Bu.In.Sh.Me.He.Qs
> - or find a rhythm to rap it :-)

##### Q: What is faster than a bubble sort?

> - Insert, Shell, Heap, Merge, Quick and Quick3
> - visualization graph: https://github.com/mariusbanea/web-developers-toolkit/blob/master/algorithms/algorithms-sorting/algorithms-arrays-sorting.gif

##### Q: What is a Fibonacci sequence?

> - The Fibonacci sequence is one where a number is found by adding up the two numbers before it. Starting with 0 and 1, the sequence goes 0, 1, 1, 2, 3, 5, 8, 13...

##### Q: What is the runtime of the Fibonacci recursive algorithm?

> - Exponential O(2^n). This is not a desirable runtime if we were to find the Fibonacci sequence for a large number because the runtime will grow exponentially. Although the code looks very elegant, it would be better to implement this using iterative approach or using memorization to cache the results of each recursive calls to be used without calling the function again.
*/
