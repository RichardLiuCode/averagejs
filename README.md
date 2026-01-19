# AverageJS

A JavaScript library that can calculate the average such as mean, median, mode from a bunch of numbers.

# Installation

Add this script tag to your HTML code

```html
<script src="https://cdn.jsdelivr.net/npm/averagejs@1.0.1/script.min.js"></script>
```

# Useage

**Get the Mean of a bunch of numbers.**

```JavaScript
let inputNumbers = [2, 9, 4, 6, 8];
let result = getMean(inputNumbers);
console.log(result); // 5
```

----
**Get the Median of a bunch of numbers.**

```JavaScript
let inputNumbers = [5, 4, 2, 6, 3];
let result = getMean(inputNumbers);
console.log(result); // 4
```

**Get the Mode of a bunch of numbers.**

```JavaScript
let inputNumbers = [1, 1, 2, 2, 3];
let result = getModes(inputNumbers);
console.log(result); // 1,2
```
