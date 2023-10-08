<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer: A `{}`

</b></summary>

<p>

#### Answer: A `{}`

<i>In javascript we can assign value to a variable without declaring it.
As the value of the variable greetign is an empty object , it is being logged in the console, </i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer: C </b></summary>
<p>

#### Answer: C `'12'`

<i>In javascript if we add a number and a string the output is a concatenated string of the number and string.
Here number 1 and string 2 is concatenated thus the output is '12'</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer: A</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>The reference to info.favouriteFood Changed to a new string but this change did not affect the original food array because they were separate references to different strings.
As a result the value of food array remained `['🍕', '🍫', '🥑', '🍔']` </i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer: B</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

<i>The function sayHi expects a name parameter to be passed when being called . But we called the function with out any arguments.
In js, when we call functions without passing the expected arguments the parameters takes the value undefined.
So when called the function it returned `Hi there, undefined` </i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer: C</b></summary>
<p>

#### Answer: C :3

<i>Inside the forEach loop we have a condition that checks if the value of the current element of the array nums is a truthy value , and then will increase the value of count. As the 0 is not a truthy the condition was not fullfilled , but it was fullfilled for the element 1 , 2 ,3 as a result the count was increased three times. Thus when we log the value of count to the console it will show 3</i>

</p>
</details>
