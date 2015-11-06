## js-part-one exercises  
Run SpecRunner.html in your browser. At the top of the page you can navigate between 'Spec List'
(to see all passing / failing tests) and 'Failures' (to see all errors if any).
Make all tests green by implement the following functions in the given order
and reuse as much logic as possible. Place each function definition in the 'src' folder under the same name.
All function should be global. The file for the first function is provided as an example.
The unit test for each function are in the 'spec' folder under the same name.

### 1. forEach
```javascript
var arr = [1,2,3];
var result = forEach(function (x) {
    console.log(x);
}, arr);
```

### 2. map
```javascript
var arr = [1,2,3];
var result = map(function (x) {
    return 2 * x;
}, arr);

console.log(result); // [2, 4, 6]
```

### 3. repeat
```javascript
var result = repeat(5, 'a');

console.log(result); // ['a', 'a', 'a', 'a', 'a']
```

### 4. filter
```javascript
var arr = [1,2,3,4,5,6,7,8,9];

var result = filter(function (x) {
	return x % 2 === 1;
}, arr);

console.log(result); // [1,3,5,7,9]
```

### 5. reject
```javascript
var arr = [1,2,3,4,5,6,7,8,9];
var result = reject(function (x) {
	return x % 2 === 1;
}, arr);

console.log(result); // [2,4,6,8]
```

### 6. compact
```javascript
var arr = [false, 1, 'are', '', fn, 0, 2, null, '3', undefined, NaN];
var result = compact(arr);

console.log(result); // [1, 'are', fn, 2, '3']
```

### 7. any
```javascript
var arr = ['test', 'angular', 'js', 'loops'];
var result = any(function (x) {
	return x === 'js';
}, arr);

console.log(result) // true
```

### 8. all
```javascript
var arr = ['test', 'angular', 'js', 'loops'];
var result = all(function (x) {
	return typeof x === 'string';
}, arr);

console.log(result); // true
```

### 9. slice
```javascript
var arr = [1,2,3,4];
var result = slice(1, 3, arr);

console.log(result); // [2,3]
```

### 10. take
```javascript
var arr = [1,2,3];
var result = take(2, arr);

console.log(result); // [1,2]
```

### 11. head
```javascript
var arr = [1,2,3];
var result = head(arr);

console.log(result); // 1
```

### 12. tail
```javascript
var arr = [1,2,3];
var result = tail(arr);

console.log(result); // [2,3]
```

### 13. reduce
```javascript
var arr = [1,2,3,4,5,6,7,8,9,10];
var result = reduce(function (acc, x) {
	return acc + x;
}, 0, arr);

console.log(result); // 55
```

### 14. flatten
```javascript
var arr = [1,2,[3,4], 5, [6,7]];
var result = flatten(arr);

console.log(result); // [1,2,3,4,5,6,7]
```

### 15. find
```javascript
var arr = [1,2,3];
var result = find(function (x) {
	return x === 2;
}, arr);

console.log(result); /// 2
```

### 16. unique
```javascript
var arr = [1,2,2,3,1];
var result = unique(arr);

console.log(result); // [1,2,3]
```

### 17. difference
```javascript
var arr = [1,2,3,4];
var reference = [7,6,5,4,3];
var result = difference(reference, arr);

console.log(result); // [1,2]
```
#### 18. union
```javascript
var firstArray = [1,2];
var secondArray = [1,2,3];
var result = union(firstArray, secondArray);

console.log(result); // [1,2,3]
```

### 19. zip
```javascript
var firstArray = [1,2,3,4];
var secondArray = ["a","b","c"];
var result = zip(firstArray, secondArray);

console.log(result); // [[1,"a"],[2,"b"],[3,"c"]]
```

### 20. either
```javascript
var firstFunc = function (x) { return x > 10; };
var secondFunc = function (x) { return x; };
var newFunc = either(firstFunc, secondFunc);
var result1 = newFunc(11);
var result2 = newFunc(8);

console.log(result1); // true
console.log(result2); // 8
```

### 21. compose
```javascript
function inc(x) { return ++x; }
function neg(x) { return -x; }
var f = compose(inc, neg, Math.pow);
var result = f(3, 4);

console.log(result); // -80
```
